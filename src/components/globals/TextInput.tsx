"use client"
import React from "react";

import styled from "@emotion/styled";

import TextField, { TextFieldProps } from "@mui/material/TextField";

export default (props: TextFieldProps) => {
    return (
        <VisibleTextField
            { ... props }
        />
    );
}

const VisibleTextField = styled(TextField)({
    ".MuiFilledInput-root": {
        color: "#A0AAB4",
        backgroundColor: "#3B3C36"
    },
    "& hover": {
        backgroundColor: "#3B3C36"
    }
});
