"use client";
import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Button, Grid, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import MainCard from "../Components/ui-component/cards/MainCard";

import "../../css/form.css";

export default function Page() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "black",
    backgroundColor: "#F7F7F9",
    opacity: "75%",
    "&:hover": {
      backgroundColor: "#65717d",
    },
  }));
  return (
    <>
      <div
        style={{
          margin: 20,
          height: "100%",
        }}
      >
        <Grid
          container
          spacing={0}
          sx={{
            justifyContent: "center",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "50%",
              boxShadow: "-5px 6px 32px -3px rgba(0,0,0,0.2)",
              borderColor: "#65717d",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
              padding: "25px",
              color: "white",
              marginTop: "30px",
            }}
          >

            
          </div>
        </Grid>
      </div>
    </>
  );
}
