import * as yup from "yup";
import moment from "moment/moment";

export const userInfoSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  middleName: yup.string(),
  lastName: yup.string().required("Last name is required"),
  birthDate: yup
    .string()
    .required("Birth Date is required")
    .test("DOB", "Invalid age must be 18 years old and above", (value) => {
      return moment().diff(moment(value), "years") >= 18;
    }),
  applicationType: yup.string().required("Application is required"),
  address: yup.string().required("Address is required"),
  civilStatus: yup.string().required("Civil Status is required"),
  gender: yup.string().required("Gender is required"),
});

export const applicationSchema = yup.object().shape({
  typeOfVehicle: yup.string().required("Type of Vehicle is required!"),
  plateNumber: yup.string().required("Plate number is required!"),
  companyName: yup.string(),
  contactNo: yup.string(),
  position: yup.string(),
  address: yup.string(),
});
