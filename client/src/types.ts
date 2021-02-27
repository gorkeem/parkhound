import { ParkingLotDetailsByIdQuery } from "./generated/graphql"

export type GeolocationData = {
  lat: number;
  lng: number;
}

export type SpaceData =  NonNullable<
ParkingLotDetailsByIdQuery["parking_lot_by_pk"]
>["lot_rows"][0]["parking_spaces"][0]