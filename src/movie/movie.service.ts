import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { Movie } from './entities/movie.entity';
import { grpcClientOptions } from './grpcClient/grpcClient.options';
import { GrpcMovieService } from './interfaces/grpc.interface';

@Injectable()
export class MovieService implements OnModuleInit {
  @Client(grpcClientOptions)
  private client: ClientGrpc;

  private grpcMovieService: GrpcMovieService;

  onModuleInit() {
    this.grpcMovieService =
      this.client.getService<GrpcMovieService>('MovieService');
  }

  async findOne(name: string): Promise<Movie> {
    console.log(name);
    return await firstValueFrom(this.grpcMovieService.findOne({ name }));
  }
}
