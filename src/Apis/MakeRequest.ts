import { getApiUrl } from "../Configs/ApiConfig";
import { ReNotification } from "../reusable-antd-components/ReNotification";

export class MakeRequest {
    path: string
    constructor(path: string) {
        this.path = path
    }

    async getRequestHeader() {
        return {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer token`
        }
    }

    async makeApiRequest(requestType: "post" | "get" | "patch" | "delete", endPoint?: string, payload?: any) {
        const apiUrl = `${getApiUrl()}/${this.path}/${endPoint ? endPoint : ""}`
        let res;
        try {
            switch (requestType) {
                case "post":
                    res = await this.makePostRequest(apiUrl, payload)
                    break;
                case "get":
                    res = await this.makeGetRequest(apiUrl, payload)
                    break;
                case "delete":
                    res = await this.makeDeleteRequest(apiUrl, payload)
                    break;
                case "patch":
                    res = await this.makePatchRequest(apiUrl, payload)
                    break;
                default:
                    break;
            }
            const data = await res?.json()
            if (data?.error) {
                const { error, message } = data
                return ReNotification({
                    header: error,
                    description: message,
                    duration: 2,
                    placement: "topRight",
                    type: "error"
                })
            }
            return data
        } catch (error) {
            console.error(error)
        }
    }

    async makePostRequest(apiUrl: string, payload: any) {
        const headers = await this.getRequestHeader()
        return await fetch(apiUrl, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(payload)
        })
    }

    async makeGetRequest(apiUrl: string, payload?: any) {
        const headers = await this.getRequestHeader()
        // url query when payload is given
        if (payload) {
            const query = Object.keys(payload)
                .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(payload[key])}`)
                .join('&');
            apiUrl = `${apiUrl}?${query}`
        }

        return await fetch(apiUrl, {
            method: "GET",
            headers: headers,
        })
    }

    async makeDeleteRequest(apiUrl: string, payload: string) {
        const headers = await this.getRequestHeader()
        apiUrl = `${apiUrl}?${payload}`
        return await fetch(apiUrl, {
            method: "DELETE",
            headers: headers,
        })
    }

    async makePatchRequest(apiUrl: string, payload: any) {
        const headers = await this.getRequestHeader()
        return await fetch(apiUrl, {
            method: "PATCH",
            headers: headers,
            body: JSON.stringify(payload)
        })
    }


}