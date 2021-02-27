import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import MapBottomBar from "../components/MapBottomBar";
import MapComponent from "../components/MapComponent";
import HomeOverlayButtons from "../components/HomeOverlayButtons";
import useGeolocation from "../utils/useGeolocation";
import { useParkingLotsQuery } from "../generated/graphql";
import FullPageLoading from "../components/FullPageLoading";
import MapDirections from "../components/MapDirections";
import { GeolocationData } from "../types";

export default function Home() {
  const [error, position] = useGeolocation();
  const { data, error: lot_error, loading } = useParkingLotsQuery();
  const [selectedLot, setSelectedLot] = useState<number | null>(null);
  const [isBottomBarOpen, setIsBottomBarOpen] = useState(true);
  const [mapCenter, setMapCenter] = useState<GeolocationData | null>(null);

  if (error !== "" || lot_error) {
    return <Box>Error: {error || lot_error}</Box>;
  }

  if (loading || data?.parking_lot == null || position == null) {
    return <FullPageLoading />;
  }

  function handleMarkerClick(id: number) {
    const lot = data?.parking_lot.find((lot) => lot.id === id);
    setSelectedLot(id);
    setIsBottomBarOpen(true);
    setMapCenter({
      lat: lot?.location.latitude || 0,
      lng: lot?.location.longitude || 0,
    });
  }

  return (
    <Box pos="relative">
      <MapBottomBar
        selectedLot={selectedLot}
        setSelectedLot={setSelectedLot}
        isOpen={isBottomBarOpen}
        setIsOpen={setIsBottomBarOpen}
      />
      {position && (
        <MapComponent
          currentPos={position}
          center={mapCenter ?? position}
          lots={data?.parking_lot}
          onMarkerClick={handleMarkerClick}
        >
          <MapDirections />
        </MapComponent>
      )}
      <HomeOverlayButtons />
    </Box>
  );
}
