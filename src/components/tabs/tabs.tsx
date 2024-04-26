import { ConfigProvider, Form, Tabs, TabsProps, UploadFile } from "antd";
import "./tabs.scss";

import React, { useEffect, useState } from "react";
import { TagTabs } from "../tag/tag";
import {
  HeaderManageAddNew,
  HeaderManageUpdate,
} from "../../containers/Headers/headers";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useParams } from "react-router";
import { setModeAdd, setModeEdit } from "../../redux/reducers/modeReducer";
import { getInfoEmployeeByID } from "../../services/Employee/employee";
import { convertDataToUpdate } from "../../utils/convertData";
import { FormEmployeeInformation } from "../form/formEmployeeInformation";
import { FormContractInformation } from "../form/formContractInfo";
import { FormEmploymentDetails } from "../form/formEmploymentDetail";
import { FormSalaryWages } from "../form/formSalaryWages";
import { FormOthers } from "../form/formOthers";
export const TabsEmployee: React.FC = () => {
  const [activeKey, setActiveKey] = useState("1");
  const [isError, setIsError] = useState(false);
  const [canAdd, setCanAdd] = useState(false);
  const [canUpdate, setCanUpdate] = useState(true);
  const [isErrorFormContract, setIsErrorFormContract] = useState(false);
  const [isModified, setIsModified] = useState(false);
  const [deletedIds, setDeletedIds] = useState<number[]>([]);
  const [idAddNew, setIdAddNew] = useState(0);
  const [form] = Form.useForm();
  const [files, setFiles] = useState<UploadFile[]>([]);
  const [formContract] = Form.useForm();
  const [formInfo] = Form.useForm();
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.mode.mode);

  const items: TabsProps["items"] = [
    {
      label: (
        <TagTabs
          label="Employee Information"
          type={
            activeKey === "1" && isError
              ? "error_active"
              : activeKey === "1"
              ? "active"
              : isError
              ? "error"
              : ""
          }
        />
      ),
      key: "1",
      children: (
        <FormEmployeeInformation
          form={formInfo}
          setError={setIsError}
          mode={mode}
          onValuesChange={(values, changeValues) => {
            //console.log("value: ", values, ">>>>> change", changeValues);
            //formInfo.setFieldsValue(changeValues);
            // console.log(" form values:>>> ", formInfo.getFieldsValue());
          }}
        />
      ),
      forceRender: true,
    },

    {
      label: (
        <TagTabs
          label="Contract Information"
          type={
            activeKey === "2" && isErrorFormContract
              ? "error_active"
              : activeKey === "2"
              ? "active"
              : isErrorFormContract
              ? "error"
              : ""
          }
        />
      ),
      key: "2",
      children: (
        <FormContractInformation
          form={formContract}
          setError={setIsErrorFormContract}
          mode={mode}
        />
      ),
      forceRender: true,
    },

    {
      label: (
        <TagTabs
          label="Employment Details"
          type={activeKey === "3" ? "active" : ""}
        />
      ),
      key: "3",
      children: (
        <FormEmploymentDetails
          form={form}
          onValuesChange={() => {
            console.log("change");
          }}
        />
      ),
      forceRender: true,
    },
    {
      label: (
        <TagTabs
          label="Salary & Wages"
          type={activeKey === "4" ? "active" : ""}
        />
      ),
      key: "4",
      children: <FormSalaryWages form={form} />,
      forceRender: true,
    },
    {
      label: (
        <TagTabs label="Others" type={activeKey === "5" ? "active" : ""} />
      ),
      key: "5",
      children: (
        <FormOthers
          form={form}
          idEmp={mode === "add" ? idAddNew : id}
          setFiles={setFiles}
          setIsModified={setIsModified}
          setDeletedIds={setDeletedIds}
        />
      ),
      forceRender: true,
    },
  ];

  const getEmployeeData = async () => {
    const idStr = id as string;
    try {
      const res = await getInfoEmployeeByID(idStr);
      if (res) {
        const empData = convertDataToUpdate(res.data);
        console.log("empdata>>>>>>>>>>>>", empData);
        formInfo.setFieldsValue(empData);
        formContract.setFieldsValue(empData);
        form.setFieldsValue(empData);
      }
    } catch (error) {
      console.log("errrr>>", error);
    }
  };
  const handleClickTab = () => {
    formInfo
      .validateFields()
      .then(() => {
        setCanAdd(true);
        setIsError(false);
        setCanUpdate(false);
      })
      .catch(() => {
        setCanAdd(false);
        setCanUpdate(false);
        setIsError(true);
      });
    formContract
      .validateFields()
      .then(() => {
        setCanAdd(true);
        setCanUpdate(true);
        setIsErrorFormContract(false);
      })
      .catch(() => {
        setCanAdd(false);
        setCanUpdate(false);
        setIsErrorFormContract(true);
      });
  };

  const mergeData = {
    ...form.getFieldsValue(),
    ...formContract.getFieldsValue(),
    ...formInfo.getFieldsValue(),
  };

  useEffect(() => {
    if (id) {
      dispatch(setModeEdit());
      getEmployeeData();
    } else {
      dispatch(setModeAdd());
    }
  }, []);

  return (
    <>
      {mode === "add" && (
        <HeaderManageAddNew
          canAdd={canAdd}
          dataAddNew={mergeData}
          id={idAddNew}
          setId={setIdAddNew}
          files={files}
        />
      )}
      {mode === "edit" && (
        <HeaderManageUpdate
          canUpdate={canUpdate}
          dataUpdate={mergeData}
          id={id}
          files={files}
          isModified={isModified}
          deletedIds={deletedIds}
        />
      )}
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              cardBg: "transparent",
            },
          },
        }}
      >
        <Tabs
          animated={false}
          defaultActiveKey={activeKey}
          onChange={setActiveKey}
          size={"large"}
          onTabClick={() => handleClickTab()}
          items={items}
        ></Tabs>
      </ConfigProvider>
    </>
  );
};
