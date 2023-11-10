"use client";
import React from "react";
import { Button, Card, Grid, TextField } from "@mui/material";

export default function page() {
  return (
    <div
      style={{
        margin: 20,
      }}
    >
      <Card>
        <Grid container direction={"row"} spacing={0}>
          <Grid item xs={12} lg={6}>
            <div
              style={{
                backgroundColor: "#65717d",
              }}
            >
              <img src="" alt="imagenLogin" className="imagenLogin" />
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <div
              style={{
                backgroundColor: "#65717d",
                display: "flex",
                justifyContent: "center",
                color: "white",
                alignItems:"center"
              }}
            >
              <form action="">
                <Grid container direction={"column"} spacing={2} style={{
                    display:"flex",
                    justifyContent:"center"
                }}>
                  <Grid item xs={12} style={{
                    display:"flex",
                    justifyContent:"center"
                }}>
                    <h1>Inicia Sesion</h1>
                  </Grid>
                  <Grid item xs={12} style={{
                    display:"flex",
                    justifyContent:"center"
                }}>
                  <TextField variant="filled" label="Usuario"></TextField>

                  </Grid>
                  <Grid item xs={12} style={{
                    display:"flex",
                    justifyContent:"center"
                }}>
                  <TextField variant="filled" label="Contraseña"></TextField>

                  </Grid>
                  <Grid item xs={12} style={{
                    display:"flex",
                    justifyContent:"center"
                }}>
                  <Button>Ingresar</Button>

                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>
        </Grid>
      </Card>
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
