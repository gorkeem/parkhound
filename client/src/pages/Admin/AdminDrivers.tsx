import React, { ReactElement } from "react";
import { Flex, Grid, Heading, Box, IconButton } from "@chakra-ui/react";
import { useDriversByInstitutionQuery } from "../../generated/graphql";
import { BiCrown } from "react-icons/bi";
import { RiForbid2Line } from "react-icons/ri";

export default function AdminDrivers(): ReactElement {
  const { data } = useDriversByInstitutionQuery({ variables: { id: 1 } });
  return (
    <Box p={4}>
      <Heading mb={4}>Drivers</Heading>
      <Grid placeItems="center">
        <Flex color="gray.500" px={4} py={2} w="800px">
          <Box width="250px">Name</Box>
          <Box width="250px">Email</Box>
          <Box width="250px">Role</Box>
          <Box width="250px">Actions</Box>
        </Flex>
        {data?.institution_by_pk?.user_institutions.map(
          ({ user, is_admin, user_id }) => (
            <Flex
              key={user_id}
              p={8}
              align="center"
              bg="white"
              w="800px"
              h="50px"
              border="1px solid #ccc"
            >
              <Box width="250px">
                {user.first_name} {user.last_name}
              </Box>
              <Box width="250px">{user.email}</Box>
              <Box width="250px">{is_admin ? "Admin" : "Driver"}</Box>
              <Box width="250px">
                {!is_admin && (
                  <IconButton
                    colorScheme="yellow"
                    mr={2}
                    aria-label="Promote"
                    icon={<BiCrown />}
                  />
                )}
                <IconButton
                  colorScheme="red"
                  aria-label="Ban"
                  icon={<RiForbid2Line />}
                />
              </Box>
            </Flex>
          )
        )}
      </Grid>
    </Box>
  );
}
