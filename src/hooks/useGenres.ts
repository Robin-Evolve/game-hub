// import useData from "./useData";

import genres from "@/data/genres";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
