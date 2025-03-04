import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeleton = Array.from({ length: 10 }).map((_, i) => i);

  return (
    <div>
      {error && <Text>{error}</Text>}
      {games && (
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
          padding={5}
          gap={10}
        >
          {isLoading && skeleton.map((i) => <GameCardSkeleton key={i} />)}
          {games?.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      )}
    </div>
  );
};

export default GameGrid;
