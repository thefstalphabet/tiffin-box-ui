import { MakeRequest } from "./MakeRequest";

class Address extends MakeRequest {
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
    async update(id: string, payload: any) {
        return this.makeApiRequest("patch", `${id}`, payload);
    }
}

export const addres = new Address("address")