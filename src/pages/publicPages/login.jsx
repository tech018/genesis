import { Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { LoginForm } from "../../component/forms";

import GatePassSection from "../../component/layouts/gatePass";

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
