import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import { IInitData, SearchParams } from "../../interfaces/value";
import { ACTION_REDUX, API_PGA } from "../../constants/value";
import axios from "axios";
import { AuthHeader } from "../../configs/APIConfigs";
import {
  getBenefit,
  getDepartment,
  getGrade,
  getInfoEmployeeByID,
  getMarriageStatus,
  getPosition,
} from "../../services/Employee/employee";

const initState: IInitData = {
  listData: [],
  info: {},
  isError: false,
  isLoading: false,
  current: null,
  pageSize: 20,
  total: 0,
  department: [],
  position: [],
  marriage: [],
  benefits: [],
  grade: [],
};

export const fetchEmployeesByPage = createAsyncThunk(
  ACTION_REDUX.GET_EMPLOYEE_BY_PAGE,
  async (page: number) => {
    const res = await axios.get(API_PGA.EMPLOYEE, {
      params: { page },
      headers: AuthHeader,
    });
    return res.data;
  }
);

export const fetchEmployeesByPageAndSearch = createAsyncThunk(
  ACTION_REDUX.GET_EMPLOYEE_BY_PAGE_SEARCH,
  async (param: SearchParams) => {
    const res = await axios.get(API_PGA.EMPLOYEE, {
      params: param,
      headers: AuthHeader,
    });
    return res.data;
  }
);

export const fetchDepartment = createAsyncThunk(
  ACTION_REDUX.GET_DEPARTMENT,
  async () => {
    const res = await getDepartment();
    return res;
  }
);

export const fetchPosition = createAsyncThunk(
  ACTION_REDUX.GET_POSITION,
  async () => {
    const res = await getPosition();
    return res;
  }
);
export const fetchGrade = createAsyncThunk(ACTION_REDUX.GET_GRADE, async () => {
  const res = await getGrade();
  return res;
});

export const fetchBenefit = createAsyncThunk(
  ACTION_REDUX.GET_BENEFIT,
  async () => {
    const res = await getBenefit();
    return res;
  }
);

export const fetchMarriageStatus = createAsyncThunk(
  ACTION_REDUX.GET_MARRIAGE,
  async () => {
    const res = await getMarriageStatus();
    return res;
  }
);

export const fetchEmployeeByID = createAsyncThunk(
  "employee/info",
  async (id: string) => {
    try {
      const res = await getInfoEmployeeByID(id);
      console.log("res", res);
      return res;
    } catch (error) {
      console.log("err", error);
    }
  }
);

export const employeeReducer = createReducer(initState, (builder) => {
  builder
    //fetch employees
    .addCase(fetchEmployeesByPage.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.listData = action.payload.data.data;
      state.current = action.payload.data.current_page;
      state.pageSize = action.payload.data.per_page;
      state.total = action.payload.data.total;
    })

    .addCase(fetchEmployeesByPage.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
    })
    .addCase(fetchEmployeesByPage.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
    })
    //fetch search
    .addCase(fetchEmployeesByPageAndSearch.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.listData = action.payload.data.data;
      state.current = action.payload.data.current_page;
      state.pageSize = action.payload.data.per_page;
      state.total = action.payload.data.total;
    })

    .addCase(fetchEmployeesByPageAndSearch.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
    })
    .addCase(fetchEmployeesByPageAndSearch.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
    })
    //employee by id
    .addCase(fetchEmployeeByID.fulfilled, (state, action) => {
      state.info = action.payload.data;
    })
    .addCase(fetchEmployeeByID.pending, (state, action) => {
      state.info = {};
    })
    .addCase(fetchEmployeeByID.rejected, (state, action) => {
      state.info = {};
    })
    //fetch department
    .addCase(fetchDepartment.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.department = action.payload.data;
    })
    .addCase(fetchDepartment.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
    })
    //fetchPosition
    .addCase(fetchPosition.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.position = action.payload.data;
    })
    .addCase(fetchPosition.pending, (state, action) => {
      state.isError = true;
      state.isLoading = true;
    })

    //fetch grade
    .addCase(fetchGrade.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.grade = action.payload.data;
    })
    .addCase(fetchGrade.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
    })
    //fetch benefit
    .addCase(fetchBenefit.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.benefits = action.payload.data;
    })
    .addCase(fetchBenefit.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
    })
    //fetch marriage status
    .addCase(fetchMarriageStatus.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.marriage = action.payload.data;
    })
    .addCase(fetchMarriageStatus.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
    });
});
