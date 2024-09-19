import React from "react";
import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Card width={'400px'} borderRadius={10} overflow={"hidden"}>
      <Skeleton h={'280px'}/>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default GameCardSkeleton;
