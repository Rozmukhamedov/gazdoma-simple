import { useQuery } from "react-query";
import { request } from "../../services/api";

export const useGetDevices = ({
  enabled,
  page,
}: {
  enabled?: boolean;
  page?: number;
}) => {
  return useQuery(
    ["get-devices-api"],
    async () => {
      const { data } = await request.get(
        `/user-devices-api/`,
        {
          params: { page },
        }
      );
      return data;
    },
    { enabled: enabled }
  );
};
