export interface SignupAgreements {
    privacy: boolean;
    ad:
        | {
            email: boolean;
            sms: boolean;
            app: boolean;
            }
        | false;
};

export interface LoginData {
    email: string;
    password: string;
}

export interface SignupData extends LoginData {
    name: string;
    phoneNumber: string;
    agreements: SignupAgreements;
}
