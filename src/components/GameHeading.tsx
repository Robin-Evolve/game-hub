import { GameQuery } from "@/App";
import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreID);
  const platform = usePlatform(gameQuery.platformID);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY="6" fontSize="4xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
