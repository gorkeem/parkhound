import { Box, Grid, GridProps } from "@chakra-ui/react";
import { motion, MotionValue } from "framer-motion";
import React, { ReactElement, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { ParkingLotDetailsByIdQuery } from "../generated/graphql";
import { SpaceData } from "../types";
import ParkingSpace from "./ParkingSpace";

const SPACE_WIDTH = 60;
const SPACE_HEIGHT = 36;

type Props = {
  lot_rows: NonNullable<
    ParkingLotDetailsByIdQuery["parking_lot_by_pk"]
  >["lot_rows"];
  onSpaceClick?: (data: SpaceData) => void;
  scale: MotionValue<number>;
  selectedSpaceId: number | null;
} & GridProps;

export default function ParkingLotMap({
  lot_rows,
  onSpaceClick,
  selectedSpaceId,
  scale,
  ...props
}: Props): ReactElement {
  const history = useHistory();
  const is_admin = history.location.pathname.includes("admin");
  const gridRef = useRef<HTMLDivElement>(null);
  function handleClick(data: SpaceData) {
    if (onSpaceClick) {
      onSpaceClick(data);
    }
  }

  useEffect(() => {
    if (gridRef == null || gridRef.current == null || !is_admin) {
      return;
    }

    const ele = gridRef.current;
    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseMoveHandler = function (e: MouseEvent) {
      // How far the mouse has been moved
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      // Scroll the element
      ele.scrollTop = pos.top - dy;
      ele.scrollLeft = pos.left - dx;

      console.log(ele.scrollTop);
    };

    const mouseUpHandler = function () {
      ele.style.cursor = "grab";
      ele.style.removeProperty("user-select");

      console.log("Removing mousemove & mouseup");
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };

    const mouseDownHandler = function (e: MouseEvent) {
      ele.style.cursor = "grabbing";
      ele.style.userSelect = "none";

      pos = {
        // The current scroll
        left: ele.scrollLeft,
        top: ele.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
      };

      console.log("Adding mousemove & mouseup");
      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler);
    };

    document.addEventListener("mousedown", mouseDownHandler);

    return () => {
      console.log("Unmount");
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
      document.removeEventListener("mousedown", mouseDownHandler);
    };
  }, []);

  return (
    <Grid
      {...props}
      justifyContent={
        lot_rows[0].parking_spaces.length > 10 ? "normal" : "center"
      }
      mt={is_admin ? 0 : "130px"}
      ref={gridRef}
      cursor="grab"
      overflow="scroll"
      bg="white"
      border="2px solid black"
      gridTemplateRows={`repeat(${lot_rows.length}, ${SPACE_HEIGHT}px)`}
      gridTemplateColumns={`repeat(${lot_rows[0].parking_spaces.length}, ${SPACE_WIDTH}px)`}
      padding="16px"
      h="full"
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {lot_rows.map((row, i) => {
        return row.parking_spaces.map((space, j) => {
          return (
            <ParkingSpace
              onClick={() => handleClick(space)}
              key={i + "" + j}
              space={space}
              is_down={
                (i < row.parking_spaces.length / 2 && space.is_entry) ||
                (i > row.parking_spaces.length / 2 && space.is_exit)
              }
              is_selected={
                selectedSpaceId != null && selectedSpaceId === space.id
              }
            />
          );
        });
      })}
    </Grid>
  );
}
