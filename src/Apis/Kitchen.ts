import { MakeRequest } from "./MakeRequest";

class Kitchen extends MakeRequest {
    async findOne(id: string) {
        return this.makeApiRequest("get", id)
    }
    async findAll(query?: any) {
        return this.makeApiRequest("get", "", query)
    }
    async create(payload: any) {
        return this.makeApiRequest("post", "", payload)
    }
}

export const kitchen = new Kitchen("kitchen")