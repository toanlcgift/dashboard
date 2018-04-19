export class UserLogin {
    constructor(phone?: string, password?: string, rememberMe?: boolean) {
        this.phone = phone;
        this.password = password;
        this.rememberMe = rememberMe;
    }

    phone: string;
    password: string;
    rememberMe: boolean;
}
