import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Stack } from "@mui/material";

const Fields = (props) => {
  return (
    <div className="data_val">
      <h4>{props.name}</h4>
      <h4>{props.email}</h4>
      <Stack>
      <Button variant="contained" color="error">
        <DeleteIcon />
      </Button>
      </Stack>
    </div>
  );
};

export default Fields;
