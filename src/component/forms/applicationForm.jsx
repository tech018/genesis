import React, { useImperativeHandle } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { applicationSchema } from "../../schema/applications";
import { updateApplication } from "../../store/application";

const ApplicationForm = ({ reference, setActiveStep, activeStep }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(applicationSchema),
  });

  const { application } = useSelector((state) => ({
    application: state.application,
  }));

  const { userSettings } = application;

  function isObjEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  const onSubmit = (data) => {
    if (isObjEmpty(errors)) {
      setActiveStep(activeStep + 1);
    }
    dispatch(updateApplication({ ...data }));
  };

  useImperativeHandle(reference, () => ({
    submitForm() {
      handleSubmit(onSubmit)();
    },
  }));

  return (
    <Box component="form" noValidate sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            {...register("typeOfVehicle")}
            error={errors.typeOfVehicle ? true : false}
            helperText={
              errors.typeOfVehicle ? `${errors.typeOfVehicle?.message}` : ``
            }
            fullWidth
            label="Type of Vehicle"
            type="text"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            {...register("plateNumber")}
            error={errors.plateNumber ? true : false}
            helperText={
              errors.plateNumber ? `${errors.plateNumber?.message}` : ``
            }
            fullWidth
            label="Plate Number"
            type="text"
          />
        </Grid>
      </Grid>
      <Typography sx={{ mt: 2, mb: 2, paddingLeft: 2 }} variant="subtitle1">
        For Employed Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            disabled={userSettings.applicationType !== "employee"}
            {...register("companyName")}
            error={errors.companyName ? true : false}
            helperText={
              errors.companyName ? `${errors.companyName?.message}` : ``
            }
            fullWidth
            label="Name of Company/Office"
            type="text"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            disabled={userSettings.applicationType !== "employee"}
            {...register("contactNo")}
            error={errors.contactNo ? true : false}
            helperText={errors.contactNo ? `${errors.contactNo?.message}` : ``}
            fullWidth
            label="Tel No./Cellphone No."
            type="text"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            disabled={userSettings.applicationType !== "employee"}
            {...register("position")}
            error={errors.position ? true : false}
            helperText={errors.position ? `${errors.position?.message}` : ``}
            fullWidth
            label="Position/Designation"
            type="text"
          />
        </Grid>
        <Grid item xs={12}>
          {" "}
          <TextField
            disabled={userSettings.applicationType !== "employee"}
            {...register("address")}
            error={errors.address ? true : false}
            helperText={errors.address ? `${errors.address?.message}` : ``}
            label="Address"
            multiline
            fullWidth
            rows={4}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ApplicationForm;
