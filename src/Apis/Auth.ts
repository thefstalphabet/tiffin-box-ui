import { MakeRequest } from "./MakeRequest";
import { jwtDecode } from "jwt-decode";

class Auth extends MakeRequest {
    async login(payload: { email: string, password: string }) {
        const { accessToken, refreshToken } = await this.makeApiRequest("post", "login", payload)

        // setting tokens in local storage
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        const decodedToken = jwtDecode(accessToken);
        return decodedToken?.sub; // returning userid
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