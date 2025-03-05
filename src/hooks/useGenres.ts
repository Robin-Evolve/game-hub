// import useData from "./useData";

import genres from "@/data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// change dynamic import to static import
// const useGenres = () => useData<Genre>("/genres");

const useGenres = () => {
  return {
    data: genres,
    isLoading: false,
    error: null,
  };
};

export default useGenres;
