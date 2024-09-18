import { Game } from "./../hooks/useGames";
import {
  Card,
  CardBody,
  Heading,
  VStack,
  HStack,
  Image
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from './CriticScore';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <VStack alignItems={"start"} spacing={2}>
          <HStack justifyContent="space-between" w={"100%"}>
            <Heading fontSize={"2xl"}>{game.name}</Heading>
            <CriticScore score={game.metacritic} />
          </HStack>
          <PlatformIconList platforms={game.platforms.map((p) => p.platform)} />
        </VStack>
        {/* {game.platforms.map(p => <Text>{p.platform.slug}</Text>)} */}
        {/* {game.platforms.map(({platform}) => <Text>{platform.name}</Text>)} */}
      </CardBody>
    </Card>
  );
};

export default GameCard;
