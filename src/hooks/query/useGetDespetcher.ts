import { useQuery } from "react-query";
import { request } from "../../services/api";

export const useGetDespetcher = ({
  enabled,
  page,
}: {
  enabled?: boolean;
  page?: number;
}) => {
  return useQuery(
    ["get-dispetcher"],
    async () => {
      const { data } = await request.get(
        `/accounts/users-api/`,
        {
          params: { page },
        }
      );
      return data;
    },
    { enabled: enabled }
  );
};
