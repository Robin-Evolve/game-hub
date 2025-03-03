import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <div>
      {error && <Text>{error}</Text>}
      {games && (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} padding={5} gap={10}>
          {games?.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      )}
    </div>
  );
};

export default GameGrid;
