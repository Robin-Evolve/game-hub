import ExpendableText from "@/components/ExpendableText";
import GameAttributes from "@/components/GameAttributes";
import GameTrailer from "@/components/GameTrailer";
import GameScreenshots from "@/components/GameScreenshots";
import useGame from "@/hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) {
    return <Spinner />;
  }

  if (error || !game) {
    return <div>Error</div>;
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
      <GridItem>
        <Heading as="h1" size="2xl">
          {game.name}
        </Heading>
        <ExpendableText>{game.description_raw}</ExpendableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameID={game.id} />
        <GameScreenshots gameID={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
