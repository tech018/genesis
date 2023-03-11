import { Grid, Typography, Box } from "@mui/material";

const GatePassSection = () => {
  return (
    <Grid
      item
      xs={false}
      sm={4}
      md={8}
      sx={{
        backgroundImage: "url('/images/frontpage.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundColor: (t) =>
          t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(240, 248, 255, 0.449)",
        }}
      >
        <Typography
          sx={{
            padding: "150px 3px 3px 3px",
            fontSize: 80,
            fontWeight: 700,
            WebkitTextStroke: "2px black",
            color: "#4caf50",
            lineHeight: 1,
          }}
          variant="body2"
        >
          Online Gatepass Application
        </Typography>
      </Box>
    </Grid>
  );
};

export default GatePassSection;
