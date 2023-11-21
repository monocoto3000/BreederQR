"use client";
import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import { OutlinedInput } from "@mui/material";
import Stack from "@mui/material/Stack";
import MainCard from "../Components/ui-component/cards/MainCard";
import axios from "axios";
import { Formik } from "formik";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import "../../css/form.css";
import { values } from "lodash";

export default function page() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "black",
    backgroundColor: "#F7F7F9",
    opacity: "75%",
    "&:hover": {
      backgroundColor: "#65717d",
    },
  }));
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const baseUrl = ".........";
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Formik
        initialValues={{
          user: "",
          password: "",
        }}
        onSubmit={async (values) => {
          console.log("funciona pa");
          const token = Cookies.get("token");
          axios.post(baseUrl, {
            "user": values.user,
              "password": values.password,
          }
            
              
            
          );
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, values }) => (
          <form
            onSubmit={handleSubmit}
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
                  width: "75%",
                  boxShadow: "-5px 6px 32px -3px rgba(0,0,0,0.2)",
                  borderColor: "#65717d",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  color: "white",
                  marginTop: "30px",
                }}
              >
                <div className="containerLogin">
                  <div className="padreImg">
                    <div className="containerImgLogin"></div>
                  </div>

                  <div className="containerFormLogin">
                    <div>
                      <Typography
                        fullWidth
                        style={{
                          fontSize: "40px",
                          color: "black",
                        }}
                      >
                        Inicia Sesion
                      </Typography>
                    </div>
                    <div>
                      <TextField
                        className="inputs"
                        label="user"
                        id="user"
                        multiline
                        required
                        value={values.user}
                        onChange={handleChange}
                        error={Boolean(errors.valores)}
                        helperText={errors.valores}
                      ></TextField>
                    </div>

                    <div
                      style={{
                        backgroundColor: "white",
                        borderRadius: "5px",
                      }}
                    >
                      <InputLabel style={{ fontSize: 12 }}>
                        Contraseña
                      </InputLabel>
                      <OutlinedInput
                        className="inputs"
                        type={showPassword ? "text" : "password"}
                        required
                        onChange={handleChange}
                        id="password"
                        value={values.password}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </div>

                    <div>
                      <Stack spacing={2} direction="row">
                        <ColorButton variant="contained" type="submit">
                          Ingresar
                        </ColorButton>
                      </Stack>
                    </div>

                    <div>
                      <a
                        href="./Register"
                        style={{
                          textAlign: "center",
                          outline: "none",
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        ¿No tienes Cuenta? Registrate aquí
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
}

