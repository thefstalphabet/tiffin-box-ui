import { MakeRequest } from "./MakeRequest";

class Kitchen extends MakeRequest {
    async findOne(id: string) {
        return this.makeApiRequest("get", id)
    }
    async findAll() {
        return this.makeApiRequest("get")
    }
    async create(payload: any) {
        return this.makeApiRequest("post", "", payload)
    }
}

export const kitchen = new Kitchen("kitchen")