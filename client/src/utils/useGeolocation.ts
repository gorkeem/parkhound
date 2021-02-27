import { useState, useEffect } from "react";
import { GeolocationData } from "../types";

export default function useGeolocation(): [string, GeolocationData | null] {
  const [error, setError] = useState("");
  const [position, setPosition] = useState<GeolocationData | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setError("");
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (e) => setError(e.message),
      {
        // maximumAge: Infinity,
        enableHighAccuracy: true,
      }
    );
  }, []);

  return [error, position];
}
