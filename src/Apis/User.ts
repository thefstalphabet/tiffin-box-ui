import { MakeRequest } from "./MakeRequest";

class User extends MakeRequest {
    async find(id: string) {
        return this.makeApiRequest("get", "", { _id: id })
    }
    async create(payload: any) {
        return this.makeApiRequest("post", "", payload)
    }
}

export const user = new User("user")