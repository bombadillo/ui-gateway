import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { ComponentRequest } from 'src/models/component-request.model';

@Controller('component')
export class ComponentController {
  @Post('getComponent')
  getComponent(@Body() componentRequest: ComponentRequest) {
    return componentRequest;
  }
}
