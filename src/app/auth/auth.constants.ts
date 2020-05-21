export enum AUTH_URLS {
    registration = 'https://reqres.in/api/register',
    login = 'https://reqres.in/api/login'
};

export enum AUTH_PATH {
    registration = '/auth/registration',
    login = '/auth/login'
}

export enum ERRORS {
    login = 'user not found',
    registration = 'Note: Only defined users succeed registration'
}

export enum HINTS {
    login = 'Try to login with email: "eve.holt@reqres.in" with password: "cityslicka"',
    registration = 'Try to registration with email: "eve.holt@reqres.in" with password: "pistol"'
}