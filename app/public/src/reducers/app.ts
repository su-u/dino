import { Map } from "immutable";

export default function(state: any, action: any) {
  switch (action.type) {
    case "APP_LOGIN":
      return state.set("login_user_name", action.login_user_name);
    default:
  }
  return state || Map({ login_user_name: "" });
}
