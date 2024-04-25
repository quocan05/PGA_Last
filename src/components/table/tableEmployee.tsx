import "./table.scss";
import React from "react";
import { ConfigProvider, Table } from "antd";
import type { TableProps } from "antd";

import "./table.scss";
import { columnsInfoEmployee } from "../../constants/value";

const TableEmployee: React.FC<TableProps> = (props) => {
  return (
    <div className="wrapper-table">
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
          columns={columnsInfoEmployee}
          scroll={{ x: 2000, y: 520 }}
          size="small"
          rowClassName={"row-employee"}
        />
      </ConfigProvider>
    </div>
  );
};

export default TableEmployee;
