import { Controller, Get, Param } from '@nestjs/common';
import { ComponentRequest } from 'src/models/component/component-request.model';

@Controller('component')
export class ComponentController {
  @Get('getComponent/:componentToken')
  getComponent(@Param('componentToken') componentToken) {
    return componentToken;
  }
}
