import { Card, CardBody, Image, Heading, HStack } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import CreditScore from "./CreditScore";
import getCroppedImageUrl from "@/services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

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
          <Link to={`/games/${game.slug}`}>
            {game.name} <Emoji rating={game.rating_top} />
          </Link>
        </Heading>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
