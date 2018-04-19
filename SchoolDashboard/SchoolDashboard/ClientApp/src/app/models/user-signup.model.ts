export class UserSignUp {
    constructor(fullname?: string, phone?: string, password?: string, repassword?: string) {
        this.fullname = fullname;
        this.phone = phone;
        this.password = password;
        this.repassword = repassword;
    }

    fullname: string;
    phone: string;
    password: string;
    repassword: string;
}
