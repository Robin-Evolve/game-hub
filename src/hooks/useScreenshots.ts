import Screenshot from "@/entities/Sreenshot";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const useScreenshots = (gameID: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameID}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameID],
    queryFn: () => apiClient.getAll({}),
  });
};

export default useScreenshots;
