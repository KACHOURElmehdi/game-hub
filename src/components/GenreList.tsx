import { HStack, Image, List, ListItem, Spinner, Button, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/img-url";

interface Props{
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  {error && <Text>{error}</Text>;}
  // if(error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List spacing="5px">
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="34px"
              borderRadius="8px"
              objectFit="cover"
            />
            <Button
              onClick={() => onSelectedGenre(genre)}
              fontSize="lg"
              fontWeight={"500"}
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
