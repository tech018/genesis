import { Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import GatePassSection from "../../component/layouts/gatePass";
import RegisterForm from "../../component/forms/registerForm";
const Register = () => {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <GatePassSection />
      <RegisterForm />
    </Grid>
  );
};

export default Register;
