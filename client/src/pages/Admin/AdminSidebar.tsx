import { Flex, Icon, Link, Stack, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaParking } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import { IconType } from "react-icons";

function MenuLink({
  path,
  displayName,
  selected,
  icon,
}: {
  path: string;
  displayName: string;
  selected?: boolean;
  icon: IconType;
}) {
  return (
    <Link
      as={RouterLink}
      to={path}
      display="flex"
      alignItems="center"
      style={{ textDecoration: "none" }}
      rounded="lg"
      px={2}
      transition="all 0.1s ease-out"
      h="45px"
      bg={selected ? "blue.300" : ""}
      color={selected ? "white" : ""}
      _hover={{
        background: "blue.300",
        color: "white",
      }}
    >
      <Icon as={icon} mr={2} fontSize="xl" />
      {displayName}
    </Link>
  );
}

export default function AdminSidebar(): ReactElement {
  const location = useLocation();

  return (
    <Stack borderRight="1px solid #ccc">
      <Flex mb={4} px={6} align="center" h="65px" borderBottom="1px solid #ccc">
        <Text fontSize="2xl" fontWeight="bold">
          Parkhound
        </Text>
      </Flex>
      <Stack px={4}>
        <MenuLink
          path="/admin"
          displayName="Dashboard"
          selected={location.pathname === "/admin"}
          icon={AiOutlineDashboard}
        />
        <MenuLink
          path="/admin/lots"
          displayName="Parking Lots"
          selected={location.pathname.includes("lot")}
          icon={FaParking}
        />
        <MenuLink
          path="/admin/drivers"
          displayName="Registered Drivers"
          selected={location.pathname.includes("drivers")}
          icon={GiSteeringWheel}
        />
      </Stack>
    </Stack>
  );
}
