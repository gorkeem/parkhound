import React, {
  createContext,
  ReactElement,
  useCallback,
  useContext,
  useState,
} from "react";

export type DirectionsContextType = {
  destinationLotId: number | null;
  destination: { lat: number; lng: number } | null;
  directions: google.maps.DirectionsResult | null;
  setDestinationLotId: (id: number | null) => void;
  setDestination: (destination: { lat: number; lng: number } | null) => void;
  setDirections: (directions: google.maps.DirectionsResult | null) => void;
  cancelRoute: () => void;
};

export const DirectionsContext = createContext<DirectionsContextType>({
  destinationLotId: null,
  destination: null,
  directions: null,
  setDestination: () => console.warn("No Directions Provider"),
  setDirections: () => console.warn("No Directions Provider"),
  setDestinationLotId: () => console.warn("No Directions Provider"),
  cancelRoute: () => console.warn("No Directions Provider"),
});

export default function DirectionsProvider({
  children,
}: {
  children: ReactElement;
}): ReactElement {
  const [destination, setDestination] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [destinationLotId, setDestinationLotId] = useState<number | null>(null);
  const [
    directions,
    setDirections,
  ] = useState<google.maps.DirectionsResult | null>(null);

  const cancelRoute = useCallback(() => {
    setDestination(null);
    setDirections(null);
    setDestinationLotId(null);
  }, [setDestination, setDirections]);

  return (
    <DirectionsContext.Provider
      value={{
        destination,
        directions,
        destinationLotId,
        setDestination,
        setDirections,
        setDestinationLotId,
        cancelRoute,
      }}
    >
      {children}
    </DirectionsContext.Provider>
  );
}

export const useDirections = () => useContext(DirectionsContext);
