import { useMutation } from "react-query";
import { requestWithoutAuth } from "../../services/api";

export const useLoginMutation = () => {
  return useMutation(( data ): any =>
    requestWithoutAuth.post(`/accounts/login-api/`, data)
  );
};
