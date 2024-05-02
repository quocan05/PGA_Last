import { Breadcrumb, Button, Flex, Form, Typography } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { HeaderAddNewProps } from "../../interfaces/props";
import { IEmployeeData } from "../../interfaces/value";

import { addNewEmployee } from "../../services/Employee/employee";
import { UploadDocuments } from "../../services/Upload/upload";
import dayjs from "dayjs";
import { toast } from "react-toastify";
export const HeaderManageAddNew: React.FC<HeaderAddNewProps> = ({
  canAdd,
  dataAddNew,
  setId,
  files,
}) => {
  const add = canAdd;
  const navigate = useNavigate();
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

        toast.success("Add Success");
        setId(res.data.id);
        await UploadDocuments({ employee_id: res.data.id, documents: files });

        setTimeout(() => {
          navigate("/employee");
        }, 500);
      }
    } catch (error: any) {
      console.log("err: ", error);
      toast.error(error.response.data.message);
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
