import { Card, CardBody, Image, Heading, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CreditScore from "./CreditScore";
import getCroppedImageUrl from "@/services/image-url";
import Emoji from "./Emoji";

interface Pros {
  game: Game;
}

const GameCard = ({ game }: Pros) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justify="space-between">
          <PlatformIconList platforms={game.platforms.map((p) => p.platform)} />
          <CreditScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name} <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
