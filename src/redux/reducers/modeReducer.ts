import { createAction, createReducer } from "@reduxjs/toolkit";

const initState = {
  mode: "",
};

export const setModeAdd = createAction("mode/add");
export const setModeEdit = createAction("mode/edit");
export const modeReducer = createReducer(initState, (builder) => {
  builder
    .addCase(setModeAdd, (state, action) => {
      state.mode = "add";
    })
    .addCase(setModeEdit, (state, action) => {
      state.mode = "edit";
    });
});
