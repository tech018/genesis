import React from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <AppRegistrationIcon />
      </ListItemIcon>
      <ListItemText primary="My Applications" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DocumentScannerIcon />
      </ListItemIcon>
      <ListItemText primary="Requirements" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ManageAccountsIcon />
      </ListItemIcon>
      <ListItemText primary="Account Settings" />
    </ListItemButton>
  </React.Fragment>
);
