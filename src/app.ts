import express, { NextFunction, Request, Response } from 'express';
import { AuthenticationService, EmailLoginRequestDto } from './services/authentication-service';
import { Auth0AuthenticationService } from './services/auth0-authentication-service';

const app: express.Application = express();

const port = process.env.PORT || 3000;

app.use(express.json());

const authentication: AuthenticationService = new Auth0AuthenticationService(
    process.env.DOMAIN || 'healthnet.eu.auth0.com',
    process.env.GRANT_TYPE || 'http://auth0.com/oauth/grant-type/password-realm',
    process.env.CLIENT_ID || 'Ka2UsJrrRL0rjJIfe35TKOsvWcni81Q5',
    process.env.CLIENT_SECRET || '209ad0j09ja09dj209dja09dja092da90',
    process.env.AUDIENCE || 'http://healthnet',
    process.env.REALM || 'Username-Password-Authentication'
);

app.listen(port, () => {
    console.log(`Health-Net authentication service listening on port ${port}!`);
});

app.post('/login/email', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const request: EmailLoginRequestDto = req.body;
        res.status(201).json(await authentication.login(request));
    } catch (error) {
        res.sendStatus(401);
    }
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({
        name: err.name,
        status: 500,
        message: err.message
    });
});
