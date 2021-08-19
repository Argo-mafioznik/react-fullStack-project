import React from "react";
import { combineReducers } from "redux";
import { deviceReducer } from "./reducer/deviceReducer";

export const rootReducer = () =>
  combineReducers({
    device: deviceReducer,
  });
