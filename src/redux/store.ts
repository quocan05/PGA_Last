import { configureStore } from "@reduxjs/toolkit";
import { employeeReducer } from "./reducers/employeeReducer";
import { modeReducer } from "./reducers/modeReducer";
import uploadSlice from "./reducers/uploadSlice";

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
    mode: modeReducer,
    upload: uploadSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
