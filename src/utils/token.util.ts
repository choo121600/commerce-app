
import cookies from 'js-cookie';

export const getAccessToken = () => {
    return cookies.get('accessToken');
};
export const getRefreshToken = () => {
    return cookies.get('refreshToken');
};

export const setAccessToken = (token: string) => {
    cookies.set('accessToken', token, { expires: 1 });
};

export const setRefreshToken = (token: string) => {
    cookies.set('refreshToken', token, { expires: 7 });
};

export const setAuthTokens = (accessToken: string, refreshToken: string) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
};