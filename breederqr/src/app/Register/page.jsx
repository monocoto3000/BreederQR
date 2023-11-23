"use client";
import React from "react";
import { Button, Grid, TextField, Typography, Box } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import { OutlinedInput } from "@mui/material";
import MainCard from "../Components/ui-component/cards/MainCard";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Formik } from "formik";
import { values } from "lodash";

import "../../css/form.css";
import { useHref } from "react-router-dom";

export default function Page() {
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
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const baseUrl = "http://localhost:8080/breeder/postBreeder";

  return (
    <>
      <Formik
        initialValues={{
          username: "",
          password: "",
          mail: "",
          name: "",
          last_name: "",
          second_last_name: "",
        }}
        onSubmit={async (values) => {
          try {
            console.log("funciona pa");
            const token = Cookies.get("token");
            axios
              .post(baseUrl, {
                username: values.username,
                password: values.password,
                mail: values.mail,
                name: values.name,
                last_name: values.last_name,
                second_last_name: values.second_last_name,
              })
              .then((response) => {
                console.log(response);
                const token = response.data.password;
                const expires = response.headers["expires"];
                Cookies.set("token", token, { expires: new Date(expires) });
                if (response.data != "") {
                  setStatus({ success: true });
                  setSubmitting(true);
                  window.location.href = "http://localhost:3000/Criadero";
                } else {
                  setStatus({ success: false });
                  setErrors({ submit: "El usuario NO fue creado" });
                  setSubmitting(false);
                }
              });
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, values }) => (
          <form
            style={{
              margin: 20,
            }}
            onSubmit={handleSubmit}
          >
            <Grid
              container
              spacing={0}
              sx={{
                justifyContent: "center",
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
                <div className="containerRegister">
                  <div className="padreImg">
                    <div className="containerImgLogin"></div>
                  </div>

                  <div className="containerFormRegister">
                    <div>
                      <Typography
                        style={{
                          fontSize: "40px",
                          color: "black",
                        }}
                      >
                        Registrate
                      </Typography>
                    </div>
                    <Grid
                      container
                      direction={"row"}
                      spacing={2}
                      sx={{
                        width: "90%",
                      }}
                    >
                      <Grid item xs={12} lg={6}>
                        <TextField
                          label="name"
                          id="name"
                          multiline
                          required
                          value={values.name}
                          onChange={handleChange}
                          error={Boolean(errors.valores)}
                          helperText={errors.valores}
                          fullWidth
                        ></TextField>
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <TextField
                          label="last_name"
                          id="last_name"
                          multiline
                          required
                          value={values.last_name}
                          onChange={handleChange}
                          error={Boolean(errors.valores)}
                          helperText={errors.valores}
                          fullWidth
                        ></TextField>
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <TextField
                          label="second_last_name"
                          id="second_last_name"
                          multiline
                          required
                          value={values.second_last_name}
                          onChange={handleChange}
                          error={Boolean(errors.valores)}
                          helperText={errors.valores}
                          fullWidth
                        ></TextField>
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <TextField
                          label="mail"
                          id="mail"
                          multiline
                          required
                          value={values.mail}
                          onChange={handleChange}
                          error={Boolean(errors.valores)}
                          helperText={errors.valores}
                          fullWidth
                        ></TextField>
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <TextField
                          label="user"
                          id="username"
                          multiline
                          required
                          value={values.username}
                          onChange={handleChange}
                          error={Boolean(errors.valores)}
                          helperText={errors.valores}
                          fullWidth
                        ></TextField>
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <OutlinedInput
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
                        <InputLabel style={{ fontSize: 12 }}>
                          Contraseña
                        </InputLabel>
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        sx={{
                          color: "black",
                        }}
                      >
                        <Typography>Agregar Criadero</Typography>
                      </Grid>

                      {/* <Grid item xs={12} lg={6}>
                            <InputLabel style={{ fontSize: 12 }}>
                              Nombre 
                            </InputLabel>
                            <TextField fullWidth />
                          </Grid>
                          <Grid item xs={12} lg={6}>
                            <InputLabel style={{ fontSize: 12 }}>
                              Dirección
                            </InputLabel>
                            <TextField fullWidth />
                          </Grid>
                          <Grid item xs={12} lg={6}>
                            <InputLabel style={{ fontSize: 12 }}>
                              Registro
                            </InputLabel>
                            <TextField fullWidth multiline />
                          </Grid>
                          
                          <Grid item xs={12} lg={6}>
                            <InputLabel style={{ fontSize: 12 }}>
                              Descripción
                            </InputLabel>
                            <TextField fullWidth multiline />
                          </Grid> */}
                    </Grid>
                    <div
                      style={{
                        marginTop: "5px",
                      }}
                    >
                      <Stack spacing={2} direction="row">
                        <ColorButton variant="contained" type="submit">
                          Ingresar
                        </ColorButton>
                      </Stack>
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
