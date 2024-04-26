import { SearchOutlined } from "@ant-design/icons";
import {
  Breadcrumb,
  Button,
  Flex,
  Form,
  Input,
  notification,
  Typography,
  UploadFile,
} from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { HeaderAddNewProps, HeaderUpdateProps } from "../../interfaces/props";
import { IEmployeeData } from "../../interfaces/value";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { fetchEmployeesByPageAndSearch } from "../../redux/reducers/employeeReducer";
import { HeaderCustomProps } from "../../interfaces/layout";
import { useSearchParams } from "react-router-dom";
import {
  addNewEmployee,
  updateEmployeeByID,
} from "../../services/Employee/employee";
import { openNotification } from "../../utils/openNotification";
import { UploadDocuments } from "../../services/Upload/upload";
import dayjs from "dayjs";

export const HeaderManage: React.FC<HeaderCustomProps> = ({ currentPage }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handleSearch = (e: any) => {
    const newSearchKeyword = e.target.value;
    setSearchKeyword(newSearchKeyword);
    // setSearchParam(debounceSearchEmployees);
    params.set("search", newSearchKeyword);
    params.set("page", "1"); // Reset lại trang về 1 khi tìm kiếm mới
    navigate(`?${params.toString()}`);
  };

  useEffect(() => {
    dispatch(
      fetchEmployeesByPageAndSearch({
        search: searchKeyword,
        page: currentPage.toString(),
      })
    );
    setSearchKeyword(searchParams.get("search") || "");
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <div>
        <Breadcrumb
          items={[
            {
              title: "General",
            },
            {
              title: (
                <a onClick={() => navigate("/employee")}>Employee Management</a>
              ),
            },
          ]}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          style={{
            textAlign: "left",
            fontSize: 36,
            fontWeight: 500,
          }}
        >
          Employee Management
        </Typography>
        <div style={{ maxWidth: "200px", alignItems: "center" }}>
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search.."
            value={searchKeyword}
            style={{ padding: "6px 16px", fontSize: 16 }}
            onChange={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export const HeaderManageAddNew: React.FC<HeaderAddNewProps> = ({
  canAdd,
  dataAddNew,
  setId,
  files,
}) => {
  const add = canAdd;
  const navigate = useNavigate();
  const [api, context] = notification.useNotification();
  const [loading, setLoading] = useState(false);
  const handleAddNew = async () => {
    setLoading(true);
    const dataConvert: IEmployeeData = {
      ...dataAddNew,
      dob: dayjs(dataAddNew.dob).format("YYYY-MM-DD"),
      contract_start_date: dayjs(dataAddNew.contract_start_date).format(
        "YYYY-MM-DD"
      ),
      hidden_on_payroll: dataAddNew.hidden_on_payroll === true ? "1" : "0",
    };
    try {
      const res = await addNewEmployee(dataConvert);
      if (res) {
        setLoading(false);
        openNotification(
          api,
          "success",
          "Add success",
          "Direct to Management now"
        );
        console.log("res>>>>>>>", files);
        setId(res.data.id);
        await UploadDocuments({ employee_id: res.data.id, documents: files });

        setTimeout(() => {
          navigate("/employee");
        }, 500);
      }
    } catch (error: any) {
      console.log("err: ", error);
      openNotification(api, "error", "Error !", error.response.data.message);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {context}
      <Breadcrumb
        items={[
          {
            title: "General",
          },
          {
            title: (
              <a onClick={() => navigate("/employee")}>Employee Management</a>
            ),
          },
          {
            title: <a>Add new employee</a>,
          },
        ]}
      />
      <Flex justify="space-between">
        <Typography
          style={{
            textAlign: "left",
            fontSize: 36,
            fontWeight: 500,
          }}
        >
          Employee Management
        </Typography>
        <Form.Item>
          <Button
            loading={loading}
            type="primary"
            size="large"
            disabled={!add}
            onClick={() => handleAddNew()}
            htmlType="submit"
          >
            ADD
          </Button>
        </Form.Item>
      </Flex>
    </div>
  );
};

export const HeaderManageUpdate: React.FC<HeaderUpdateProps> = ({
  canUpdate,
  dataUpdate,
  files,
  id,
  isModified,
  deletedIds,
}) => {
  const update = canUpdate;
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const [loading, setLoading] = useState(false);
  const handleUpdate = async () => {
    setLoading(true);
    console.log("filelist?>>>>>>>>", files);
    const dataConvert: IEmployeeData = {
      ...dataUpdate,
      dob: dayjs(dataUpdate.dob).format("YYYY-MM-DD"),
      contract_start_date: dayjs(dataUpdate.contract_start_date).format(
        "YYYY-MM-DD"
      ),
      hidden_on_payroll: dataUpdate.hidden_on_payroll === true ? "1" : "0",
    };
    console.log("data update>>>>>>>", dataUpdate);
    console.log("modified now: ", isModified);
    const filesObjectOnly: UploadFile[] = files.filter(
      (file) => file instanceof File || file instanceof FormData
    );

    try {
      const res = await updateEmployeeByID(id, dataConvert);
      if (res) {
        if (isModified) {
          await UploadDocuments({
            employee_id: id,
            documents: filesObjectOnly,
            deleted_ids: deletedIds,
          });
        }
        setLoading(false);
        openNotification(api, "success", "Change saved", "");
        setTimeout(() => {
          navigate("/employee");
        }, 1000);
      }
    } catch (err: any) {
      openNotification(api, "error", err.response.data.message, "");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {contextHolder}
      <Breadcrumb
        items={[
          {
            title: "General",
          },
          {
            title: (
              <a onClick={() => navigate("/employee")}>Employee Management</a>
            ),
          },
          {
            title: <a>Edit employee</a>,
          },
        ]}
      />
      <Flex justify="space-between">
        <Typography
          style={{
            textAlign: "left",
            fontSize: 36,
            fontWeight: 500,
          }}
        >
          Employee Management
        </Typography>
        <Button
          //loading={loading}
          type="primary"
          size="large"
          htmlType="submit"
          disabled={!update}
          onClick={() => handleUpdate()}
        >
          Save Change
        </Button>
      </Flex>
    </div>
  );
};

export const HeaderSettings = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <div>
        <Breadcrumb
          items={[
            {
              title: "General",
            },
            {
              title: <a>Settings</a>,
            },
          ]}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          style={{
            textAlign: "left",
            fontSize: 36,
            fontWeight: 500,
          }}
        >
          Settings
        </Typography>
      </div>
    </div>
  );
};
