import {
  Box,
  Flex,
  Heading,
  IconButton,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { MdChevronLeft } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { useParkingLotListQuery } from "../generated/graphql";
import formatDistance from "../utils/formatDistance";
import useGeolocation from "../utils/useGeolocation";

export default function ParkingLotList(): ReactElement {
  const history = useHistory();
  const [error, position] = useGeolocation();
  const { data } = useParkingLotListQuery({
    variables: {
      uid: parseInt(localStorage.getItem("uid")!!),
      userLocation: { lat: position?.lat || 0, lng: position?.lng || 0 },
    },
  });

  if (data?.nearby_spaces?.length === 0) {
    return <Box>No lots</Box>;
  }

  return (
    <Box p={4} h="full">
      <Flex mb={4} align="center">
        <IconButton
          mr={1}
          variant="ghost"
          aria-label="Go Back"
          icon={<MdChevronLeft />}
          onClick={() => history.goBack()}
        />
        <Heading>Parking Lots</Heading>
      </Flex>
      <Stack>
        {/* {data?.favorites?.map((lot, key) => (
          <Flex
            key={key}
            bg="white"
            p={4}
            rounded="md"
            boxShadow="md"
            onClick={() => {
              history.push("/lot/" + lot?.parking_lot?.id);
            }}
          >
            <Image
              rounded="md"
              boxSize="75px"
              src={lot?.parking_lot?.lot_image!!}
              fallbackSrc="/lot_placeholder.png"
              mr={3}
            />
            <Stack spacing={1} w="full">
              <Text fontWeight="bold">{lot?.parking_lot?.name}</Text>
              <Flex>
                <Text fontWeight="bold" mr={1}>
                  {lot?.parking_lot?.vacant_space?.count || 0}
                </Text>
                <Text>spaces available</Text>
              </Flex>
            </Stack>
          </Flex>
        ))} */}
        {data?.nearby_spaces?.map((lot, key) => (
          <Flex
            key={key}
            bg="white"
            p={4}
            rounded="md"
            boxShadow="md"
            onClick={() => {
              history.push("/lot/" + lot?.parking_lot?.id);
            }}
          >
            <Image
              rounded="md"
              boxSize="75px"
              src={lot?.parking_lot?.lot_image!!}
              fallbackSrc="/lot_placeholder.png"
              mr={3}
            />
            <Stack spacing={1} w="full">
              <Text fontWeight="bold">{lot?.parking_lot?.name}</Text>
              <Flex>
                <Text fontWeight="bold" mr={1}>
                  {lot?.parking_lot?.vacant_space?.vacant_count || 0}
                </Text>
                <Text>spaces available</Text>
              </Flex>
              <Flex justify="flex-end">
                <Text fontWeight="bold">{formatDistance(lot?.distance)}</Text>
              </Flex>
            </Stack>
          </Flex>
        ))}
      </Stack>
    </Box>
  );
}
