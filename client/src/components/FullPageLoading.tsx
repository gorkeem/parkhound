import { Flex, Spinner } from "@chakra-ui/react";
import React, { ReactElement } from "react";

export default function FullPageLoading(): ReactElement {
  return (
    <Flex h="100vh" justify="center" align="center">
      <Spinner
        color="blue.500"
        size="xl"
        thickness="4px"
        emptyColor="gray.200"
      />
    </Flex>
  );
}
