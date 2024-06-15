import { Injectable, OnModuleInit } from '@nestjs/common';
import { ClientTCP } from '@nestjs/microservices';
import { tcpClientOptions } from './options';

@Injectable()
export class TcpClientService extends ClientTCP implements OnModuleInit {
  constructor() {
    super(tcpClientOptions.options);
  }

  onModuleInit() {
    this.connect().then(() => console.log('TCP client connected'));
  }

  async sendMessage(message: string) {
    const pattern = { cmd: 'message' };
    const payload = message;
    return this.send(pattern, payload);
  }
}
