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

export default function page() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "black",
    backgroundColor: "#F7F7F9",
    opacity: "75%",
    "&:hover": {
      backgroundColor: "#65717d",
    },
  }));
  return (
    <div
      style={{
        margin: 20,
        height:"100%"
      }}
    >
      
        <Grid
          container
          spacing={0}
          sx={{
            justifyContent: "center",
            height:"100%"
          }}
        >
          <div
            style={{
              width:"50%",
              boxShadow: "-5px 6px 32px -3px rgba(0,0,0,0.2)",
              borderColor: "#65717d",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
              padding: "25px",
              color: "white",
              marginTop:"30px"
            }}
          >
            <form action="">
              <Grid
                container
                direction={"column"}
                spacing={2}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Grid
                  item
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "black",
                    textAlign:"center"
                  }}
                >
                  <h1>Inicia Sesion</h1>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <TextField variant="filled" label="Usuario"></TextField>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <TextField variant="filled" label="Contraseña"></TextField>
                </Grid>
                <Grid
                  item
                  xs={12}>
                  <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          marginTop: "10px",
                        }}
                      >
                        <Stack spacing={2} direction="row">
                          <ColorButton variant="contained">
                            Ingresar
                          </ColorButton>
                        </Stack>
                      </div>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
    </div>
  );
}

{
  /* 
    Login estructura para css manual
           <div className="loginContainer">
            
            <div className="imgLogin">
              <img
                src=""
                alt="imagen"
                className="longImg"
              ></img>
            </div>
  
            <div
              style={{
                margin: 20,
                backgroundColor: "#65717d",
                borderRadius: 5,
              }}
            >
              <form>
                  <div>
                      <h1>Inicia Sesion</h1>
                  </div>
              </form>
            </div>
          </div> */
}
