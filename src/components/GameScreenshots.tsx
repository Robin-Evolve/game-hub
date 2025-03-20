import useScreenshots from "@/hooks/useScreenshots";
import { SimpleGrid, Spinner } from "@chakra-ui/react";

interface Props {
  gameID: number;
}

const GameScreenshots = ({ gameID }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameID);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    throw new Error("Error loading screenshots");
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={3}>
      {data?.results.map((screenshot) => (
        <img
          key={screenshot.id}
          src={screenshot.image}
          alt={screenshot.id.toString()}
        />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
