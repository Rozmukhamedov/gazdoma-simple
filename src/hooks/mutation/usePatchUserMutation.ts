import { useMutation } from "react-query";
import { request } from "../../services/api";

export const usePatchUserMutation = () => {
  return useMutation((data: any) => request.patch(`/candidates/`, data));
};
