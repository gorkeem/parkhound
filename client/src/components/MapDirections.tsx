import { DirectionsRenderer, DirectionsService } from "@react-google-maps/api";
import React, { ReactElement } from "react";
import { useDirections } from "../utils/DirectionsProvider";

export default function MapDirections(): ReactElement {
  const { destination, directions, setDirections } = useDirections();
  return (
    <>
      {destination && (
        <DirectionsService
          // required
          options={{
            destination: destination,
            origin: { lat: 38.4548244, lng: 27.1899767 },
            travelMode: "DRIVING" as google.maps.TravelMode,
          }}
          // required
          callback={(resp) => {
            if (directions == null) {
              console.log(resp);
              setDirections(resp);
            }
          }}
        />
      )}
      {directions && (
        <DirectionsRenderer
          options={{
            suppressMarkers: true,
            directions: directions,
          }}
        />
      )}
    </>
  );
}
