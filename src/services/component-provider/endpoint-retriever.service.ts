import { Injectable } from '@nestjs/common';
import { ComponentType } from 'src/enums/component-type.enum';

Injectable();
export class EndpointRetrieverService {
  retrieveByToken(token: string, componentType: ComponentType): string {
    console.log(`loading endpoint for ${token}`);

    if (token === '2bca1032-4700-45db-975c-30dae65de7ae') {
      return `http://localhost:5002`;
    }

    if (token === 'f3aadb56-21cf-417a-99ce-2201b1fd855b') {
      return 'http://localhost:5003';
    }

    if (token === '6aedd25d-4c73-49f3-ba86-fd9103a252ee') {
      return 'http://localhost:5004';
    }

    if (token === 'ec9796c3-129c-4dc0-af5e-5f2170ca260d') {
      return 'http://localhost:5005';
    }

    return null;
  }
}
