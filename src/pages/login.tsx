import { Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { LoginForm } from "../components/forms";

import GatePassSection from "../components/layouts/gatepass";

const Login = () => {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <GatePassSection />
      <LoginForm />
    </Grid>
  );
};

export default Login;
