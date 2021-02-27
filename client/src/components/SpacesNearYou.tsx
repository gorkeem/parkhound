import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { useNearbySpacesQuery } from "../generated/graphql";
import useGeolocation from "../utils/useGeolocation";

type Props = {
  onCardClick: (parking_lot_id?: number) => void;
};

function formatDistance(dist?: number) {
  if (dist == null) {
    return;
  }
  if (dist < 1) {
    return Math.round(dist * 100) * 10 + " m";
  } else {
    return dist.toFixed(1) + " km";
  }
}

export default function SpacesNearYou({ onCardClick }: Props): ReactElement {
  const [error, position] = useGeolocation();
  const { data } = useNearbySpacesQuery({
    variables: {
      userLocation: { lat: position?.lat || 0, lng: position?.lng || 0 },
    },
  });

  if (error) {
    return <Text>Error occured</Text>;
  }

  return (
    <Flex h="150px">
      <HStack p={4} spacing={3} overflowX="scroll">
        {data?.nearby_spaces?.map((lot, i) => (
          <Flex
            onClick={() => onCardClick(lot?.parking_lot?.id)}
            key={i}
            p={2}
            rounded="lg"
            direction="column"
            h="full"
            minW="175px"
            borderWidth="1px"
            borderColor={
              lot?.parking_lot?.vacant_space?.vacant_count > 0
                ? "green.500"
                : "gray.300"
            }
          >
            <Text fontWeight="bold">{lot?.parking_lot?.name}</Text>
            <Text color="gray.500">{formatDistance(lot?.distance)}</Text>
            <Box mt="auto">
              <Text display="inline" mr={1} fontSize="xl" fontWeight="bold">
                {lot?.parking_lot?.vacant_space?.vacant_count || 0}
              </Text>
              <Text display="inline" color="gray.500">
                empty spaces
              </Text>
            </Box>
          </Flex>
        ))}
      </HStack>
    </Flex>
  );
}
