import ExpendableText from "@/components/ExpendableText";
import GameAttributes from "@/components/GameAttributes";
import useGame from "@/hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
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
    <>
      <Heading as="h1" size="2xl">
        {game.name}
      </Heading>
      <ExpendableText>{game.description_raw}</ExpendableText>
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailPage;
