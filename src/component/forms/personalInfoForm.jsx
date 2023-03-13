import React, { useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Grid,
  TextField,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { applicationType, civilStatus, gender } from "../../constants/forms";
import { userInfoSchema } from "../../schema/applications";
import FormHelperText from "@mui/material/FormHelperText/FormHelperText";
import { updateUserSettings } from "../../store/application";
import { useDispatch } from "react-redux";

const PersonalInfoForm = ({ reference, setActiveStep, activeStep }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userInfoSchema),
  });

  function isObjEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  const onSubmit = (data) => {
    if (isObjEmpty(errors)) {
      setActiveStep(activeStep + 1);
    }
    dispatch(updateUserSettings({ ...data }));
  };

  useImperativeHandle(reference, () => ({
    submitForm() {
      handleSubmit(onSubmit)();
    },
  }));

  return (
    <Box component="form" noValidate sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            {...register("firstName")}
            error={errors.firstName ? true : false}
            helperText={errors.firstName ? `${errors.firstName?.message}` : ``}
            fullWidth
            label="First Name"
            type="text"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            {...register("middleName")}
            error={errors.middleName ? true : false}
            helperText={
              errors.middleName ? `${errors.middleName?.message}` : ``
            }
            fullWidth
            label="Middle Name (Optional)"
            name="middleName"
            type="text"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            {...register("lastName")}
            error={errors.lastName ? true : false}
            helperText={errors.lastName ? `${errors.lastName?.message}` : ``}
            required
            fullWidth
            label="Last Name"
            name="lastName"
            type="text"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            {...register("birthDate")}
            error={errors.birthDate ? true : false}
            helperText={errors.birthDate ? `${errors.birthDate?.message}` : ``}
            fullWidth
            label="Birthdate"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl error={errors.applicationType ? true : false}>
            <FormLabel>Application Type</FormLabel>
            <RadioGroup row>
              {applicationType.map((items) => (
                <FormControlLabel
                  key={items.label}
                  value={items.value}
                  control={<Radio {...register("applicationType")} />}
                  label={items.label}
                />
              ))}
            </RadioGroup>

            {errors.applicationType && (
              <FormHelperText sx={{ marginTop: -1.2 }}>
                Application type is required
              </FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          {" "}
          <TextField
            {...register("address")}
            error={errors.address ? true : false}
            helperText={errors.address ? `${errors.address?.message}` : ``}
            label="Address"
            multiline
            fullWidth
            rows={4}
          />
        </Grid>
        <Grid item xs={4}>
          {" "}
          <FormControl error={errors.civilStatus ? true : false}>
            <FormLabel>Civil Status</FormLabel>
            <RadioGroup row name="applicationType">
              {civilStatus.map((items) => (
                <FormControlLabel
                  key={items.label}
                  value={items.value}
                  control={<Radio {...register("civilStatus")} />}
                  label={items.label}
                />
              ))}
            </RadioGroup>
            {errors.civilStatus && (
              <FormHelperText sx={{ marginTop: -1.2 }}>
                Civil Status type is required
              </FormHelperText>
            )}
          </FormControl>{" "}
        </Grid>

        <Grid item xs={4}>
          {" "}
          <FormControl error={errors.gender ? true : false}>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row name="applicationType">
              {gender.map((items) => (
                <FormControlLabel
                  key={items.label}
                  value={items.value}
                  control={<Radio {...register("gender")} />}
                  label={items.label}
                />
              ))}
            </RadioGroup>
            {errors.gender && (
              <FormHelperText sx={{ marginTop: -1.2 }}>
                Gender is required
              </FormHelperText>
            )}
          </FormControl>{" "}
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalInfoForm;
