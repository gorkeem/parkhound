import React, { ReactElement, useEffect, useMemo, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  GoogleMapProps,
  Marker,
  MarkerProps,
} from "@react-google-maps/api";
import { ParkingLotsQuery } from "../generated/graphql";
import styles from "../utils/googleMapStyles";
import { useDirections } from "../utils/DirectionsProvider";
import { GeolocationData } from "../types";

function CurrentLocationMarker({ position }: MarkerProps) {
  return (
    <Marker
      icon={{
        path: 0, // 0 for circle
        scale: 8,
        fillOpacity: 1,
        strokeWeight: 2,
        fillColor: "#5384ED",
        strokeColor: "#ffffff",
      }}
      position={position}
    />
  );
}

type Props = {
  lots: ParkingLotsQuery["parking_lot"];
  onMarkerClick: (id: number) => void;
  children: ReactElement;
  currentPos: GeolocationData;
} & GoogleMapProps;

function MapComponent({
  center,
  lots,
  onMarkerClick,
  children,
  currentPos,
}: Props) {
  const [gmap, setGmap] = useState<google.maps.Map<Element> | null>(null);
  const { destinationLotId } = useDirections();
  const renderedMarkers = useMemo(() => {
    if (destinationLotId == null) {
      return lots.map(({ id, location, vacant_space }, i) => (
        <CustomMarker
          onClick={() => onMarkerClick(id)}
          key={i}
          position={{ lat: location.latitude, lng: location.longitude }}
          is_full={
            vacant_space?.vacant_count === 0 ||
            vacant_space?.vacant_count == null
          }
        />
      ));
    } else {
      return lots
        .filter((lot) => lot.id === destinationLotId)
        .map(({ id, location }, i) => (
          <CustomMarker
            onClick={() => onMarkerClick(id)}
            key={i}
            position={{ lat: location.latitude, lng: location.longitude }}
          />
        ));
    }
  }, [destinationLotId, lots, onMarkerClick]);

  useEffect(() => {
    gmap?.panTo(center!!);
  }, [center, gmap]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyBblBzZWcOK-HlyENdxgIwwwid0sVmseDk">
      <GoogleMap
        onLoad={(map) => setGmap(map)}
        options={{
          disableDefaultUI: true,
          clickableIcons: false,
          styles: styles,
        }}
        mapContainerStyle={{
          width: "100vw",
          height: "100vh",
        }}
        center={center}
        zoom={15}
      >
        <CurrentLocationMarker position={currentPos || { lat: 0, lng: 0 }} />
        {renderedMarkers}
        {children}
      </GoogleMap>
    </LoadScript>
  );
}

type ParkingLotMarkerProps = {
  is_full?: boolean;
} & MarkerProps;

function CustomMarker({ is_full, ...props }: ParkingLotMarkerProps) {
  return (
    <Marker
      icon={{
        url: is_full ? "/red_marker.svg" : "parking_marker.svg",
        anchor: new google.maps.Point(17, 46),
        scaledSize: new google.maps.Size(37, 37),
      }}
      {...props}
    ></Marker>
  );
}

export default React.memo(MapComponent);
