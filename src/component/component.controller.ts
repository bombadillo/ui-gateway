import {
  Controller,
  Get,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UIRetrieverService } from 'src/services/component-provider/ui-retriever.service';

@Controller('component')
export class ComponentController {
  constructor(private uiRetrieverService: UIRetrieverService) {}

  @Get('getComponent/:componentToken')
  getComponent(@Param('componentToken') componentToken) {
    var ui = this.uiRetrieverService.retrieveByToken(componentToken);

    if (ui) {
      return ui;
    }

    throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
  }
}
