import { Controller, Get, Logger, OnModuleInit, Param } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { grpcClientOptions } from './grpc-config.options';
import { IGrpcService } from './interfaces/grpc.interface';

@Controller()
export class AppController implements OnModuleInit {
  private logger = new Logger('AppController');

  @Client(grpcClientOptions)
  private client: ClientGrpc;

  private grpcService: IGrpcService;

  onModuleInit() {
    this.grpcService = this.client.getService<IGrpcService>('HeroService');
  }

  @Get(':id')
  async getHero(@Param('id') id: string) {
    this.logger.log('Hero id: ' + id);
    return this.grpcService.findOne({ id: +id });
  }

  @Get()
  getHello(): string {
    return 'Hello world';
  }
}
