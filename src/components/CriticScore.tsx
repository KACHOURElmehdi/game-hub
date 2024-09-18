import { Badge } from "@chakra-ui/react";

interface Props{
  score: number;
}

const CriticScore = ({ score }: Props) => {

  const color = score > 80 ? 'green' : score > 60 ? 'yellow' : '';

  return (
    <Badge
      variant="subtle"
      ml="1"
      fontSize="md"
      borderRadius="md"
      colorScheme={color}
    >
      {score + "%"}
    </Badge>
  );
};

export default CriticScore;
