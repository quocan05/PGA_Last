import { Breadcrumb, Button, Flex, Typography, UploadFile } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { HeaderUpdateProps } from "../../interfaces/props";
import { IEmployeeData } from "../../interfaces/value";

import { updateEmployeeByID } from "../../services/Employee/employee";
import { UploadDocuments } from "../../services/Upload/upload";
import dayjs from "dayjs";
import { toast } from "react-toastify";

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
        toast.success("Change Success");
        setTimeout(() => {
          navigate("/employee");
        }, 1000);
      }
    } catch (err: any) {
      toast.error(err.response.data.message);
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
          loading={loading}
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
