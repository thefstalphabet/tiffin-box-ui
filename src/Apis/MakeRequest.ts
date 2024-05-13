import { ApiUrl } from "../Configs/ApiConfig";

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
        const apiUrl = `${ApiUrl}/${this.path}/${endPoint ? endPoint : ""}`
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
                    res = await this.makeDeleteRequest(apiUrl)
                    break;
                case "patch":
                    res = await this.makePatchRequest(apiUrl)
                    break;
                default:
                    break;
            }
            if (!res?.ok) {
                console.error(`Error: ${res?.statusText} (${res?.status})`);
            }
            return await res?.json()
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

    async makeDeleteRequest(apiUrl: string) { }

    async makePatchRequest(apiUrl: string) { }
}