import { TLoginUserType } from "../Interfaces/Apis/Auth.interface";
import { MakeRequest } from "./MakeRequest";
import { jwtDecode } from "jwt-decode";

class Auth extends MakeRequest {
    async login(payload: { email: string, password: string }, loginUserType: TLoginUserType) {
        const res = await this.makeApiRequest("post", `login/${loginUserType}`, payload)
        if (res?.accessToken && res?.refreshToken) {
            // setting tokens in local storage
            sessionStorage.setItem('accessToken', res?.accessToken);
            sessionStorage.setItem('refreshToken', res?.refreshToken);

            const decodedToken = jwtDecode(res?.accessToken);
            return decodedToken?.sub; // returning userid
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
}

export const auth = new Auth("auth")