import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
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

const applicationType = [
  {
    value: "student",
    label: "Student",
  },
  {
    value: "employee",
    label: "Employee",
  },
  {
    value: "tricycle",
    label: "Tricycle Driver",
  },
  {
    value: "others",
    label: "Others",
  },
];

const gender = [
  {
    value: "male",
    label: "Male",
  },
  {
    value: "female",
    label: "Female",
  },
];

const civilStatus = [
  {
    value: "single",
    label: "Single",
  },
  {
    value: "married",
    label: "Married",
  },
  {
    value: "separated",
    label: "Separated",
  },
];

const PersonalInfo = () => {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2014-08-18T21:11:54")
  );
  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <Box component="form" noValidate sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            type="text"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Middle Name (Optional)"
            name="middleName"
            type="text"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            fullWidth
            label="Last Name"
            name="lastName"
            type="text"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            fullWidth
            label="Birthdate"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>Application Type</FormLabel>
            <RadioGroup row name="applicationType">
              {applicationType.map((items) => (
                <FormControlLabel
                  value={items.value}
                  control={<Radio />}
                  label={items.label}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="standard"
            label="Please specify"
            sx={{ margin: "6.8px 7px 7px -90px" }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          {" "}
          <TextField label="Address" multiline fullWidth rows={4} />
        </Grid>
        <Grid item xs={4}>
          {" "}
          <FormControl>
            <FormLabel>Civil Status</FormLabel>
            <RadioGroup row name="applicationType">
              {civilStatus.map((items) => (
                <FormControlLabel
                  value={items.value}
                  control={<Radio />}
                  label={items.label}
                />
              ))}
            </RadioGroup>
          </FormControl>{" "}
        </Grid>
        <Grid item xs={8}>
          <TextField
            variant="standard"
            label="Name of Spouse"
            sx={{ margin: "7px 7px 7px -20px" }}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          {" "}
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row name="applicationType">
              {gender.map((items) => (
                <FormControlLabel
                  value={items.value}
                  control={<Radio />}
                  label={items.label}
                />
              ))}
            </RadioGroup>
          </FormControl>{" "}
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalInfo;
