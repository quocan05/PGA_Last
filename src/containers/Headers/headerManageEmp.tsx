import { useEffect, useState } from "react";
import { HeaderCustomProps } from "../../interfaces/layout";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { useSearchParams } from "react-router-dom";
import { fetchEmployeesByPageAndSearch } from "../../redux/reducers/employeeReducer";
import { Breadcrumb, Input, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export const HeaderManage: React.FC<HeaderCustomProps> = ({ currentPage }) => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const [searchParams] = useSearchParams();
    const params = new URLSearchParams(searchParams);
  
    const handleSearch = (e: any) => {
      const newSearchKeyword = e.target.value;
      setSearchKeyword(newSearchKeyword);
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