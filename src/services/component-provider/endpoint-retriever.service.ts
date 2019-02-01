import { Injectable } from '@nestjs/common';

Injectable();
export class EndpointRetrieverService {
  retrieveByToken(token: string): string {
    console.log(`loading endpoint for ${token}`);

    if (token === '2bca1032-4700-45db-975c-30dae65de7ae') {
      return 'http://localhost:3001/ui';
    }

    return null;
  }
}
