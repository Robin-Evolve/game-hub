import { Card, CardBody, Image, Heading } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Pros {
  game: Game;
}

const GameCard = ({ game }: Pros) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
