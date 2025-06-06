import { UserOptions } from '@interfaces/UserOptions';

export const getUserOptionsFromEnv = (): UserOptions => {
    if (!process.env.USER_NAME || !process.env.USER_EMAIL || !process.env.USER_PASSWORD) {
        throw new Error('Missing user data in .env');
    }
    return {
        userName: process.env.USER_NAME,
        userEmail: process.env.USER_EMAIL,
        userPassword: process.env.USER_PASSWORD,
    };
};
