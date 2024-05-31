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
    async delete(id: string) {
        return this.makeApiRequest("delete", id)
    }
    async update(id: string, paylaod: any) {
        return this.makeApiRequest("patch", `${id}`, paylaod)
    }
}

export const kitchen = new Kitchen("kitchen")