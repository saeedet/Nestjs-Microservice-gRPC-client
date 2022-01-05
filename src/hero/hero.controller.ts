import { Controller, Get, Inject, OnModuleInit, Param } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { HeroById } from './interfaces/hero-by-id.interface';
import { Hero } from './interfaces/hero.interface';

interface HeroService {
  findOne(data: HeroById): Observable<Hero>;
}

@Controller('hero')
export class HeroController implements OnModuleInit {
  private heroService: HeroService;
  constructor(@Inject('HERO_PACKAGE') private readonly client: ClientGrpc) {}
  onModuleInit() {
    this.heroService = this.client.getService<HeroService>('HeroService');
  }

  @Get(':id')
  getById(@Param('id') id: string): Observable<Hero> {
    return this.heroService.findOne({ id: +id });
  }

  // @Get()
  // call(): Observable<any> {
  //   return this.heroService.findOne({ id: 1 });
  // }
}
