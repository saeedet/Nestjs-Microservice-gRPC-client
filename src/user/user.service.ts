import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { User } from './entities/user.entity';
import { microserviceOptions } from './grpcClient/grpc.options';
import { IGrpcService } from './grpcClient/interfaces/grpc.interface';

@Injectable()
export class UserService implements OnModuleInit {
  @Client(microserviceOptions)
  private client: ClientGrpc;

  private grpcService: IGrpcService;

  onModuleInit() {
    this.grpcService = this.client.getService<IGrpcService>('MovieService');
  }

  async findOne(name: string): Promise<User> {
    return await firstValueFrom(this.grpcService.findOne({ name }));
  }
}
