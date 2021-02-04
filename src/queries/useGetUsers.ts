import { useQuery } from "react-query";
import { User_API } from "../api/user";

const USER_LIST = "USER_LIST";

export function useGetAllUsers() {
  return useQuery(USER_LIST, User_API.getAllUsers);
}
