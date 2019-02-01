import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';
import { ClientAuthenticatorService } from 'src/services/client/client-authenticator.service';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  constructor(private clientAuthenticator: ClientAuthenticatorService) {}

  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {
      var clientAuthToken = req.headers.authorization;

      console.log(`Authing... for token ${clientAuthToken}`);

      var authenticated = this.clientAuthenticator.authenticateClientByToken(
        clientAuthToken,
      );

      if (authenticated) {
        console.log(':D');
      } else {
        console.log(':(');
        res.sendStatus(401);
        return;
      }

      next();
    };
  }
}
