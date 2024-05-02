import { useSelector } from "react-redux";
import { CustomFormProps } from "../../interfaces/form";
import { RootState } from "../../redux/store";
import { convertDataSelect } from "../../utils/convertDataSelect";
import { Button, Card, DatePickerProps, Flex, Form } from "antd";
import { validateMessages } from "../../utils/validate";
import { InputText } from "../input/input";
import { SelectGender, SelectMarriage } from "../select/select";
import { DatePickerDialog } from "../datePicker/datePicker";
import "./form.scss";

export const FormEmployeeInformation: React.FC<CustomFormProps> = ({
  setError,
  mode,
  ...props
}) => {
  const datasrc = useSelector((state: RootState) => state.employee.marriage);
  const dataMarriage = datasrc.map((item: any) => {
    return convertDataSelect(item);
  });

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const [form] = Form.useForm();

  const checkForm = () => {
    console.log("form value:>>>", form.getFieldsValue());
  };
  return (
    <>
      <Card
        title={
          <p
            style={{
              width: "100%",
              fontSize: 20,
              fontWeight: 400,
              margin: "10px 0px",
            }}
          >
            Personal Information
          </p>
        }
        extra={
          <p>
            Required<span style={{ color: "red" }}>*</span>
          </p>
        }
        style={{
          width: "100%",
          textAlign: "left",
          fontSize: 20,
        }}
      >
        <div style={{ padding: "0px 20px 20px 20px" }}>
          <Form
            layout="horizontal"
            labelCol={{ span: 8 }}
            size="large"
            style={{ width: "100%" }}
            {...props}
            validateMessages={validateMessages}
          >
            <Flex
              vertical={false}
              justify="space-between"
              gap={100}
              style={{ marginRight: "10px" }}
            >
              <Flex vertical flex={1}>
                {mode === "edit" && (
                  <Form.Item name={"staff_id"} label={<p>NIK</p>}>
                    <InputText
                      disabled
                      style={{ background: "#DCDDDE", height: "47px" }}
                    ></InputText>
                  </Form.Item>
                )}
                {/* <Form.Item>
                  <Button onClick={() => checkForm()}>Check</Button>
                </Form.Item> */}
                <Form.Item
                  name={"name"}
                  label={<p>Name</p>}
                  required
                  rules={[{ required: true }]}
                >
                  <InputText />
                </Form.Item>
                <Form.Item
                  name={"gender"}
                  label={<p>Gender</p>}
                  rules={[{ required: true }]}
                >
                  <SelectGender allowClear />
                </Form.Item>
                <Form.Item name={"mother_name"} label={<p>Mother's name</p>}>
                  <InputText />
                </Form.Item>

                <Form.Item
                  name={"dob"}
                  label={<p>Date of birth</p>}
                  rules={[{ type: "date", required: true }]}
                >
                  <DatePickerDialog
                    name="dob"
                    onChange={onChange}
                    format={"YYYY-MM-DD"}
                  />
                </Form.Item>
                <Form.Item name={"pob"} label={<p>Place of birth</p>}>
                  <InputText />
                </Form.Item>
                <Form.Item
                  name={"ktp_no"}
                  label={<p>KTP No</p>}
                  rules={[{ required: true }]}
                >
                  <InputText />
                </Form.Item>
                <Form.Item name={"nc_id"} label={<p>Tax ID</p>}>
                  <InputText />
                </Form.Item>
                <Form.Item
                  name={"home_address_1"}
                  label={<p>Home Address 1</p>}
                >
                  <InputText />
                </Form.Item>
                <Form.Item
                  name={"home_address_2"}
                  label={<p>Home Address 2</p>}
                >
                  <InputText />
                </Form.Item>
                <Form.Item name={"mobile_no"} label={<p>Mobile No</p>}>
                  <InputText />
                </Form.Item>
                <Form.Item name={"tel_no"} label={<p>Tel</p>}>
                  <InputText />
                </Form.Item>
              </Flex>
              <Flex vertical flex={1}>
                <Form.Item name={"marriage_id"} label={<p>Marriage Status</p>}>
                  <SelectMarriage options={dataMarriage} />
                </Form.Item>
                <Form.Item name={"card_number"} label={<p>Bank Card No</p>}>
                  <InputText />
                </Form.Item>
                <Form.Item name={"bank_account_no"} label={<p>Bank Account</p>}>
                  <InputText />
                </Form.Item>
                <Form.Item name={"bank_name"} label={<p>Bank Name</p>}>
                  <InputText />
                </Form.Item>
                <Form.Item
                  name={"family_card_number"}
                  label={<p>Family Card Number</p>}
                >
                  <InputText />
                </Form.Item>
                <Form.Item
                  name={"safety_insurance_no"}
                  label={<p>Safety Insurance No</p>}
                >
                  <InputText />
                </Form.Item>
                <Form.Item
                  name={"health_insurance_no"}
                  label={<p>Health Insurance No</p>}
                >
                  <InputText />
                </Form.Item>
                <Form.Item
                  name={"education_background"}
                  label={<p>Education Background</p>}
                >
                  <InputText />
                </Form.Item>
                <Form.Item>
                  <p>Emergency Contact Info</p>
                  <div
                    style={{
                      border: "2px solid rgb(223, 227, 230)",
                      borderRadius: 6,
                      padding: "8px 8px 0px 8px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Form.Item
                      name={"emergency_name"}
                      label={<p>Name</p>}
                      labelCol={{ span: 8 }}
                    >
                      <InputText />
                    </Form.Item>

                    <Form.Item
                      name={"emergency_relationship"}
                      label={<p>Relationship</p>}
                      labelCol={{ span: 8 }}
                    >
                      <InputText />
                    </Form.Item>

                    <Form.Item
                      name={"emergency_contract"}
                      label={<p>Contact</p>}
                      labelCol={{ span: 8 }}
                    >
                      <InputText />
                    </Form.Item>
                  </div>
                </Form.Item>
              </Flex>
            </Flex>
          </Form>
        </div>
      </Card>
    </>
  );
};
