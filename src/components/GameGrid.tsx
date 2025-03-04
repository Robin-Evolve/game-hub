import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "@/hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeleton = Array.from({ length: 20 }).map((_, i) => i);

  return (
    <div>
      {error && <Text>{error}</Text>}
      {data && (
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
          padding={5}
          gap={3}
        >
          {isLoading &&
            skeleton.map((i) => (
              <GameCardContainer key={i}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {data?.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      )}
    </div>
  );
};

export default GameGrid;
