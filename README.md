# Health-Net Backend Authentication Service

Facade Auth0 authentication handler

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
node.js
```

### Installing

Install npm project dependencies
```
npm install
```

## Deployment

1. Compile TypeScript
```
npm run tsc
```
2. Set environment variables inline and start service
```
PORT=3000 ... npm start
```

## Details
### Environment Variables
| Name          | Description                     | Default value                                    |
|---------------|---------------------------------|--------------------------------------------------|
| PORT  | Service port                    | 3000
| DOMAIN        | Auth0 domain URL                | healthnet.eu.auth0.com                           |
| GRANT_TYPE    | Auth0 authorization flow        | http://auth0.com/oauth/grant-type/password-realm |
| CLIENT_ID     | Auth0 application client ID     | Ka2UsJrrRL0rjJIfe35TKOsvWcni81Q5                 |
| CLIENT_SECRET | Auth0 application client secret | 209ad0j09ja09dj209dja09dja092da90                |
| AUDIENCE      | Target Auth0 API identifier     | http://healthnet                                 |
| REALM         | Realm the user belongs to       | Username-Password-Authentication                 |
