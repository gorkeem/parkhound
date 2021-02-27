import { Box, Divider, Flex, Grid, Icon, Stack } from "@chakra-ui/react";
import React from "react";
import { GrCycle } from "react-icons/gr";
import { FiCornerUpRight, FiCornerUpLeft } from "react-icons/fi";
import { useDirections } from "../utils/DirectionsProvider";

function renderIcon(maneuver: string) {
  switch (true) {
    case maneuver.includes("roundabout"):
      return <Icon as={GrCycle} />;
    case maneuver === "turn-right":
      return <Icon as={FiCornerUpRight} />;
    case maneuver === "turn-left":
      return <Icon as={FiCornerUpLeft} />;
    default:
      return null;
  }
}

export default function BottomBarDirections() {
  const { directions } = useDirections();

  if (directions?.routes[0]?.legs == null) {
    return null;
  }

  return (
    <Stack p={4} overflowY="scroll" spacing={4} divider={<Divider />}>
      {directions?.routes[0]?.legs[0].steps.map((step, i) => {
        return (
          <Box key={i}>
            <Grid templateColumns="auto 40px">
              <Box>
                {`${i + 1}.`}
                <Box
                  ml={1}
                  display="inline"
                  dangerouslySetInnerHTML={{ __html: step.instructions }}
                />
              </Box>
              <Flex align="center" justify="center">
                {renderIcon((step as any).maneuver)}
              </Flex>
            </Grid>
          </Box>
        );
      })}
    </Stack>
  );
}
