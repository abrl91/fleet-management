import { Injectable, OnModuleInit } from '@nestjs/common';
import { ServerTCP } from '@nestjs/microservices';
import { tcpServerOptions } from './options';

@Injectable()
export class TcpServerService extends ServerTCP implements OnModuleInit {
  constructor() {
    super(tcpServerOptions.options);
  }

  onModuleInit() {
    this.listen(() => console.log('TCP server listening'));
  }

  handleConnection(socket: any) {
    console.log('New client connected');
    socket.on('data', (data: Buffer) => {
      const message = data.toString();
      console.log(`Received message: ${message}`);
      socket.write(`Echo: ${message}`);
    });
  }
}
