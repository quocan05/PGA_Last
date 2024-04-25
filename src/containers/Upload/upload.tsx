import React, { useEffect, useState } from "react";
import {
  Button,
  ConfigProvider,
  Table,
  Upload as AntdUpload,
  message,
  UploadProps,
  TableColumnsType,
  GetProp,
  UploadFile,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { CustomTableProps } from "../../interfaces/table";
import { DataTypeColumnFile } from "../../interfaces/value";
import { ButtonUpload } from "../../components/button/button";
import { formatDateCreatedAt } from "../../utils/convertDate";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getInfoEmployeeByID } from "../../services/Employee/employee";

const UploadDocuments: React.FC<CustomTableProps> = ({
  setFiles,
  setIsModified,
  setDeletedIds,
  idEmp,
  ...props
}) => {
  type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
  const mode = useSelector((state: RootState) => state.mode.mode);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [delIds, setDelIds] = useState<number[]>([]);
  const columns: TableColumnsType<DataTypeColumnFile> = [
    {
      title: "No",
      width: "5%",
      dataIndex: "no",
      fixed: "left" as "left",
      render: (_: any, __: any, index: number) => index + 1, // Auto-increment No column
    },
    {
      title: "Document name",
      width: "30%",
      dataIndex: "name",
      render: (text: string, record: any) => {
        if (mode === "edit") {
          if (record instanceof File || record instanceof FormData) {
            return text;
          } else {
            const parts = record.document.split("/");

            // Lấy phần tử cuối cùng trong mảng (chứa tên tệp)
            const filename = parts[parts.length - 1];

            // Lấy tên tệp bằng cách loại bỏ phần mở rộng (.png)
            const name = filename.split(".")[0];
            return name;
          }
        } else {
          return text;
        }
      },
    },
    {
      title: "Create At",
      width: "30%",
      dataIndex: "lastModifiedDate",
      render: (lastModifiedDate: string, record: any) => {
        if (mode === "edit") {
          const cratedAt = formatDateCreatedAt(record.created_at);
          return cratedAt || lastModifiedDate;
        } else {
          return lastModifiedDate;
        }
      },
    },

    {
      title: "Action",
      fixed: "right" as "right",
      width: "30%",
      render: (_: any, record: any) => (
        <Button
          danger
          icon={<DeleteOutlined />}
          size="small"
          style={{ border: "none", background: "#FFEFEF" }}
          onClick={() => handleDelete(record)}
        ></Button>
      ),
    },
  ];

  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("files[]", file as FileType);
    });
    console.log("list >>>", fileList, "id>>>> ", idEmp);
  };

  const handleDelete = (file: any) => {
    const index = fileList.indexOf(file);
    const newFileList = fileList.slice();
    newFileList.splice(index, 1);
    setFileList(newFileList);
    setFiles(newFileList);
    setIsModified(true);
    if (mode === "edit") {
      console.log("deleted: ", file.id);
      setDelIds([...delIds, file.id]);
      setDeletedIds([...delIds, file.id]);
    }
    console.log("list now>>>", newFileList);
    console.log("list delIDs:", delIds);
  };

  const uploadProps: UploadProps = {
    beforeUpload: (file) => {
      // Check file type
      const fileType = file.name.split(".").pop()?.toLowerCase();
      if (fileType !== "jpg" && fileType !== "png" && fileType !== "pdf") {
        message.error("Only JPG, PNG, PDF files are allowed.");
        return false;
      }
      // Check maximum files
      if (fileList.length >= 10) {
        message.error("Maximum 10 files allowed.");
        return false;
      }

      const duplicateFile = fileList.find((f) => f.name === file.name);
      if (duplicateFile) {
        return false;
      }

      console.log("file add.>>>", file);
      setFileList([...fileList, file]);
      setFiles([...fileList, file]);
      setIsModified(true);
      return false;
    },
    fileList,
    onRemove: (file) => handleDelete(file),
  };

  const disabled = fileList.length >= 10;

  useEffect(() => {
    if (mode === "edit") {
      try {
        const getListFile = async () => {
          const res = await getInfoEmployeeByID(idEmp);
          if (res) {
            setFileList(res.data.documents);
          }
        };
        getListFile();
        setIsModified(false);
      } catch (err) {
        console.log("err>>>", err);
      }
    } else {
      setFileList([]);
    }
  }, [mode]);

  return (
    <div>
      <AntdUpload {...uploadProps} showUploadList={false}>
        <div style={{ display: "flex", gap: 60, margin: "0px  0px 20px 0px" }}>
          <span>Document</span>
          <ButtonUpload disabled={disabled} />
        </div>
      </AntdUpload>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              cellPaddingBlockSM: 4,
              cellFontSizeSM: 12,
              headerBg: "#ECEEF0",
              rowHoverBg: "#E9F9EE",
              rowSelectedBg: "#E9F9EE",
            },
          },
          token: {
            colorPrimary: "#30A46C",
          },
        }}
      >
        <Table
          {...props}
          columns={columns}
          dataSource={fileList}
          pagination={false}
          size="small"
          scroll={{ y: 200 }}
        />
      </ConfigProvider>
    </div>
  );
};

export default UploadDocuments;
