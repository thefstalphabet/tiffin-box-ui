import { TLoginUserType } from "../Interfaces/Apis/Auth.interface";
import { MakeRequest } from "./MakeRequest";

class Auth extends MakeRequest {
    async login(payload: { email: string, password: string }, loginUserType: TLoginUserType) {
        const res = await this.makeApiRequest("post", `login/${loginUserType}`, payload)
        if (res?.accessToken && res?.refreshToken) {
            // setting data in session storage
            sessionStorage.setItem('accessToken', res?.accessToken);
            sessionStorage.setItem('refreshToken', res?.refreshToken);
            sessionStorage.setItem("user", JSON.stringify(res?.user));
            return true
        }
        return false
    }

    logout() {
        sessionStorage.removeItem("accessToken")
        sessionStorage.removeItem("refreshToken")
        sessionStorage.removeItem("user")
        window.location.href = "/login"
    }

    isUserLoggedIn() {
        const user = sessionStorage.getItem("user")
        if (user) {
            return JSON.parse(user)
        } else return false
    }

    updateSessionStorage(user: any) {
        sessionStorage.setItem("user", JSON.stringify(user))
    }
}

export const auth = new Auth("auth")