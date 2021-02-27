import { Box } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminHome from "./pages/Admin/AdminHome";
import AdminLayout from "./pages/Admin/AdminLayout";
import Home from "./pages/Home";
import ParkingLotSpaces from "./pages/ParkingLotSpaces";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminLotList from "./pages/Admin/AdminLotList";
import AdminLot from "./pages/Admin/AdminLot";
import ParkingLotList from "./pages/ParkingLotList";
import AdminDrivers from "./pages/Admin/AdminDrivers";

export default function App() {
  return (
    <Box h="100vh">
      <Router>
        <Switch>
          <Route path="/lot/:lot_id">
            <ParkingLotSpaces />
          </Route>
          <Route path="/lot-list">
            <ParkingLotList />
          </Route>
          <Route path="/admin/lot/:lot_id">
            <AdminLayout>
              <AdminLot />
            </AdminLayout>
          </Route>
          <Route path="/admin/lots">
            <AdminLayout>
              <AdminLotList />
            </AdminLayout>
          </Route>
          <Route path="/admin/drivers">
            <AdminLayout>
              <AdminDrivers />
            </AdminLayout>
          </Route>
          <Route exact path="/admin">
            <AdminLayout>
              <AdminHome />
            </AdminLayout>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Box>
  );
}
