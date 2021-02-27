import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Center,
  Text,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Image,
} from "@chakra-ui/react";
import React, { ReactElement, useState } from "react";
import { MdImage } from "react-icons/md";
import { useParams } from "react-router-dom";
import FullPageLoading from "../../components/FullPageLoading";
import ParkingSpacesDetails from "../../components/ParkingSpacesDetails";
import ParkingSpacesHeader from "../../components/ParkingSpacesHeader";
import {
  useParkingLotDetailsByIdQuery,
  useUpdateParkingSpaceMutation,
  useUpdateParkingLotMutation,
} from "../../generated/graphql";
import { SpaceData } from "../../types";

type RouteParams = {
  lot_id: string;
};
export default function AdminLot(): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { lot_id } = useParams<RouteParams>();
  const [selectedSpace, setSelectedSpace] = useState<SpaceData | null>(null);
  const { data, loading: pageLoading } = useParkingLotDetailsByIdQuery({
    variables: { id: parseInt(lot_id) },
  });
  const [
    updateSpace,
    { loading: spaceLoading },
  ] = useUpdateParkingSpaceMutation({
    onCompleted: (data) => {
      setSelectedSpace(data.update_parking_space_by_pk!!);
    },
  });
  const [updateLot, { loading: lotLoading }] = useUpdateParkingLotMutation();
  const [showProcessed, setShowProcessed] = useState(false);

  if (pageLoading) {
    return <FullPageLoading />;
  }

  if (
    data?.parking_lot_by_pk == null ||
    data?.parking_lot_by_pk.lot_rows.length === 0
  ) {
    return <Box>Error. No Lot Data</Box>;
  }

  return (
    <Box pos="relative" pt="65px" h="full">
      <ParkingSpacesHeader
        lot_id={data?.parking_lot_by_pk.id}
        is_admin
        lot_name={data?.parking_lot_by_pk.name}
        vacant_space={data.parking_lot_by_pk.vacant_space?.vacant_count}
        bg="white"
      >
        {data.parking_lot_by_pk.is_disabled && (
          <Text fontWeight="bold" mr={2}>
            DISABLED -
          </Text>
        )}
      </ParkingSpacesHeader>
      <ParkingSpacesDetails
        is_disabled={data?.parking_lot_by_pk.is_disabled}
        onSpaceClick={(spaceData: SpaceData) => {
          setSelectedSpace(spaceData);
        }}
        lot_rows={data?.parking_lot_by_pk.lot_rows}
        // pb="150px"
      />
      <Flex
        pos="fixed"
        bottom={0}
        w="1620px"
        h="150px"
        bg="white"
        p={4}
        borderTop="1px solid #ccc"
      >
        <Flex>
          <Flex direction="column">
            <Text fontSize="lg" fontWeight="bold">
              Lot Actions
            </Text>
            <HStack mt={4}>
              {data.parking_lot_by_pk.is_disabled ? (
                <Button
                  colorScheme="green"
                  onClick={async () => {
                    updateLot({
                      variables: {
                        id: parseInt(lot_id),
                        _set: { is_disabled: false },
                      },
                    });
                  }}
                >
                  Enable Lot
                </Button>
              ) : (
                <Button
                  onClick={async () => {
                    updateLot({
                      variables: {
                        id: parseInt(lot_id),
                        _set: { is_disabled: true },
                      },
                    });
                  }}
                >
                  Disable Lot
                </Button>
              )}
            </HStack>
          </Flex>
          <Center w="32px">
            <Divider orientation="vertical" />
          </Center>
          {selectedSpace ? (
            <Flex direction="column">
              <Text fontSize="lg" fontWeight="bold">
                Parking Space {selectedSpace?.space_id}
              </Text>
              <HStack mt={4}>
                {selectedSpace.is_disabled ? (
                  <Button
                    colorScheme="green"
                    isLoading={spaceLoading}
                    onClick={async () => {
                      await updateSpace({
                        variables: {
                          id: selectedSpace.id,
                          _set: { is_disabled: false },
                        },
                      });
                    }}
                  >
                    Enable Space
                  </Button>
                ) : (
                  <Button
                    isLoading={spaceLoading}
                    onClick={async () => {
                      await updateSpace({
                        variables: {
                          id: selectedSpace.id,
                          _set: { is_disabled: true },
                        },
                      });
                    }}
                  >
                    Disable Space
                  </Button>
                )}
              </HStack>
            </Flex>
          ) : (
            <Box w="142px"></Box>
          )}
        </Flex>
        <Flex ml="auto" direction="column" textAlign="end">
          <Text fontSize="lg" fontWeight="bold">
            View Latest Image
          </Text>
          <HStack mt={4} justify="flex-end">
            <Button onClick={onOpen} colorScheme="blue" leftIcon={<MdImage />}>
              View
            </Button>
          </HStack>
        </Flex>
      </Flex>
      <Modal size="5xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Latest Lot Image</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {showProcessed ? (
              <Image w="1280px" h="720px" src={`/${lot_id}/processed.jpg`} />
            ) : (
              <Image w="1280px" h="720px" src={`/${lot_id}/latest.jpg`} />
            )}
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setShowProcessed(!showProcessed)}>
              {showProcessed ? "Show original" : "Show processed"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
