import {
  Box,
  GridProps,
  Flex,
  Button,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { useMotionValue } from "framer-motion";
import React, { ReactElement, useState } from "react";
import { useRef } from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { ParkingLotDetailsByIdQuery } from "../generated/graphql";
import { SpaceData } from "../types";
import FullPageError from "./FullPageError";
import ParkingLotMap from "./ParkingLotMap";

type Props = {
  lot_rows: NonNullable<
    ParkingLotDetailsByIdQuery["parking_lot_by_pk"]
  >["lot_rows"];
  onSpaceClick?: (data: SpaceData) => void;
  is_disabled: boolean;
} & GridProps;

export default function ParkingSpacesDetails({
  lot_rows,
  onSpaceClick,
  is_disabled,
  ...props
}: Props): ReactElement {
  const history = useHistory();
  const [selectedSpaceId, setSelectedSpaceId] = useState<number | null>(null);
  const scale = useMotionValue<number>(1);

  if (is_disabled && !history.location.pathname.includes("admin")) {
    return (
      <FullPageError message="Sorry, this parking lot is currently disabled">
        <Button
          onClick={() => {
            history.goBack();
          }}
        >
          Return to map
        </Button>
      </FullPageError>
    );
  }

  return (
    <Flex
      justify="center"
      align="center"
      h="full"
      pb={history.location.pathname.includes("admin") ? "150px" : 0}
      {...props}
    >
      <ParkingLotMap
        lot_rows={lot_rows}
        onSpaceClick={(data) => {
          if (onSpaceClick) {
            setSelectedSpaceId(data.id);
            onSpaceClick(data);
          }
        }}
        scale={scale}
        selectedSpaceId={selectedSpaceId}
      />
    </Flex>
  );
}

{
  /* <Box
  rounded="md"
  bg="white"
  position="absolute"
  top="75px"
  right="5px"
  zIndex="999"
  boxShadow="lg"
>
  <Flex direction="column">
    <IconButton
      aria-label="Zoom In"
      icon={<MdAdd />}
      fontSize="lg"
      bg="white"
      fontWeight="bold"
      mb={1}
      size="sm"
      onClick={() => {
        scale.set(Math.min(2, scale.get() + 0.2));
      }}
    />
    <Divider />
    <IconButton
      aria-label="Zoom Out"
      icon={<MdRemove />}
      fontSize="lg"
      bg="white"
      fontWeight="bold"
      size="sm"
      onClick={() => {
        scale.set(Math.max(0.5, scale.get() - 0.2));
      }}
    />
  </Flex>
</Box> */
}
