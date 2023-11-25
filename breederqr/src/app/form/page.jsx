"use client";
import React from "react";
import {
  Button,
  Card,
  Grid,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Autocomplete,
  Modal,
} from "@mui/material";
import MainCard from "../Components/ui-component/cards/MainCard";
import "../../css/form.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Formik } from "formik";
import { values } from "lodash";
import Cookies from "js-cookie";


export default function form() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "black",
    backgroundColor: "#F7F7F9",
    opacity: "75%",
    "&:hover": {
      backgroundColor: "#65717d",
    },
  }));

  
 

  const specie = ["1"];
  const gender = ["M", "H", "N"];

 
  const [sexo, setSexo] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Formik
        initialValues={{
          specie: "",
          birthday: "",
          breedingPlace: "",
          gender: "",
          name: "",
          registerNumber: "",
          description: "",
        }}
        onSubmit={async (values) => {
          try {
            console.log(values);
            const token = Cookies.get("token");
            const breedingPlace = Cookies.get("breedingPlace");

            axios
              .post("http://localhost:º8080/animal/postAnimal", {
                specie: 1,
                birthday: values.birthday,
                breedingPlace: 1,
                gender: values.gender,
                name: values.name,
                registerNumber: values.registerNumber,
                description: values.description,
                token: token,
              })
              .then((response) => {
                console.log(response);
                alert("creado");
                window.location.href = "http://localhost:3000/Ejemplares";

              });
          } catch (error) {
            console.error(error);
            alert("Agrega una imagen");
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit} style={{ margin: 20 }}>
            <MainCard title="Ejemplares">
              <Grid
                container
                direction="row"
                spacing={2}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Grid
                  item
                  xs={12}
                  lg={6}
                  sx={{
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      boxShadow: "-5px 6px 32px -3px rgba(0,0,0,0.2)",
                      borderColor: "#65717d",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "5px",
                      padding: "25px",
                    }}
                  >
                    <Grid
                      container
                      direction="row"
                      spacing={0.5}
                      sx={{
                        alignItems: "center",
                      }}
                    >
                      <Grid item xs={12} lg={12}>
                        <div style={{ margin: 20 }}>
                          <Box
                            sx={{ minWidth: 120 }}
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "center",
                            }}
                          >
                            <img
                              src="https://img.freepik.com/premium-vector/simple-cute-gecko-logo_9645-2529.jpg?w=740"
                              alt="imagen"
                              className="animalito"
                            />
                          </Box>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "center",
                              textAlign: "center",
                            }}
                          >
                            <h2>Agregar Nuevo Ejemplar</h2>
                          </div>
                        </div>
                      </Grid>

                   

                      <Grid item xs={12} lg={6}>
                        <div style={{ margin: 10 }}>
                          <Box sx={{ minWidth: 120 }}>
                            <TextField
                              fullWidth
                              placeholder="Nombre"
                              id="name"
                              multiline
                              required
                              value={values.name}
                              onChange={handleChange}
                              error={Boolean(errors.valores)}
                              helperText={errors.valores}
                              style={{
                                borderRadius: "5px",
                                backgroundColor: "#F7F7F9",
                                opacity: "75%",
                              }}
                            ></TextField>
                          </Box>
                        </div>
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <div style={{ margin: 10 }}>
                          <Box sx={{ minWidth: 120 }}>
                            <Autocomplete
                              disablePortal
                              id="specie"
                              options={specie}
                              getOptionLabel={(option) =>
                                typeof option === "string" ||
                                option instanceof String
                                  ? option
                                  : ""
                              }
                              required
                              onChange={(e, value) => {
                                console.log(value);
                                setFieldValue(
                                  "specie",
                                  value !== null ? value : values.specie
                                );
                              }}
                              sx={{ width: "100%" }}
                              renderInput={(params) => (
                                <TextField {...params} label="Specie" />
                              )}
                            ></Autocomplete>
                          </Box>
                        </div>
                      </Grid>

                      <Grid item xs={12} lg={6}>
                        <div style={{ margin: 10 }}>
                          <Box sx={{ minWidth: 120 }}>
                            <TextField
                              fullWidth
                              id="birthday"
                              type="date"
                              required
                              value={values.birthday}
                              onChange={handleChange}
                              error={Boolean(errors.valores)}
                              helperText={errors.valores}
                              style={{
                                borderRadius: "5px",
                                backgroundColor: "#F7F7F9",
                                opacity: "75%",
                              }}
                            />
                            <helperText
                              style={{
                                color: "Black",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                marginTop: "2px",
                              }}
                            >
                              Fecha de Nacimiento
                            </helperText>
                          </Box>
                        </div>
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <div style={{ margin: 10 }}>
                          <Box sx={{ minWidth: 120 }}>
                            <Autocomplete
                              disablePortal
                              id="gender"
                              options={gender}
                              getOptionLabel={(option) =>
                                typeof option === "string" ||
                                option instanceof String
                                  ? option
                                  : ""
                              }
                              required
                              onChange={(e, value) => {
                                console.log(value);
                                setFieldValue(
                                  "gender",
                                  value !== null ? value : values.gender
                                );
                              }}
                              sx={{ width: "100%" }}
                              renderInput={(params) => (
                                <TextField {...params} label="Genero" />
                              )}
                            ></Autocomplete>
                          </Box>
                        </div>
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        <div style={{ margin: 10 }}>
                          <Box sx={{ minWidth: 120 }}>
                            <TextField
                              fullWidth
                              placeholder="Numero de Registro"
                              id="registerNumber"
                              multiline
                              required
                              value={values.registerNumber}
                              onChange={handleChange}
                              error={Boolean(errors.valores)}
                              helperText={errors.valores}
                              style={{
                                borderRadius: "5px",
                                backgroundColor: "#F7F7F9",
                                opacity: "75%",
                              }}
                            ></TextField>
                          </Box>
                        </div>
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        <div style={{ margin: 10 }}>
                          <Box sx={{ minWidth: 120 }}>
                            <TextField
                              fullWidth
                              placeholder="Descripción"
                              id="description"
                              multiline
                              required
                              value={values.description}
                              onChange={handleChange}
                              style={{
                                borderRadius: "5px",
                                backgroundColor: "#F7F7F9",
                                opacity: "75%",
                              }}
                            ></TextField>
                          </Box>
                        </div>
                      </Grid>

                      <Grid item xs={12} lg={12}></Grid>
   
                      <Grid
                        item
                        xs={12}
                        lg={12}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Stack spacing={2} direction="row">
                          <ColorButton type="submit" variant="contained">
                            AGREGAR
                          </ColorButton>
                        </Stack>
                      </Grid>

                      <Grid item xs={12} lg={10}></Grid>
                      <Grid item xs={12} lg={2}></Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            </MainCard>
          </form>
        )}
      </Formik>
    </>
  );
}
