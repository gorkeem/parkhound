import { IconButton, Grid, Text, Flex, Box, GridProps } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";
import { MdChevronLeft, MdFavorite, MdFavoriteBorder } from "react-icons/md";
import {
  useAddToFavoritesMutation,
  useFavoritesQuery,
} from "../generated/graphql";

type Props = {
  lot_id: number;
  lot_name: string;
  vacant_space: number;
  is_admin?: boolean;
} & GridProps;

export default function ParkingSpacesHeader({
  lot_name,
  vacant_space,
  children,
  lot_id,
  is_admin = false,
  ...props
}: Props): ReactElement {
  const history = useHistory();
  const { data, refetch } = useFavoritesQuery({
    variables: {
      id: parseInt(localStorage.getItem("uid")!!),
    },
  });
  const [addFavorite] = useAddToFavoritesMutation({
    variables: {
      uid: parseInt(localStorage.getItem("uid")!!),
      parking_lot_id: lot_id,
    },
    onCompleted: () => {
      refetch();
    },
  });
  return (
    <Grid
      position="fixed"
      top="0"
      left={is_admin ? "300px" : 0}
      {...props}
      placeItems="center"
      templateColumns="40px auto 40px"
      p={2}
      borderBottom="1px solid #eee"
      bg="white"
      w={is_admin ? "80%" : "full"}
      zIndex="999"
    >
      <IconButton
        rounded="full"
        variant="ghost"
        aria-label="Back button"
        icon={<MdChevronLeft />}
        onClick={() => {
          history.goBack();
        }}
      />
      <Flex direction="column" justify="center" align="center">
        <Text fontWeight="bold">{lot_name}</Text>
        <Flex>
          {children}
          <Box>
            <Text mr={1} display="inline" fontWeight="bold">
              {vacant_space}
            </Text>
            <Text display="inline" color="gray.500">
              vacant spaces
            </Text>
          </Box>
        </Flex>
      </Flex>
      {!is_admin && (
        <IconButton
          rounded="full"
          variant="ghost"
          aria-label="Favorite"
          icon={
            data?.user_by_pk?.favorites.find(
              (lot) => lot.parking_lot.id === lot_id
            ) != null ? (
              <MdFavorite color="red" />
            ) : (
              <MdFavoriteBorder />
            )
          }
          onClick={() => {
            data?.user_by_pk?.favorites.find(
              (lot) => lot.parking_lot.id === lot_id
            ) == null && addFavorite();
          }}
        />
      )}
    </Grid>
  );
}
