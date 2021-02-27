import { Flex, Icon, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { RiEmotionSadLine } from "react-icons/ri";

type Props = {
  message: string;
  children: ReactElement;
};

export default function FullPageError({
  message,
  children,
}: Props): ReactElement {
  return (
    <Flex p={4} direction="column" justify="center" align="center" h="100%">
      <Icon boxSize={24} as={RiEmotionSadLine} />
      <Text my={4}>{message}</Text>
      {children}
    </Flex>
  );
}
