import { User } from "../../models/user.model";
import { apiInstance } from "../apiInstance";
import { UserCreateData } from "./user.interface";
import { UserCreateRes } from "./user.response";

export async function addUser(requestData: UserCreateData) {
  const PATH = "/user";

  try {
    const res = await apiInstance.post(PATH, requestData);
    const apiRes = res.data;

    return apiRes as UserCreateRes;
  } catch (e) {
    throw new Error("Failed to add user");
  }
}

export async function getAllUsers() {
  const PATH = "/user";

  try {
    const res = await apiInstance.get(PATH);
    const apiRes = res.data;

    return apiRes as User[];
  } catch (e) {
    throw new Error("Failed to add user");
  }
}
