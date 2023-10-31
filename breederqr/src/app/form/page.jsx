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
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import MainCard from "../Components/ui-component/cards/MainCard";
import "../../css/form.css";
import { Label } from "@mui/icons-material";

export default function form() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "black",
    backgroundColor: "#F7F7F9",
    opacity: "75%",
    "&:hover": {
      backgroundColor: "#F7F7F9",
    },
  }));

  const [especie, setEspecie] = React.useState("");
  const [sexo, setSexo] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div style={{ margin: 20 }}>
        <MainCard title="Ejemplares">
          <Grid container direction="row" spacing={2}>
            <Grid item xs={12} lg={1}></Grid>
            <Grid item xs={12} lg={5.5}>
              <div
                style={{
                  backgroundColor: "#65717d",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                }}
              >
                <Grid container direction="row" spacing={0.5}>
                  <Grid item xs={12} lg={12}>
                    <div style={{ margin: 10 }}>
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
                        <FormControl
                          fullWidth
                          style={{
                            borderRadius: "5px",
                            backgroundColor: "#F7F7F9",
                            opacity: "75%",
                          }}
                        >
                          <InputLabel>Especie</InputLabel>
                          <Select
                            id="demo-simple-select"
                            value={especie}
                            label="Ordenar por"
                            onChange={handleChange}
                          >
                            <MenuItem value={"Gecko"}>Gecko</MenuItem>
                            <MenuItem value={"Vaca"}>Vaca</MenuItem>
                            <MenuItem value={"Caballo"}>Callabo</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                  </Grid>

                  <Grid item xs={12} lg={6}>
                    <div style={{ margin: 10 }}>
                      <Box sx={{ minWidth: 120 }}>
                        <TextField
                          fullWidth
                          id="fechaDeNacimiento"
                          type="date"
                          value={"fechaDeNacimiento"}
                          onChange={handleChange}
                          required
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
                        <FormControl
                          fullWidth
                          style={{
                            borderRadius: "5px",
                            backgroundColor: "#F7F7F9",
                            opacity: "75%",
                          }}
                        >
                          <InputLabel>Sexo</InputLabel>
                          <Select
                            id="demo-simple-select"
                            value={sexo}
                            label="Ordenar por"
                            onChange={handleChange}
                          >
                            <MenuItem value={"Macho"}>Macho</MenuItem>
                            <MenuItem value={"Hembra"}>Hembra</MenuItem>
                            <MenuItem value={"Indefinido"}>Indefinido</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                  </Grid>

                  <Grid item xs={12} lg={12}>
                    <div style={{ margin: 10 }}>
                      <Box sx={{ minWidth: 120 }}>
                        <TextField
                          fullWidth
                          placeholder="Aprovechamiento"
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
                          style={{
                            borderRadius: "5px",
                            backgroundColor: "#F7F7F9",
                            opacity: "75%",
                          }}
                        ></TextField>
                      </Box>
                    </div>
                  </Grid>
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
                      <ColorButton variant="contained">AGREGAR</ColorButton>
                    </Stack>
                  </Grid>

                  <Grid item xs={12} lg={10}></Grid>
                  <Grid item xs={12} lg={2}></Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={12} lg={1}></Grid>

            <Grid item xs={12} lg={3.5}>
              <div
                style={{
                  backgroundColor: "#65717d",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                }}
              >
                <Grid container direction={"row"} spacing={2}>
                  <Grid item xs={12}>
                    <div
                      style={{
                        margin: 10,
                      }}
                    >
                      <Box
                        sx={{ minWidth: 120 }}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                        }}
                      >
                        <img src="data:image/png;base64,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" alt="imagen" className="animalito" />
                      </Box>
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
                            Subir Imagenes
                          </ColorButton>
                        </Stack>
                      </div>
                    </div>
                  </Grid>

                  <Grid item xs={12}></Grid>
                </Grid>
              </div>
            </Grid>

            <Grid item xs={12} lg={12}></Grid>
          </Grid>
        </MainCard>
      </div>
    </>
  );
}
