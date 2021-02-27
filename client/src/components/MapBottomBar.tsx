import {
  Text,
  chakra,
  Flex,
  Grid,
  IconButton,
  Spacer,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { motion, PanInfo, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { MdCancel, MdChevronLeft } from "react-icons/md";
import { useParkingLotBottomBarByIdQuery } from "../generated/graphql";
import { useDirections } from "../utils/DirectionsProvider";
import BottomBarDetails from "./BottomBarDetails";
import BottomBarDirections from "./BottomBarDirections";
import SpacesNearYou from "./SpacesNearYou";

type DragEventType =
  | MouseEvent
  | TouchEvent
  | PointerEvent
  | React.DragEvent<HTMLDivElement>;

type Props = {
  selectedLot: number | null;
  setSelectedLot: React.Dispatch<React.SetStateAction<number | null>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MotionBox = chakra(motion.div);

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

function usePrevious(value: boolean) {
  const previousValueRef = useRef<any>();

  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);

  return previousValueRef.current;
}

export default function MapBottomBar({
  selectedLot,
  setSelectedLot,
  isOpen,
  setIsOpen,
}: Props) {
  const { directions, cancelRoute } = useDirections();
  const controls = useAnimation();
  const prevIsOpen = usePrevious(isOpen);
  const [alertIsOpen, setAlertIsOpen] = React.useState(false);
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  const { data } = useParkingLotBottomBarByIdQuery({
    variables: { id: selectedLot || 0 },
  });

  useEffect(() => {
    if (prevIsOpen && !isOpen) {
      controls.start("hidden");
    } else if (!prevIsOpen && isOpen) {
      controls.start("visible");
    }
  }, [controls, isOpen, prevIsOpen]);

  function onDragEnd(event: DragEventType, info?: PanInfo): void {
    const shouldClose =
      info!.velocity.y > 20 || (info!.velocity.y >= 0 && info!.point.y > 45);
    if (shouldClose) {
      controls.start("hidden");
      setIsOpen(false);
    } else {
      controls.start("visible");
      setIsOpen(true);
    }
  }

  return (
    <Flex
      w="full"
      h="full"
      align="flex-end"
      pos="absolute"
      bottom="0"
      left="0"
      zIndex="999"
      overflowY="hidden"
      pointerEvents="none"
    >
      <MotionBox
        pointerEvents="auto"
        display="flex"
        flexDirection="column"
        boxShadow="xs"
        borderTopLeftRadius="xl"
        borderTopRightRadius="xl"
        bg="white"
        h="200px"
        w="full"
        drag="y"
        initial="visible"
        animate={controls}
        variants={{
          visible: { y: 0 },
          hidden: { y: 150 },
        }}
        transition={spring}
        onDragEnd={onDragEnd}
        dragConstraints={{ top: 0 }}
      >
        <Grid
          placeItems="center"
          templateColumns="40px auto 40px"
          minH="50px"
          borderBottom="1px #ddd solid"
        >
          {selectedLot ? (
            <IconButton
              rounded="full"
              variant="ghost"
              aria-label="Go back"
              icon={<MdChevronLeft />}
              onClick={() => {
                setSelectedLot(null);
              }}
            />
          ) : (
            <Spacer />
          )}
          <Text fontWeight="bold" align="center">
            {directions
              ? "Directions"
              : selectedLot
              ? data?.parking_lot_by_pk?.name
              : "Parking Lots Near You"}
          </Text>
          {directions ? (
            <IconButton
              colorScheme="red"
              rounded="full"
              variant="ghost"
              aria-label="Cancel"
              icon={<MdCancel />}
              onClick={() => {
                setAlertIsOpen(true);
              }}
            />
          ) : (
            <Spacer />
          )}
        </Grid>
        {directions ? (
          <BottomBarDirections />
        ) : selectedLot ? (
          <BottomBarDetails
            id={selectedLot}
            address={data?.parking_lot_by_pk?.location.address || ""}
            availableSpace={
              data?.parking_lot_by_pk?.vacant_space?.vacant_count || 0
            }
            capacity={data?.parking_lot_by_pk?.vacant_space?.capacity}
            location={data?.parking_lot_by_pk?.location}
          />
        ) : (
          <SpacesNearYou
            onCardClick={(id) => {
              if (id == null) {
                return;
              }
              setSelectedLot(id);
            }}
          />
        )}
      </MotionBox>
      <AlertDialog
        isOpen={alertIsOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => setAlertIsOpen(false)}
        motionPreset="slideInBottom"
        size="sm"
        preserveScrollBarGap
      >
        <AlertDialogOverlay>
          <AlertDialogContent mt="auto" mb={0}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Cancel Route
            </AlertDialogHeader>
            <AlertDialogBody>
              Do you want to cancel the current route?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={() => setAlertIsOpen(false)}>
                Close
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  cancelRoute();
                  setAlertIsOpen(false);
                }}
                ml={3}
              >
                Cancel Route
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Flex>
  );
}
