"use client";
import React from "react";
import { Button, Grid, TextField, Typography, Modal, Box } from "@mui/material";
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
import config from "../../../config";
import Cookies from "js-cookie";
import uniqid from "uniqid";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import "../Components/Anexos.css";

export default function CrearCriadero() {
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
  const baseUrl = "http://localhost:8080/breedingPlace/postBreedingPlace";
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChangeImg = (e) => {
    setImage1(e.target.files[0]);
  };

  const [image1, setImage1] = useState("");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          description: "",
          address: "",
          register_number: "",
        }}
        onSubmit={async (values) => {
          event.preventDefault();
          try {
            const token = Cookies.get("token");
            var posdata = new FormData();
            posdata.append("name", values.name);
            posdata.append("description", values.description);
            posdata.append("address", values.address);
            posdata.append("register_number", values.register_number);
            posdata.append("image",image1);
            posdata.append("token",token);

            axios.post(baseUrl, posdata).then((response) => {
              alert("Criadero registrado exitosamente")
              window.location.href = "http://localhost:3000";
            });
          } catch (error) {
            console.error(err);
            alert("Agrega una Imagen");
          }
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
                        Agrega Criadero
                      </Typography>
                    </div>

                    <div>
                     
                      <input
                        type="file"
                        id="file"
                        onChange={handleChangeImg}
                      ></input>
                    </div>

                    <div>
                      <TextField
                        className="inputs"
                        label="name"
                        id="name"
                        multiline
                        required
                        value={values.name}
                        onChange={handleChange}
                        error={Boolean(errors.valores)}
                        helperText={errors.valores}
                      ></TextField>
                    </div>

                    <div>
                      <TextField
                        className="inputs"
                        label="address"
                        id="address"
                        multiline
                        required
                        value={values.address}
                        onChange={handleChange}
                        error={Boolean(errors.valores)}
                        helperText={errors.valores}
                      ></TextField>
                    </div>

                    <div>
                      <TextField
                        className="inputs"
                        label="description"
                        id="description"
                        multiline
                        required
                        value={values.description}
                        onChange={handleChange}
                        error={Boolean(errors.valores)}
                        helperText={errors.valores}
                      ></TextField>
                    </div>

                    <div>
                      <TextField
                        className="inputs"
                        label="register_number"
                        id="register_number"
                        multiline
                        required
                        value={values.register_number}
                        onChange={handleChange}
                        error={Boolean(errors.valores)}
                        helperText={errors.valores}
                      ></TextField>
                    </div>

                   

                    <div>
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