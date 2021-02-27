import { Box, BoxProps, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { MdArrowDownward, MdArrowUpward, MdErrorOutline } from "react-icons/md";
import { ParkingLotDetailsByIdQuery } from "../generated/graphql";

type Props = {
  space: NonNullable<
    ParkingLotDetailsByIdQuery["parking_lot_by_pk"]
  >["lot_rows"][0]["parking_spaces"][0];
  is_down: boolean;
  is_selected?: boolean;
} & BoxProps;

function ParkingSpace({
  space: {
    id,
    is_entry,
    is_exit,
    is_occupied,
    is_road,
    is_blank,
    space_id,
    is_disabled,
    rotation,
  },
  is_down,
  is_selected,
  ...props
}: Props) {
  if (is_blank) {
    return <Box bg="transparent" h="24px" w="48px" m={2} />;
  }
  if (is_road) {
    return (
      <Box
        fontWeight="bold"
        transform={`rotate(${rotation}deg)`}
        color="gray.500"
        bg="transparent"
        h="24px"
        w="48px"
        m={2}
        textAlign="center"
        userSelect="none"
      >
        |
      </Box>
    );
  }
  if (is_entry || is_exit) {
    return (
      <Flex
        direction="column"
        justify="center"
        align="center"
        bg="transparent"
        h="24px"
        w="48px"
        m={2}
        userSelect="none"
      >
        {!is_down && <Icon as={MdArrowUpward} />}
        <Text fontWeight="bold">{is_entry ? "Entry" : "Exit"}</Text>
        {is_down && <Icon as={MdArrowDownward} />}
      </Flex>
    );
  }

  return (
    <Flex
      transform={`rotate(${rotation}deg)`}
      {...props}
      align="center"
      justify="center"
      bg={is_disabled ? "red.500" : is_occupied ? "gray.300" : "green.400"}
      h="24px"
      w="48px"
      rounded="lg"
      m={2}
      border={is_selected ? "3px solid black" : "none"}
    >
      {is_disabled ? (
        <Icon as={MdErrorOutline} />
      ) : (
        <Text
          align="center"
          color={is_occupied ? "black" : "white"}
          fontWeight="bold"
          userSelect="none"
        >
          {space_id}
        </Text>
      )}
    </Flex>
  );
}

export default React.memo(ParkingSpace);
