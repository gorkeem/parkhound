import { Grid, Box } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import AdminSidebar from "./AdminSidebar";

type Props = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: Props): ReactElement {
  return (
    <Grid templateColumns="300px auto" h="full">
      <AdminSidebar />
      <Box
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        overflow="scroll"
        bg="gray.50"
      >
        {children}
      </Box>
    </Grid>
  );
}
