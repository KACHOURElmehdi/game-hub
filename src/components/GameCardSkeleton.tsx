import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Card>
      <Skeleton h={'280px'}/>
      <CardBody>
        <SkeletonText noOfLines={2} spacing="4"/>
      </CardBody>
    </Card>
  );
}

export default GameCardSkeleton;
