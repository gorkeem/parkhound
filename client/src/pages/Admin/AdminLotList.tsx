import { Box, Heading, Stack, Image, Flex, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";
import { useParkingLotsByInstitutionIdQuery } from "../../generated/graphql";

export default function AdminLotList(): ReactElement {
  const { data, error } = useParkingLotsByInstitutionIdQuery({
    variables: { id: 1 },
  });
  const history = useHistory();

  if (error) {
    return <Box>{error.stack}</Box>;
  }

  return (
    <Box p={4}>
      <Heading mb={4}>Parking Lots</Heading>
      <Stack spacing={2} maxW="600px">
        {data?.institution_by_pk?.parking_lots.map((lot) => (
          <Flex
            key={lot.id}
            bg="white"
            p={4}
            rounded="md"
            boxShadow="md"
            onClick={() => {
              history.replace("lot/" + lot.id);
            }}
          >
            <Image
              rounded="md"
              boxSize="75px"
              src={lot.lot_image!!}
              fallbackSrc="/lot_placeholder.png"
              mr={3}
            />
            <Stack spacing={1} w="full">
              <Text fontWeight="bold">{lot.name}</Text>
              <Flex>
                <Text fontWeight="bold" mr={1}>
                  {lot.vacant_space?.vacant_count || 0}
                </Text>
                <Text>spaces available</Text>
              </Flex>
            </Stack>
          </Flex>
        ))}
      </Stack>
    </Box>
  );
}
