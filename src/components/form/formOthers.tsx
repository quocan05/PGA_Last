import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { CustomFormOthersProps } from "../../interfaces/form";
import { convertDataSelect } from "../../utils/convertDataSelect";
import { Card, Form } from "antd";
import {
  SelectBenefit,
  SelectGrade,
  SelectHRMUserAccount,
} from "../select/select";
import { TextAreaRemark } from "../textarea/textarea";
import UploadDocuments from "../../containers/Upload/upload";
import "./form.scss";

export const FormOthers: React.FC<CustomFormOthersProps> = ({
  setFiles,
  setIsModified,
  setDeletedIds,
  idEmp,
  ...props
}) => {
  const datasrcBenefit = useSelector(
    (state: RootState) => state.employee.benefits
  );
  const datasrcGrade = useSelector((state: RootState) => state.employee.grade);

  const dataBenefit = datasrcBenefit.map((item: any) => {
    return convertDataSelect(item);
  });
  const dataGrade = datasrcGrade.map((item: any) => {
    return convertDataSelect(item);
  });

  return (
    <>
      <Card title={<p>Others</p>}>
        <div className="wrapper-card-body" style={{ width: "100%" }}>
          <Form
            labelCol={{ span: 8 }}
            {...props}
            initialValues={{
              grade_id: null,
              benefits: null,
              remark: null,
              users: [],
            }}
          >
            <div style={{ padding: "0px 20px 20px 20px", width: "50%" }}>
              <Form.Item name={"grade_id"} label={<p>Grade</p>}>
                <SelectGrade options={dataGrade} />
              </Form.Item>
              <Form.Item name={"benefits"} label={<p>Benefit</p>}>
                <SelectBenefit options={dataBenefit} />
              </Form.Item>
              <Form.Item name={"remark"} label={<p>Remark</p>}>
                <TextAreaRemark />
              </Form.Item>
              <Form.Item name={"users"} label={<p>HRM User Account</p>}>
                <SelectHRMUserAccount />
              </Form.Item>
            </div>
            <div
              style={{
                border: "1px solid rgb(223, 227, 230)",
                borderRadius: "6px",
              }}
            >
              <div
                style={{
                  height: "310px",
                }}
              >
                <div style={{ padding: "20px" }}>
                  <UploadDocuments
                    idEmp={idEmp}
                    setFiles={setFiles}
                    listFile={[]}
                    setIsModified={setIsModified}
                    setDeletedIds={setDeletedIds}
                  />
                </div>
              </div>
            </div>
          </Form>
        </div>
      </Card>
    </>
  );
};
