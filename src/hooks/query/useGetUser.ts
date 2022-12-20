import { useQuery } from "react-query";
import { request } from "../../services/api";

export const useGetUser = ({
  enabled,
  page,
}: {
  enabled?: boolean;
  page?: number;
}) => {
  return useQuery(
    ["get-user"],
    async () => {
      const { data } = await request.get(
        `/accounts/profile-api/`,
        {
          params: { page },
        }
      );
      return data;
    },
    { enabled: enabled }
  );
};
