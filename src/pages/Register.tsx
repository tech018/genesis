import { Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import GatePassSection from "../components/layouts/gatepass";
import { RegisterForm } from "../components/forms";
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
