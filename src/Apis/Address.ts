import { MakeRequest } from "./MakeRequest";

class Address extends MakeRequest {
    async findOne(id: string) {
        return this.makeApiRequest("get", id)
    }
    async findAll() {
        return this.makeApiRequest("get")
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