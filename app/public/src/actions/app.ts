export function login(name: string) {
  return {
    type: "APP_LOGIN",
    login_user_name: name
  };
}
