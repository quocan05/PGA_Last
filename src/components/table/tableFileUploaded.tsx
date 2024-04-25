import React from "react";
import { Button, ConfigProvider, Table } from "antd";
import type { TableColumnsType } from "antd";
import { DataTypeColumnFile } from "../../interfaces/value";
import { DeleteOutlined } from "@ant-design/icons";
import { CustomTableProps } from "../../interfaces/table";

const TableFiles: React.FC<CustomTableProps> = ({
  listFile,
  setFiles,
  ...props
}) => {
  const columns: TableColumnsType<DataTypeColumnFile> = [
    {
      title: "No",
      width: "5%",
      dataIndex: "no",
      fixed: "left",
    },
    {
      title: "Document name",
      width: "30%",
      dataIndex: "name",
    },
    {
      title: "Create At",
      width: "30%",
      dataIndex: "createdAt",
    },

    {
      title: "Action",
      fixed: "right",
      width: "30%",
      render: (_, record) => (
        <Button
          danger
          icon={<DeleteOutlined />}
          size="small"
          style={{ border: "none", background: "#FFEFEF" }}
          onClick={() => handleDeleteFile(record.key)}
        ></Button>
      ),
    },
  ];

  const handleDeleteFile = (record: React.Key) => {
    console.log("delete>>", record);
    const newListFile = listFile.filter((item) => item.key !== record);
    setFiles(newListFile);
  };

  return (
    <div style={{ width: "100%", padding: "20px" }}>
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
          size="small"
          columns={columns}
          pagination={false}
          scroll={{ y: 200 }}
          dataSource={listFile}
        />
      </ConfigProvider>
    </div>
  );
};
export default TableFiles;
