import express, { NextFunction, Request, Response } from 'express';
import { AuthenticationService, EmailLoginRequestDto } from './authentication-service';
import { Auth0AuthenticationService } from './auth0-authentication-service';

const app: express.Application = express();

const port = process.env.PORT || 3000;

app.use(express.json());

const authentication: AuthenticationService = new Auth0AuthenticationService();

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
