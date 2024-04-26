import {
  Card,
  ConfigProvider,
  Divider,
  Pagination,
  PaginationProps,
  Spin,
} from "antd";
import TableEmployee from "../../components/table/tableEmployee";
import { HeaderManage } from "../Headers/headers";
import {
  ButtonAddNewEmployee,
  ButtonDeleteEmployee,
} from "../../components/button/button";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { getLocalStorage } from "../../services/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import {
  fetchEmployeeByID,
  fetchEmployeesByPage,
  fetchEmployeesByPageAndSearch,
} from "../../redux/reducers/employeeReducer";
import { convertEmployeeData } from "../../utils/convertData";
import { deleteMultipleEmployee } from "../../services/Employee/employee";
import { IMultipleIds } from "../../interfaces/value";
import { ModalConfirm } from "../../components/modal/modal";
import "./ManageEmployee.scss";
import { useSearchParams } from "react-router-dom";
import { setModeAdd, setModeEdit } from "../../redux/reducers/modeReducer";
import { OpenAIFilled } from "@ant-design/icons";
import { useDebounce } from "../../hooks/useDebounce";

export const ManageEmployee = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [canDelete, setCanDelete] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  let searchDebounce = useDebounce(searchParams.get("search"), 600);
  let page = searchParams.get("page");
  const loading = useSelector((state: RootState) => state.employee.isLoading);
  const datasrc = useSelector((state: RootState) =>
    state.employee.listData.map((i) => {
      return convertEmployeeData(i);
    })
  );

  const total = useSelector((state: RootState) => state.employee.total);
  const pageSize = useSelector((state: RootState) => state.employee.pageSize);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
    if (newSelectedRowKeys.length > 0) {
      setCanDelete(true);
    } else {
      setCanDelete(false);
    }
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleDeleteEmployee = async () => {
    const multiple: IMultipleIds = { record_ids: selectedRowKeys };
    await deleteMultipleEmployee(multiple);
    setCanDelete(false);
    setOpen(false);
    dispatch(fetchEmployeesByPage(currentPage));
  };
  const handleAddNew = async () => {
    dispatch(setModeAdd());
    navigate("/employee/create-or-update");
  };

  const handleClickRow = (key: number) => {
    let newSelectedRowKeys;
    if (selectedRowKeys.includes(key)) {
      // key da co trong rowkeys
      newSelectedRowKeys = selectedRowKeys.filter((rowKey) => rowKey !== key); // filter
    } else {
      newSelectedRowKeys = [...selectedRowKeys, key]; // add
    }
    setSelectedRowKeys(newSelectedRowKeys); // setrowkeys
    setCanDelete(newSelectedRowKeys.length > 0);
  };

  const handleDoubleClickRow = (key: string) => {
    dispatch(setModeEdit());
    dispatch(fetchEmployeeByID(key));
    navigate(`/employee/create-or-update/${key}`);
  };

  const handleChangePage: PaginationProps["onChange"] = (pageNumber) => {
    setSearchParams({
      search: searchParams.get("search") || "",
      page: pageNumber.toString(),
    });
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (getLocalStorage("token")) {
      dispatch(
        fetchEmployeesByPageAndSearch({
          page: page || "1", // Cập nhật currentPage từ URL
          search: searchDebounce || "",
        })
      );
      setCurrentPage(Number(searchParams.get("page")) || 1); // Cập nhật currentPage từ URL
    } else {
      navigate("auth/login");
    }
  }, [searchDebounce, page]); // Thêm searchParams vào dependency để theo dõi thay đổi trong URL\

  return (
    <>
      <HeaderManage currentPage={currentPage} />
      <br />
      <Card
        title={
          <div
            style={{
              width: "100%",
              display: "flex",
              gap: 20,
              justifyContent: "flex-end",
            }}
          >
            <ButtonAddNewEmployee onClick={() => handleAddNew()} />
            <ButtonDeleteEmployee
              disabled={!canDelete}
              onClick={() => setOpen(true)}
            />
          </div>
        }
        bordered
      >
        <Spin
          tip="Loading..."
          spinning={loading}
          indicator={<OpenAIFilled spin style={{ fontSize: 58 }} />}
        >
          <div className="wrapper-table" style={{ height: "550px" }}>
            <TableEmployee
              dataSource={datasrc}
              rowSelection={rowSelection}
              pagination={false}
              onRow={(record) => ({
                onClick: () => {
                  handleClickRow(record.key);
                },
                onDoubleClick: () => {
                  handleDoubleClickRow(record.key);
                },
              })}
            />
          </div>
        </Spin>

        <ConfigProvider
          theme={{
            components: {
              Pagination: {
                itemSize: 38,
                itemActiveBg: "#E6E8EB",
                itemBg: "#F1F3F5",
              },
            },
            token: {
              colorPrimary: "#11181c",
              colorBorder: "transparent",
              colorPrimaryBorder: "transparent",
            },
          }}
        >
          <Divider />
          <Pagination
            size="default"
            total={total}
            defaultCurrent={1}
            showSizeChanger={false}
            showLessItems
            onChange={handleChangePage}
            current={Number(searchParams.get("page")) || 1}
            pageSize={pageSize}
          />
        </ConfigProvider>
      </Card>
      <ModalConfirm
        message="Delete"
        open={open}
        onOk={() => handleDeleteEmployee()}
        onCancel={() => setOpen(false)}
        destroyOnClose
      >
        <p>Are you sure want to delete?</p>
      </ModalConfirm>
    </>
  );
};
