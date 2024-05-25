import { jwtDecode } from "jwt-decode";
import { MakeRequest } from "./MakeRequest";
import { ReNotification } from "../reusable-antd-components/ReNotification";
import { auth } from "./Auth";
import { ApiUrl } from "../Configs/ApiConfig";

class Token extends MakeRequest {

    async isTokenExpired(accessToken: string, tokenType: "refresh" | "access") {
        try {
            const decoded: any = jwtDecode(accessToken);
            const currentTime = Date.now() / 1000;
            return decoded?.exp < currentTime;
        } catch (error) {
            ReNotification({
                header: "Token",
                description: JSON.stringify(error),
                duration: 2,
                placement: "topRight",
                type: "error"
            })
            return true; // Consider the token expired if it cannot be decoded
        }
    }

    async validateRefreshToken() {
        const token = sessionStorage.getItem("refreshToken")
        if (token) {
            const isExpired = await this.isTokenExpired(token, "refresh")
            if (isExpired) {
                auth.logout();
            }
        } else {
            console.error("Refresh token not found")
        }
    }
    async validateAccessToken() {
        const token = sessionStorage.getItem("accessToken")
        if (token) {
            const isExpired = await this.isTokenExpired(token, "access")
            if (isExpired) {
                const refreshToken = sessionStorage.getItem("refreshToken")
                if (refreshToken) {
                    const apiUrl = `${ApiUrl}/auth/refresh-token`
                    const res = await this.makePostRequest(apiUrl, { refreshToken: refreshToken })
                    const data = await res.json()
                    if (data?.accessToken) {
                        sessionStorage.setItem('accessToken', data?.accessToken);
                    }
                }
            }
        } else {
            console.error("Access token not found")
        }
    }
}

export const token = new Token("token")