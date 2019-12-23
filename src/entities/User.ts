import { IUserDetails } from '../interfaces/IUserDetails';

export class User {
    private id: number;
    private username: string;
    private url: string;
    private details: object;

    constructor(params: IUserDetails) {
        this.id = params.id;    
        this.username = params.username;    
        this.url = params.url;    
        this.details = params.details;    
    }

    getId(): number {
        return this.id;
    }

    getUsername(): string {
        return this.username;
    }

    getUrl(): string {
        return this.url;
    }

    getDetails(): object {
        return this.details;
    }
}