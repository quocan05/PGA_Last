// import {
//   Button,
//   Card,
//   DatePickerProps,
//   Flex,
//   Form,
//   Typography,
// } from "antd";
// import "./form.scss";
// import { CustomFormOthersProps, CustomFormProps } from "../../interfaces/form";
// import {
//   SelectBenefit,
//   SelectDepartMent,
//   SelectFactory,
//   SelectGender,
//   SelectGrade,
//   SelectHRMUserAccount,
//   SelectMarriage,
//   SelectPosiiton,
//   SelectTypeEmployee,
// } from "../select/select";
// import { InputText, InputTypeNumber, InputTypePassword } from "../input/input";
// import { DatePickerDialog } from "../datePicker/datePicker";
// import { CheckboxEmployment } from "../checkbox/checkbox";
// import { TextAreaRemark } from "../textarea/textarea";
// import { useEffect, useState } from "react";
// import { ICompanyItem } from "../../interfaces/value";
// import { useNavigate } from "react-router";
// import { getCompany } from "../../services/Employee/employee";
// import { useSelector } from "react-redux";
// import { RootState } from "../../redux/store";
// import { convertDataSelect } from "../../utils/convertDataSelect";

// import UploadDocuments from "../../containers/Upload/upload";

// const validateMessages = {
//   required: "Please input ${label} !",
//   types: {
//     email: "${label} is not a valid email!",
//     number: "${label} is not a valid number!",
//     date: "Choose your birthdate!",
//   },
//   number: {
//     range: "${label} must be between ${min} and ${max}",
//   },
// };

// const validateNumber = (
//   rule: any,
//   value: number,
//   callback: (arg0: string | undefined) => void
// ) => {
//   if (value < 0) {
//     callback("Please input value min is 0");
//   }
// };

// export const FormLogin: React.FC<CustomFormProps> = (props) => {
//   const navigate = useNavigate();
//   const [company, setCompany] = useState<ICompanyItem[]>([]);
//   const getListCompany = async () => {
//     const res = await getCompany();
//     if (res) {
//       const list = res.data.map((item: any) => {
//         return { value: item.id, label: item.name };
//       });
//       setCompany(list);
//     }
//   };

//   useEffect(() => {
//     getListCompany();
//   }, []);
//   return (
//     <Form {...props} size="large" layout="vertical">
//       <Form.Item
//         label={<p>Username</p>}
//         name="username"
//         rules={[
//           { required: true, message: "Please input your Username!" },

//           { max: 30, message: "Username must be maximum 30 characters." },
//         ]}
//       >
//         <InputText />
//       </Form.Item>

//       <Form.Item
//         label={<p>Password</p>}
//         name="password"
//         rules={[{ required: true, message: "Please input your Password!" }]}
//       >
//         <InputText type="password" />
//       </Form.Item>
//       <Form.Item
//         label={<p>Factory</p>}
//         name="company_id"
//         rules={[{ required: true, message: "Please choose a factory!" }]}
//       >
//         <SelectFactory options={company} />
//       </Form.Item>

//       <Form.Item>
//         <Button
//           type="primary"
//           htmlType="submit"
//           className="login-form-button"
//           style={{ width: "100%" }}
//         >
//           Log in
//         </Button>

//         <div style={{ textAlign: "center", marginTop: "24px" }}>
//           <a
//             onClick={() => navigate("/auth/forgot-password")}
//             style={{
//               fontSize: 14,
//               fontWeight: "500",
//               textAlign: "center",
//             }}
//           >
//             {" "}
//             Forgot your password?{" "}
//           </a>
//         </div>
//       </Form.Item>
//     </Form>
//   );
// };

// export const FormForgotPassword: React.FC<CustomFormProps> = (props) => {
//   const navigate = useNavigate();
//   return (
//     <Form
//       {...props}
//       size="large"
//       layout="vertical"
//       validateMessages={validateMessages}
//     >
//       <span>Your work email</span>
//       <Form.Item name="email">
//         <InputText type="email" />
//       </Form.Item>

//       <Form.Item>
//         <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
//           Confirm & Send OTP
//         </Button>
//       </Form.Item>
//       <Form.Item>
//         <div style={{ width: "100%", textAlign: "center" }}>
//           <a onClick={() => navigate("/auth/login")}>Back to Sign In</a>
//         </div>
//       </Form.Item>
//     </Form>
//   );
// };

// export const FormButtonSubmit: React.FC<CustomFormProps> = ({
//   isOk,
//   mode,
//   ...props
// }) => {
//   return (
//     <Form {...props}>
//       <Form.Item>
//         <Button htmlType="submit">{mode}</Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export const FormEmployeeInformation: React.FC<CustomFormProps> = ({
//   setError,
//   mode,
//   ...props
// }) => {
//   const datasrc = useSelector((state: RootState) => state.employee.marriage);
//   const dataMarriage = datasrc.map((item: any) => {
//     return convertDataSelect(item);
//   });

//   const onChange: DatePickerProps["onChange"] = (date, dateString) => {
//     console.log(date, dateString);
//   };
//   return (
//     <>
//       <Card
//         title={
//           <p
//             style={{
//               width: "100%",
//               fontSize: 20,
//               fontWeight: 400,
//               margin: "10px 0px",
//             }}
//           >
//             Personal Information
//           </p>
//         }
//         extra={
//           <p>
//             Required<span style={{ color: "red" }}>*</span>
//           </p>
//         }
//         style={{
//           width: "100%",
//           textAlign: "left",
//           fontSize: 20,
//         }}
//       >
//         <div style={{ padding: "0px 20px 20px 20px" }}>
//           <Form
//             layout="horizontal"
//             labelCol={{ span: 8 }}
//             size="large"
//             style={{ width: "100%" }}
//             {...props}
//             validateMessages={validateMessages}
//           >
//             <Flex
//               vertical={false}
//               justify="space-between"
//               gap={100}
//               style={{ marginRight: "10px" }}
//             >
//               <Flex vertical flex={1}>
//                 {mode === "edit" && (
//                   <Form.Item name={"staff_id"} label={<p>NIK</p>}>
//                     <InputText
//                       disabled
//                       style={{ background: "#DCDDDE", height: "47px" }}
//                     ></InputText>
//                   </Form.Item>
//                 )}
//                 <Form.Item
//                   name={"name"}
//                   label={<p>Name</p>}
//                   required
//                   rules={[{ required: true }]}
//                 >
//                   <InputText />
//                 </Form.Item>
//                 <Form.Item
//                   name={"gender"}
//                   label={<p>Gender</p>}
//                   rules={[{ required: true }]}
//                 >
//                   <SelectGender allowClear />
//                 </Form.Item>
//                 <Form.Item name={"mother_name"} label={<p>Mother's name</p>}>
//                   <InputText />
//                 </Form.Item>

//                 <Form.Item
//                   name={"dob"}
//                   label={<p>Date of birth</p>}
//                   rules={[{ type: "date", required: true }]}
//                 >
//                   <DatePickerDialog
//                     name="dob"
//                     onChange={onChange}
//                     format={"YYYY-MM-DD"}
//                   />
//                 </Form.Item>
//                 <Form.Item name={"pob"} label={<p>Place of birth</p>}>
//                   <InputText />
//                 </Form.Item>
//                 <Form.Item
//                   name={"ktp_no"}
//                   label={<p>KTP No</p>}
//                   rules={[{ required: true }]}
//                 >
//                   <InputText />
//                 </Form.Item>
//                 <Form.Item name={"nc_id"} label={<p>Tax ID</p>}>
//                   <InputText />
//                 </Form.Item>
//                 <Form.Item
//                   name={"home_address_1"}
//                   label={<p>Home Address 1</p>}
//                 >
//                   <InputText />
//                 </Form.Item>
//                 <Form.Item
//                   name={"home_address_2"}
//                   label={<p>Home Address 2</p>}
//                 >
//                   <InputText />
//                 </Form.Item>
//                 <Form.Item name={"mobile_no"} label={<p>Mobile No</p>}>
//                   <InputText />
//                 </Form.Item>
//                 <Form.Item name={"tel_no"} label={<p>Tel</p>}>
//                   <InputText />
//                 </Form.Item>
//               </Flex>
//               <Flex vertical flex={1}>
//                 <Form.Item name={"marriage_id"} label={<p>Marriage Status</p>}>
//                   <SelectMarriage options={dataMarriage} />
//                 </Form.Item>
//                 <Form.Item name={"card_number"} label={<p>Bank Card No</p>}>
//                   <InputText />
//                 </Form.Item>
//                 <Form.Item name={"bank_account_no"} label={<p>Bank Account</p>}>
//                   <InputText />
//                 </Form.Item>
//                 <Form.Item name={"bank_name"} label={<p>Bank Name</p>}>
//                   <InputText />
//                 </Form.Item>
//                 <Form.Item
//                   name={"family_card_number"}
//                   label={<p>Family Card Number</p>}
//                 >
//                   <InputText />
//                 </Form.Item>
//                 <Form.Item
//                   name={"safety_insurance_no"}
//                   label={<p>Safety Insurance No</p>}
//                 >
//                   <InputText />
//                 </Form.Item>
//                 <Form.Item
//                   name={"health_insurance_no"}
//                   label={<p>Health Insurance No</p>}
//                 >
//                   <InputText />
//                 </Form.Item>
//                 <Form.Item
//                   name={"education_background"}
//                   label={<p>Education Background</p>}
//                 >
//                   <InputText />
//                 </Form.Item>
//                 <Form.Item>
//                   <p>Emergency Contact Info</p>
//                   <div
//                     style={{
//                       border: "2px solid rgb(223, 227, 230)",
//                       borderRadius: 6,
//                       padding: "8px 8px 0px 8px",
//                       display: "flex",
//                       flexDirection: "column",
//                       justifyContent: "center",
//                     }}
//                   >
//                     {/* <Col span={9}>
//                     <Form.Item label={<p>Name</p>}>
//                       <InputText placeholder="Name" />
//                     </Form.Item>
//                     <Form.Item label={<p>Relationship</p>}>
//                       <InputText placeholder="Relationship" />
//                     </Form.Item>
//                     <Form.Item label={<p>Contact</p>}>
//                       <InputText placeholder="Contact" />
//                     </Form.Item>
//                   </Col> */}

//                     <Form.Item
//                       name={"emergency_name"}
//                       label={<p>Name</p>}
//                       labelCol={{ span: 8 }}
//                     >
//                       <InputText />
//                     </Form.Item>

//                     <Form.Item
//                       name={"emergency_relationship"}
//                       label={<p>Relationship</p>}
//                       labelCol={{ span: 8 }}
//                     >
//                       <InputText />
//                     </Form.Item>

//                     <Form.Item
//                       name={"emergency_contract"}
//                       label={<p>Contact</p>}
//                       labelCol={{ span: 8 }}
//                     >
//                       <InputText />
//                     </Form.Item>
//                   </div>
//                 </Form.Item>
//               </Flex>
//             </Flex>
//           </Form>
//         </div>
//       </Card>
//     </>
//   );
// };

// export const FormContractInformation: React.FC<CustomFormProps> = ({
//   mode,
//   ...props
// }) => {
//   const [contract_start_date, setContract_start_date] = useState<any>();
//   const onChange: DatePickerProps["onChange"] = (date, dateString) => {
//     console.log(date, dateString);
//     setContract_start_date(dateString);
//   };
//   return (
//     <>
//       <Card title={<p>Contract information</p>}>
//         <div style={{ padding: "0px 20px 20px 20px" }}>
//           <Form
//             layout="horizontal"
//             labelCol={{ span: 8 }}
//             size="large"
//             style={{ width: "50%" }}
//             {...props}
//             validateMessages={validateMessages}
//           >
//             <Form.Item
//               name={"contract_start_date"}
//               rules={[{ required: true, message: "" }]}
//               label={<p>Date start</p>}
//             >
//               <DatePickerDialog
//                 value={contract_start_date}
//                 onChange={onChange}
//                 format={"YYYY-MM-DD"}
//               />
//             </Form.Item>
//             <Form.Item
//               name={"type"}
//               rules={[{ required: true, message: "Please choose type" }]}
//               label={<p>Employee Type</p>}
//             >
//               <SelectTypeEmployee
//                 allowClear
//                 disabled={mode === "edit" ? true : false}
//               />
//             </Form.Item>
//           </Form>
//         </div>
//       </Card>
//     </>
//   );
// };

// export const FormEmploymentDetails: React.FC<CustomFormProps> = (props) => {
//   const dataDepartment = useSelector(
//     (state: RootState) => state.employee.department
//   );
//   const dataPosition = useSelector(
//     (state: RootState) => state.employee.position
//   );

//   const dataConvertDepartment = dataDepartment
//     ? dataDepartment.map((item: any) => {
//         return convertDataSelect(item);
//       })
//     : [];

//   const dataConvertPosition = dataPosition
//     ? dataPosition.map((item: any) => {
//         return convertDataSelect(item);
//       })
//     : [];

//   return (
//     <>
//       <Card title={<p>Employment Details</p>}>
//         <div style={{ padding: "0px 20px 20px 20px" }}>
//           <Form
//             {...props}
//             labelCol={{ span: 6 }}
//             style={{ width: "50%" }}
//             initialValues={{
//               department_id: null,
//               position_id: null,
//               hidden_on_payroll: false,
//               entitle_ot: false,
//               meal_allowance_paid: false,
//             }}
//           >
//             <Form.Item name={"department_id"} label={<p>Department</p>}>
//               <SelectDepartMent
//                 placeholder="Choose department"
//                 options={dataConvertDepartment}
//               />
//             </Form.Item>
//             <Form.Item name={"position_id"} label={<p>Position</p>}>
//               <SelectPosiiton
//                 placeholder="Choose position"
//                 options={dataConvertPosition}
//               />
//             </Form.Item>
//             <Form.Item valuePropName="checked" name={"hidden_on_payroll"}>
//               <CheckboxEmployment name="hidden_on_payroll">
//                 <p>Hidden on payroll</p>
//               </CheckboxEmployment>
//             </Form.Item>
//             <Form.Item valuePropName="checked" name={"entitle_ot"}>
//               <CheckboxEmployment
//                 name={"entitle_ot"}
//                 //onChange={() => setEntitleOTChecked(!entitleOTChecked)}
//               >
//                 <p>Entitled OT</p>
//               </CheckboxEmployment>
//             </Form.Item>
//             <Form.Item valuePropName="checked" name={"meal_allowance_paid"}>
//               <CheckboxEmployment name={"meal_allowance_paid"}>
//                 <p>Meal Allowance Paid</p>
//               </CheckboxEmployment>
//             </Form.Item>
//           </Form>
//         </div>
//       </Card>
//     </>
//   );
// };
// export const FormSalaryWages: React.FC<CustomFormProps> = (props) => {
//   useEffect(() => {
//     console.log("render4");
//   }, []);
//   return (
//     <>
//       <Card title={<p>Salary & Wages</p>}>
//         <div style={{ padding: "0px 20px 20px 20px" }}>
//           <Form labelCol={{ span: 10 }} {...props} style={{ width: "60%" }}>
//             <Form.Item
//               label={<p>Basic Salary</p>}
//               name="basic_salary"
//               rules={[
//                 {
//                   //min: 0,
//                   validator: validateNumber,
//                 },
//               ]}
//             >
//               <InputTypeNumber />
//             </Form.Item>
//             <Form.Item
//               label={<p>Basic Salary (Audit)</p>}
//               name="audit_salary"
//               rules={[
//                 {
//                   //min: 0,
//                   validator: validateNumber,
//                 },
//               ]}
//             >
//               <InputTypeNumber />
//             </Form.Item>
//             <Form.Item
//               label={<p>Safety Insurance Amount</p>}
//               name="safety_insurance"
//               rules={[
//                 {
//                   //min: 0,
//                   validator: validateNumber,
//                 },
//               ]}
//             >
//               <InputTypeNumber />
//             </Form.Item>
//             <Form.Item
//               label={<p>Healthy Insurance Amount</p>}
//               name="health_insurance"
//               rules={[
//                 {
//                   //min: 0,
//                   validator: validateNumber,
//                 },
//               ]}
//             >
//               <InputTypeNumber />
//             </Form.Item>
//             <Form.Item
//               label={<p>Safety Insurance Amount (Audit)</p>}
//               name="safety_insurance_audit"
//               rules={[
//                 {
//                   //min: 0,
//                   validator: validateNumber,
//                 },
//               ]}
//             >
//               <InputTypeNumber />
//             </Form.Item>
//             <Form.Item
//               label={<p>Healthy Insurance Amount (Audit)</p>}
//               name="health_insurance_audit"
//               rules={[
//                 {
//                   //min: 0,
//                   validator: validateNumber,
//                 },
//               ]}
//             >
//               <InputTypeNumber />
//             </Form.Item>
//             <Form.Item
//               label={<p>Meal Allowance</p>}
//               name="meal_allowance"
//               rules={[
//                 {
//                   //min: 0,
//                   validator: validateNumber,
//                 },
//               ]}
//             >
//               <InputTypeNumber />
//             </Form.Item>
//           </Form>
//           <Typography>
//             <b>Note:</b> If leave empty, these fields will be calculated
//             automatically by system
//           </Typography>
//         </div>
//       </Card>
//     </>
//   );
// };
// export const FormOthers: React.FC<CustomFormOthersProps> = ({
//   setFiles,
//   setIsModified,
//   setDeletedIds,
//   idEmp,
//   ...props
// }) => {
//   const datasrcBenefit = useSelector(
//     (state: RootState) => state.employee.benefits
//   );
//   const datasrcGrade = useSelector((state: RootState) => state.employee.grade);

//   const dataBenefit = datasrcBenefit.map((item: any) => {
//     return convertDataSelect(item);
//   });
//   const dataGrade = datasrcGrade.map((item: any) => {
//     return convertDataSelect(item);
//   });

//   return (
//     <>
//       <Card title={<p>Others</p>}>
//         <div className="wrapper-card-body" style={{ width: "100%" }}>
//           <Form
//             labelCol={{ span: 8 }}
//             {...props}
//             initialValues={{
//               grade_id: null,
//               benefits: null,
//               remark: null,
//               users: [],
//             }}
//           >
//             <div style={{ padding: "0px 20px 20px 20px", width: "50%" }}>
//               <Form.Item name={"grade_id"} label={<p>Grade</p>}>
//                 <SelectGrade options={dataGrade} />
//               </Form.Item>
//               <Form.Item name={"benefits"} label={<p>Benefit</p>}>
//                 <SelectBenefit options={dataBenefit} />
//               </Form.Item>
//               <Form.Item name={"remark"} label={<p>Remark</p>}>
//                 <TextAreaRemark />
//               </Form.Item>
//               <Form.Item name={"users"} label={<p>HRM User Account</p>}>
//                 <SelectHRMUserAccount />
//               </Form.Item>
//             </div>
//             <div
//               style={{
//                 border: "1px solid rgb(223, 227, 230)",
//                 borderRadius: "6px",
//               }}
//             >
//               <div
//                 style={{
//                   height: "310px",
//                 }}
//               >
//                 <div style={{ padding: "20px" }}>
//                   <UploadDocuments
//                     idEmp={idEmp}
//                     setFiles={setFiles}
//                     listFile={[]}
//                     setIsModified={setIsModified}
//                     setDeletedIds={setDeletedIds}
//                   />
//                 </div>
//               </div>
//             </div>
//           </Form>
//         </div>
//       </Card>
//     </>
//   );
// };

// export const FormChangePassword: React.FC<CustomFormProps> = (props) => {
//   return (
//     <>
//       <div style={{ width: "24%" }}>
//         <Form {...props} layout="vertical">
//           <Form.Item
//             label={<p>New Password</p>}
//             name="password"
//             rules={[{ required: true }]}
//           >
//             <InputTypePassword />
//           </Form.Item>
//           <Form.Item
//             label={<p>Confirm Password</p>}
//             name="password_confirmation"
//             dependencies={["password"]}
//             rules={[
//               {
//                 required: true,
//               },
//               ({ getFieldValue }) => ({
//                 validator(_, value) {
//                   if (!value || getFieldValue("password") === value) {
//                     return Promise.resolve();
//                   }
//                   return Promise.reject(
//                     new Error("The passwords do not match")
//                   );
//                 },
//               }),
//             ]}
//           >
//             <InputTypePassword />
//           </Form.Item>
//           <Form.Item>
//             <Button
//               type="primary"
//               size="large"
//               htmlType="submit"
//               style={{ width: "100%", marginTop: "40px" }}
//             >
//               <span>Confirm</span>
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>
//     </>
//   );
// };

// export const FormResetPassword: React.FC<CustomFormProps> = (props) => {
//   return (
//     <>
//       <Form {...props} layout="vertical">
//         <Form.Item
//           name={"password"}
//           label={<p>New password</p>}
//           rules={[{ required: true, message: "Please enter password" }]}
//         >
//           <InputTypePassword />
//         </Form.Item>
//         <Form.Item
//           name={"password_confirmation"}
//           label={<p>Confirm password</p>}
//           rules={[
//             {
//               required: true,
//             },
//             ({ getFieldValue }) => ({
//               validator(_, value) {
//                 if (!value || getFieldValue("password") === value) {
//                   return Promise.resolve();
//                 }
//                 return Promise.reject(new Error("The passwords do not match"));
//               },
//             }),
//           ]}
//         >
//           <InputTypePassword />
//         </Form.Item>
//         <Form.Item>
//           <Button
//             type="primary"
//             size="large"
//             htmlType="submit"
//             style={{ width: "100%", marginTop: "40px" }}
//           >
//             <span>Confirm</span>
//           </Button>
//         </Form.Item>
//       </Form>
//     </>
//   );
// };
