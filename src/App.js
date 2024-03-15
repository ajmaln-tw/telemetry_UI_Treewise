import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import "./App.css";
import { actions as commonActions } from "./modules/common/slice";
import DashboardLayout from "./layouts/DashboardLayout";
import { useDispatch } from "react-redux";
import IndexHome from "./modules/home/components/IndexHome";
import { Apps } from "./utils/commonUtils";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(commonActions.setNavigator(navigate));
  }, []);
  Apps.init();
  return (
    <Typography className="app" component="div">
      <DashboardLayout >
        <Outlet />
        <IndexHome />
      </DashboardLayout >
    </Typography>
  );
}

export default App;
