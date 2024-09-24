import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/img-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if(error) return null;

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
            <Text fontSize="lg" fontWeight={3}>
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
