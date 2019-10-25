export const login = (name: string) => {
    return {
        type: 'APP_LOGIN',
        login_user_name: name
    };
};

export const postScore = (name: string, score: number) => {};

export const getScore = () => {};
