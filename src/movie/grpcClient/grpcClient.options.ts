import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ['movie'],
    protoPath: [join(__dirname, './movie.proto')],
    url: process.env.GRPC_CLIENT_URL,
  },
};
