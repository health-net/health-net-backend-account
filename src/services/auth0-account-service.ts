import axios, { AxiosInstance } from 'axios';
import { AccountService, EmailLoginRequestDto, LoginResponseDto } from './account-service';

export class Auth0AccountService implements AccountService {
    private readonly domain: string;
    private readonly grantType: string;
    private readonly clientId: string;
    private readonly clientSecret: string;
    private readonly audience: string;
    private readonly realm: string;
    private readonly axios: AxiosInstance;

    constructor(
        domain: string,
        grantType: string,
        clientId: string,
        clientSecret: string,
        audience: string,
        realm: string,
        ) {
        this.domain = domain;
        this.grantType = grantType;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.audience = audience;
        this.realm = realm;
        this.axios = axios.create({
            baseURL: 'https://' + this.domain,
            headers: {'Content-Type': 'application/json'},
            timeout: 3000,
        });
    }

    public async login(request: EmailLoginRequestDto): Promise<LoginResponseDto> {
        const httpResponse = await this.axios.post('/oauth/token', {
            grant_type: this.grantType,
            client_id: this.clientId,
            client_secret: this.clientSecret,
            audience: this.audience,
            username: request.email,
            password: request.password,
            realm: this.realm
        });
        return new LoginResponseDto(
            httpResponse.data.access_token,
            httpResponse.data.token_type,
            httpResponse.data.expires_in
        )    
    }
}
