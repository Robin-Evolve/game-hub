import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeleton = Array.from({ length: 10 }).map((_, i) => i);

  return (
    <div>
      {error && <Text>{error}</Text>}
      {data && (
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
          padding={5}
          gap={10}
        >
          {isLoading &&
            skeleton.map((i) => (
              <GameCardContainer>
                <GameCardSkeleton key={i} />
              </GameCardContainer>
            ))}
          {data?.map((game) => (
            <GameCardContainer>
              <GameCard key={game.id} game={game} />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      )}
    </div>
  );
};

export default GameGrid;
