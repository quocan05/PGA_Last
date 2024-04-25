import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UploadFile } from "antd";

interface UploadState {
  fileList: UploadFile[];
}

const initialState: UploadState = {
  fileList: [],
};

const uploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {
    addFile: (state, action: PayloadAction<UploadFile>) => {
      state.fileList.push(action.payload);
      
    },
    deleteFile: (state, action: PayloadAction<UploadFile>) => {
      state.fileList = state.fileList.filter((file) => file !== action.payload);
    },
  },
});

export const { addFile, deleteFile } = uploadSlice.actions;

export default uploadSlice.reducer;
