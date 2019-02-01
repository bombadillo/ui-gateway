import { Injectable } from '@nestjs/common';
import { ClientRetrieverService } from './client-retriever.service';

@Injectable()
export class ClientAuthenticatorService {
  constructor(private clientRetrieverService: ClientRetrieverService) {}

  authenticateClientByToken(token: string) {
    var client = this.clientRetrieverService.getClientByToken(token);

    if (client) {
      return true;
    }

    return false;
  }
}
