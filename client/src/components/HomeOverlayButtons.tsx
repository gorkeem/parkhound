import {
  Box,
  Link,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Stack,
  useDisclosure,
  Flex,
  Icon,
  Button,
} from "@chakra-ui/react";
import React, { ReactElement, useRef } from "react";
import { MdLocalParking, MdMap, MdMenu } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";

export default function HomeOverlayButtons(): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Box pos="absolute" top="0" left="0" zIndex="999">
        <IconButton
          boxShadow="lg"
          ref={btnRef}
          aria-label="drawer"
          onClick={onOpen}
          icon={<MdMenu />}
          bg="white"
          rounded="full"
          height="40px"
          width="40px"
          mt="20px"
          ml="20px"
        />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Parkhound</DrawerHeader>
            <Divider />
            <DrawerBody>
              <Stack mt={4} spacing={4}>
                <Flex align="center">
                  <Icon as={MdMap} mr={2} />
                  <Link to="/" as={RouterLink}>
                    Map
                  </Link>
                </Flex>
                <Flex align="center">
                  <Icon as={MdLocalParking} mr={2} />
                  <Link to="/lot-list" as={RouterLink}>
                    Parking Lots
                  </Link>
                </Flex>
              </Stack>
            </DrawerBody>
            <DrawerFooter>
              <Button colorScheme="red">Sign Out</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
