import { useMutation } from "react-query";
import { requestWithoutAuth } from "../../services/api";

export const useRegistrMutation = () => {
  return useMutation((data):any =>
    requestWithoutAuth.post(`/accounts/register-api/`, data)
  );
};
