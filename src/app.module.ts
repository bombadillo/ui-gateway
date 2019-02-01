import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ComponentController } from './component/component.controller';

@Module({
  imports: [],
  controllers: [ComponentController],
  providers: [AppService],
})
export class AppModule {}
