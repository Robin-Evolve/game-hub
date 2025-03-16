import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/store";
import { Heading } from "@chakra-ui/react";

const GameHeading = () => {
  const genreID = useGameQueryStore((state) => state.gameQuery.genreID);
  const genre = useGenre(genreID);

  const platformID = useGameQueryStore((state) => state.gameQuery.platformID);
  const platform = usePlatform(platformID);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY="6" fontSize="4xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
