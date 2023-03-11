import * as yup from "yup";
import moment from "moment/moment";

export const applicationSchema = yup.object().shape({
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

// requiredString(msg, typeMsg).test("is-valid", (value) => {
//   let isValid = true;
//   if (value) {
//     const bday = getBirthdateMinMax(relation);
//     isValid = moment(value).isBetween(
//       moment(bday.min),
//       moment(bday.max),
//       "days",
//       "[]"
//     );
//   }
//   return isValid;
// });
