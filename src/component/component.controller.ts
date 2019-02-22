import {
  Controller,
  Get,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UIRetrieverService } from 'src/services/component-provider/ui-retriever.service';
import { ComponentType } from 'src/enums/component-type.enum';

@Controller('component')
export class ComponentController {
  constructor(private uiRetrieverService: UIRetrieverService) {}

  @Get('getComponent/:componentToken/:componentType')
  getComponent(
    @Param('componentToken') componentToken: string,
    @Param('componentType') componentType: string,
  ) {
    console.log(`got token ${componentToken}`);
    var parsedComponentType: ComponentType = ComponentType[componentType];
    var ui = this.uiRetrieverService.retrieveByToken(
      componentToken,
      parsedComponentType,
    );

    if (ui) {
      return ui;
    }

    throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
  }
}
