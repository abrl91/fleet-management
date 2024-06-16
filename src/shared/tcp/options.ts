import { Transport } from '@nestjs/microservices';

export const tcpServerOptions = {
  transport: Transport.TCP,
  options: {
    host: 'localhost',
    port: 3000,
  },
};

export const tcpClientOptions = {
  transport: Transport.TCP,
  options: {
    host: 'localhost',
    port: 3000,
  },
};
