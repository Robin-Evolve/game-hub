import { Card, CardBody, Image, Heading, HStack } from "@chakra-ui/react";
import { Game, Platform } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Pros {
  game: Game;
}

const GameCard = ({ game }: Pros) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </HStack>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
