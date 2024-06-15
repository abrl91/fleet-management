import { Transport } from '@nestjs/microservices';

export const tcpServerOptions = {
  transport: Transport.TCP,
  options: {
    host: 'localhost',
    port: 8877,
  },
};

export const tcpClientOptions = {
  transport: Transport.TCP,
  options: {
    host: 'localhost',
    port: 8877,
  },
};
