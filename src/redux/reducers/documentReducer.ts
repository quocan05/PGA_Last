

import { createAction, createReducer } from "@reduxjs/toolkit";
import { UploadFile } from "antd";


const initState: UploadFile[] = [];


export const setDocuments = createAction('employee/document/upload/set');
export const delDocuments = createAction('employee/document/upload/del');

export const documentReducer = createReducer(initState, builder => {
    builder.addCase(setDocuments, (state, action) => {
        const list = action.payload;
        
    })
})