import { Box, Flex, Icon, Heading, HStack, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { MdLocalParking, MdPeople } from "react-icons/md";
import { BiTrafficCone } from "react-icons/bi";
import { FaParking } from "react-icons/fa";
import {
  useAdminDashboardQuery,
  usePastLotOccupancyQuery,
} from "../../generated/graphql";
import { Line } from "@reactchartjs/react-chart.js";

export default function AdminHome(): ReactElement {
  const { data } = useAdminDashboardQuery({
    variables: { id: parseInt(localStorage.getItem("uid")!!) },
  });
  const { data: pastData1 } = usePastLotOccupancyQuery({
    variables: { id: 1 },
  });
  const { data: pastData2 } = usePastLotOccupancyQuery({
    variables: { id: 2 },
  });
  const inst = data?.user_by_pk?.user_institutions[0];

  return (
    <Box p={8}>
      <Heading mb={4}>{inst?.institution.name} Parking Lots</Heading>
      <HStack
        justify="center"
        spacing={16}
        bg="white"
        p={4}
        boxShadow="lg"
        rounded="lg"
      >
        <Flex align="center">
          <Icon as={MdPeople} mr={1} />
          <Text mr={1} fontSize="xl" fontWeight="bold">
            {inst?.institution.user_institutions_aggregate.aggregate?.count}
          </Text>
          Registered Drivers
        </Flex>
        <Flex align="center">
          <Icon as={BiTrafficCone} mr={1} />
          <Text mr={1} fontSize="xl" fontWeight="bold">
            {inst?.institution.parking_lots_aggregate.aggregate?.count}
          </Text>
          Parking Lots
        </Flex>
        <Flex align="center">
          <Icon as={FaParking} mr={1} />
          <Text mr={1} fontSize="xl" fontWeight="bold">
            {inst?.institution.parking_lots.reduce((acc, lot) => {
              if (lot?.vacant_space == null) {
                return acc;
              }
              return acc + lot.vacant_space?.vacant_count;
            }, 0)}
          </Text>
          Vacant Spaces
        </Flex>
      </HStack>
      <HStack spacing={4} mt={4} justify="center">
        <Flex
          direction="column"
          justify="center"
          spacing={16}
          bg="white"
          p={4}
          boxShadow="lg"
          rounded="lg"
          w="600px"
        >
          <Text fontWeight="bold">
            Occupancy of {inst?.institution.parking_lots[0].name}
          </Text>
          <Line
            type="line"
            data={{
              labels: pastData1?.past_lot_occupancy.map(
                (d) => `${new Date(d.updated_at).getHours()}.00`
              ),
              datasets: [
                {
                  label: "# of occupied spaces",
                  data: pastData1?.past_lot_occupancy.map((d) => d.occupied),
                  fill: false,
                  backgroundColor: "rgb(255, 99, 132)",
                  borderColor: "rgba(255, 99, 132, 0.2)",
                },
              ],
            }}
          />
        </Flex>
        <Flex
          direction="column"
          justify="center"
          spacing={16}
          bg="white"
          p={4}
          boxShadow="lg"
          rounded="lg"
          w="600px"
        >
          <Text fontWeight="bold">
            Occupancy of {inst?.institution.parking_lots[1].name}
          </Text>
          <Line
            type="line"
            data={{
              labels: pastData2?.past_lot_occupancy.map(
                (d) => `${new Date(d.updated_at).getHours()}.00`
              ),
              datasets: [
                {
                  label: "# of occupied spaces",
                  data: pastData2?.past_lot_occupancy.map((d) => d.occupied),
                  fill: false,
                  backgroundColor: "rgb(38, 70, 83, 0.8)",
                  borderColor: "rgba(42, 157, 143, 0.4)",
                },
              ],
            }}
          />
        </Flex>
      </HStack>
    </Box>
  );
}
