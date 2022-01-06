import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

// Same options object used by microservice server
export const microserviceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ['movie'],
    protoPath: [join(__dirname, './__proto/movie.proto')],
    url: process.env.GRPC_CLIENT_URL,
    loader: {
      keepCase: true,
      enums: String,
      oneofs: true,
      arrays: true,
    },
  },
};
