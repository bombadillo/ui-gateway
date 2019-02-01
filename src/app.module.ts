import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ComponentController } from './component/component.controller';
import { AuthenticationMiddleware } from './middleware/authentication.middleware';
import { ClientRetrieverService } from './services/client/client-retriever.service';
import { ClientAuthenticatorService } from './services/client/client-authenticator.service';
import { EndpointRetrieverService } from './services/component-provider/endpoint-retriever.service';
import { UIRetrieverService } from './services/component-provider/ui-retriever.service';

@Module({
  imports: [],
  controllers: [ComponentController],
  providers: [
    ClientRetrieverService,
    ClientAuthenticatorService,
    EndpointRetrieverService,
    UIRetrieverService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware).forRoutes(ComponentController);
  }
}
