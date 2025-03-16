import { create } from "zustand";

interface gameQuery {
  genreID?: number;
  platformID?: number;
  searchText?: string;
  sortOrder?: string;
}

interface GameQueryStore {
  gameQuery: gameQuery;
  setSearchText: (searchText: string) => void;
  setPlatformID: (platformID: number) => void;
  setGenreID: (genreID: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},

  setSearchText: (searchText) =>
    set(() => ({
      gameQuery: { searchText },
    })),

  setGenreID: (genreID) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        genreID,
      },
    })),

  setPlatformID: (platformID) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        platformID,
      },
    })),

  setSortOrder: (sortOrder) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        sortOrder,
      },
    })),
}));

export default useGameQueryStore;
