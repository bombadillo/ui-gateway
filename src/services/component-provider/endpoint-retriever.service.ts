import { Injectable } from '@nestjs/common';
import { ComponentType } from 'src/enums/component-type.enum';

Injectable();
export class EndpointRetrieverService {
  retrieveByToken(token: string, componentType: ComponentType): string {
    console.log(`loading endpoint for ${token}`);

    if (token === '2bca1032-4700-45db-975c-30dae65de7ae') {
      return `http://localhost:3001/ui/${componentType}`;
    }

    return null;
  }
}
