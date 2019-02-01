import { Injectable } from '@nestjs/common';
import { EndpointRetrieverService } from './endpoint-retriever.service';

@Injectable()
export class UIRetrieverService {
  constructor(private endpointRetrieverService: EndpointRetrieverService) {}

  retrieveByToken(token: string) {
    console.log(`loading UI for ${token}`);
    var uiEndpoint = this.endpointRetrieverService.retrieveByToken(token);

    if (uiEndpoint) {
      return `
      <html>
        <body>
          <h1>🌮</h1>
        </body>
      </html>
    `;
    }

    return null;
  }
}
