import { Module } from '@nestjs/common';
import { TcpServerService } from './tcp-server.service';
import { TcpClientService } from './tcp-client.service';

@Module({
  providers: [TcpServerService, TcpClientService],
  exports: [TcpServerService, TcpClientService],
})
export class TcpModule {}
