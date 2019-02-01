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
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" />

      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="display-4">Tacos</h1>  
      </div>
      
      <div class="container">
        <div class="card-deck mb-3 text-center">

          <div class="card mb-4 shadow-sm">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">🌮 Barbacoa 🌮</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$6</h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>20 flavours included</li>
                <li>10 spices</li>     
                <li>Ultimate enjoyment</li>         
              </ul>
              <button type="button" class="btn btn-lg btn-block btn-primary">Get 🌮</button>
            </div>
          </div>

          <div class="card mb-4 shadow-sm">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">🌮 Chorizo 🌮</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$9</h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>30 slices of sausage</li>
                <li>It'sa spicy boi</li>
                <li>Stomach clenching</li>
              </ul>
              <button type="button" class="btn btn-lg btn-block btn-primary">Get 🌮</button>
            </div>
          </div>

          <div class="card mb-4 shadow-sm">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">🌮 Chipotle 🌮</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$14</h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>Top 🌮 lovers only</li>
                <li>Extreme strength</li>
                <li>Priority toilet support</li>
              </ul>
              <button type="button" class="btn btn-lg btn-block btn-primary">Get 🌮</button>
            </div>
          </div>

        </div>
      </div>
    `;
    }

    return null;
  }
}
