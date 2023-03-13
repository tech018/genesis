import React from "react";
import { Button } from "@mui/material";

const RequirementsForm = () => {
  return (
    <div>
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
    </div>
  );
};

export default RequirementsForm;
