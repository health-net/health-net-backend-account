export interface AuthenticationService {
    login(request: EmailLoginRequestDto): Promise<LoginResponseDto>;
}

export class LoginResponseDto {
    private readonly access_token: string;
    private readonly token_type: string;
    private readonly expiration: number;

    constructor(access_token: string, token_type: string, expiration: number) {
        this.access_token = access_token;
        this.token_type = token_type;
        this.expiration = expiration;
    }
}

export class EmailLoginRequestDto {
    readonly email: string;
    readonly password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}
