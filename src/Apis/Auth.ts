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

    async refreshToken() {
        const refreshToken = localStorage.getItem('refreshToken')
        return this.makeApiRequest("post", "refresh-token", { refreshToken })
    }

    logout() {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        localStorage.removeItem("user")
        window.location.href = "/login"
    }
}

export const auth = new Auth("auth")