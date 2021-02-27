import { Flex } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";
import { ParkingLotCardInfoFragment } from "../generated/graphql";

type Props = {
  parking_lot: ParkingLotCardInfoFragment;
};

export default function ParkingLotCard({ parking_lot }: Props): ReactElement {
  const history = useHistory();
  return (
    <Flex
      bg="white"
      rounded="md"
      p={4}
      onClick={() => history.push(`lot/${parking_lot.id}`)}
    >
      {parking_lot.name}
    </Flex>
  );
}
