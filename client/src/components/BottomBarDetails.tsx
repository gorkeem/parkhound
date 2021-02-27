import {
  Button,
  Text,
  Box,
  Icon,
  HStack,
  Flex,
  Grid,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { FaCompass } from "react-icons/fa";
import { GrLocation, GrCar } from "react-icons/gr";
import { HiOutlineViewGrid } from "react-icons/hi";
import { Link } from "react-router-dom";
import { ParkingLotBottomBarByIdQuery } from "../generated/graphql";
import formatDistance from "../utils/formatDistance";
import { getDistanceBetweenTwoPoints } from "../utils/getDistanceBetweenTwoPoints";
import useGeolocation from "../utils/useGeolocation";

type Props = {
  id: number;
  address: string;
  availableSpace: number;
  capacity: number;
  location?: NonNullable<
    ParkingLotBottomBarByIdQuery["parking_lot_by_pk"]
  >["location"];
};

export default function BottomBarDetails({
  id,
  address,
  availableSpace,
  capacity,
  location,
}: Props) {
  const [error, position] = useGeolocation();

  if (error) {
    console.error(error);
  }

  return (
    <Flex direction="column" p={3} h="full">
      <Grid mt="12px" templateColumns="1fr 1fr 1fr" placeItems="center">
        <Stack spacing={1}>
          <HStack>
            <Icon as={GrCar} />
            <Text fontWeight="bold">Available</Text>
          </HStack>
          <Flex align="flex-start">
            <Text
              mr={1}
              display="inline-block"
              lineHeight={1}
              fontWeight="bold"
              fontSize="3xl"
            >
              {availableSpace}
            </Text>
            <Text color="gray.500" display="inline-block">
              /{capacity}
            </Text>
          </Flex>
        </Stack>
        <Stack align="center">
          <HStack>
            <Icon as={GrLocation} />
            <Text fontWeight="bold">Address</Text>
          </HStack>
          <Text>{address}</Text>
        </Stack>
        <Stack align="center">
          <HStack>
            <Icon as={FaCompass} />
            <Text fontWeight="bold">Distance</Text>
          </HStack>
          <Text>
            {position != null &&
              location != null &&
              formatDistance(
                getDistanceBetweenTwoPoints(
                  position?.lat,
                  position?.lng,
                  location?.latitude,
                  location?.longitude
                )
              )}
          </Text>
        </Stack>
      </Grid>
      <Box mt="auto">
        <Link to={`lot/${id}`}>
          <Button
            w="full"
            size="sm"
            leftIcon={<HiOutlineViewGrid />}
            colorScheme="blue"
          >
            View
          </Button>
        </Link>
      </Box>
    </Flex>
  );
}
