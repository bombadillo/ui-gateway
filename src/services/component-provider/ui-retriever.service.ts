import { Injectable } from '@nestjs/common';
import { EndpointRetrieverService } from './endpoint-retriever.service';
import { ComponentType } from 'src/enums/component-type.enum';
import axios from 'axios';

@Injectable()
export class UIRetrieverService {
  constructor(private endpointRetrieverService: EndpointRetrieverService) {}

  async retrieveByToken(token: string, componentType: ComponentType) {
    console.log(`loading UI for ${token}`);

    var uiEndpoint = this.endpointRetrieverService.retrieveByToken(
      token,
      componentType,
    );

    console.log(`retrieving UI from ${uiEndpoint}`);

    if (uiEndpoint) {
      let response = await axios.get(uiEndpoint);

      if (response.data) {
        return response.data;
      }
    }

    return null;
  }
}
