import Trailer from "@/entities/Trailer";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const useTrailers = (gameID: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameID}/movies`);

  return useQuery({
    queryKey: ["trailers", gameID],
    queryFn: () => apiClient.getAll({}),
  });
};

export default useTrailers;
