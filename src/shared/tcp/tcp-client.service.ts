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

  async sendMessage(messagePattern: string, message: string) {
    const pattern = { cmd: messagePattern };
    return this.send(pattern, message);
  }
}
