import { Injectable } from '@nestjs/common';
import { Client } from 'src/models/client/client.model';

@Injectable()
export class ClientRetrieverService {
  getClientByToken(token: string): Client {
    if (token === '94288c19-cda4-48bb-88a6-6b73f27d693a') {
      var client = new Client();
      client.name = 'Example Client';
      client.token = '94288c19-cda4-48bb-88a6-6b73f27d693a';

      return client;
    }

    return null;
  }
}
