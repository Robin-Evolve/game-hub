import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  description_raw: string;
  platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
