import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useParkingLotDetailsByIdQuery } from "../generated/graphql";
import ParkingSpacesHeader from "../components/ParkingSpacesHeader";
import ParkingSpacesDetails from "../components/ParkingSpacesDetails";
import { useHistory, useParams } from "react-router-dom";
import FullPageError from "../components/FullPageError";
import FullPageLoading from "../components/FullPageLoading";
import { useDirections } from "../utils/DirectionsProvider";

type RouteParams = {
  lot_id?: string;
};

export default function ParkingLotSpaces() {
  const { lot_id } = useParams<RouteParams>();
  const history = useHistory();
  const { setDestination, setDestinationLotId } = useDirections();
  const { data, loading } = useParkingLotDetailsByIdQuery({
    variables: { id: parseInt(lot_id || "0") },
  });

  if (loading) {
    return <FullPageLoading />;
  }

  if (data?.parking_lot_by_pk?.lot_rows == null) {
    return (
      <FullPageError message="Sorry, there is no map for this parking lot">
        <Button
          onClick={() => {
            history.goBack();
          }}
        >
          Return to map
        </Button>
      </FullPageError>
    );
  }

  return (
    <Box
      pos="relative"
      m={{ md: "auto" }}
      w={{ md: "850px" }}
      h="full"
      overflowY="hidden"
      bg="gray.200"
    >
      <ParkingSpacesHeader
        lot_id={data?.parking_lot_by_pk.id}
        lot_name={data?.parking_lot_by_pk.name}
        vacant_space={data.parking_lot_by_pk.vacant_space?.vacant_count}
        position="fixed"
        top={0}
        left={0}
        w="full"
        zIndex="999"
      />
      {data?.parking_lot_by_pk.lot_rows.length > 0 ? (
        <ParkingSpacesDetails
          is_disabled={data?.parking_lot_by_pk.is_disabled}
          pb="125px"
          lot_rows={data?.parking_lot_by_pk.lot_rows}
        />
      ) : (
        <FullPageError message="Sorry, there is no map for this parking lot">
          <Button
            onClick={() => {
              history.goBack();
            }}
          >
            Return to zones
          </Button>
        </FullPageError>
      )}
      <Flex
        borderTop="1px"
        borderColor="gray.300"
        borderTopRadius="6px"
        h="60px"
        bg="white"
        w="full"
        pos="fixed"
        bottom={0}
        left={0}
        justify="center"
        align="center"
      >
        <Button
          rounded="full"
          colorScheme="blue"
          w={1 / 2}
          onClick={() => {
            if (
              data?.parking_lot_by_pk?.location == null ||
              data?.parking_lot_by_pk.id == null
            ) {
              return;
            }
            const { latitude, longitude } = data.parking_lot_by_pk.location;
            setDestination({ lat: latitude, lng: longitude });
            setDestinationLotId(data.parking_lot_by_pk.id);
            history.push("/");
          }}
        >
          Navigate
        </Button>
      </Flex>
    </Box>
  );
}
