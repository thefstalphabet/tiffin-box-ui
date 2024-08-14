import { TBookmarkType } from "../Interfaces/Apis/Auth.interface";
import { MakeRequest } from "./MakeRequest";

class User extends MakeRequest {
  async findOne(id: string) {
    return this.makeApiRequest("get", id);
  }
  async findAll() {
    return this.makeApiRequest("get");
  }
  async create(payload: any) {
    return this.makeApiRequest("post", "", payload);
  }
  async delete(id: string) {
    return this.makeApiRequest("delete", id);
  }
  async update(id: string, payload: any) {
    return this.makeApiRequest("patch", `${id}`, payload);
  }
  async createAddress(payload: any) {
    return this.makeApiRequest("post", "address", payload);
  }
  async findAllAddress() {
    return this.makeApiRequest("get", "address");
  }
  async updateAddress(id: string, payload: any) {
    return this.makeApiRequest("patch", `address/${id}`, payload);
  }
  async deleteAddress(id: string) {
    return this.makeApiRequest("delete", `address/${id}`);
  }
  async findAllBookmarks() {
    return this.makeApiRequest("get", "bookmark");
  }
  async bookmark(id: string, type: TBookmarkType) {
    return this.makeApiRequest("post", `bookmark/${type}/${id}`);
  }
  async unBookmark(id: string, type: TBookmarkType) {
    return this.makeApiRequest("post", `unbookmark/${type}/${id}`);
  }
}

export const user = new User("user");
