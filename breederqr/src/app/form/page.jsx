"use client";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
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
import MainCard from "../Components/ui-component/cards/MainCard";
import "../../css/form.css";

export default function form() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "black",
    backgroundColor: "#F7F7F9",
    opacity: "75%",
    "&:hover": {
      backgroundColor: "#65717d",
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
                  
                  boxShadow:"-5px 6px 32px -3px rgba(0,0,0,0.2)",
                  borderColor:"#65717d",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  padding:"25px"
                }}
              >
                <Grid container direction="row" spacing={0.5}>
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
                          textAlign:"center"
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
              <div style={{
                  
                  boxShadow:"-5px 6px 32px -3px rgba(0,0,0,0.2)",
                  borderColor:"#65717d",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  padding:"25px"
                }}
              >
                <Grid container direction={"column"} spacing={12}>
                  <Grid item xs={12}>
                    <div
                      style={{
                        margin: 10, marginTop:65
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
                        <img src="https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-file-upload-icon-image_1344464.jpg" alt="SubirImagen" className="animalito" />
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

                 

                  <Grid item xs={12}>
                    <div
                      style={{
                        margin: 10, marginBottom:80
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
                        <img src="https://w7.pngwing.com/pngs/619/184/png-transparent-qr-code-barcode-scanners-scanner-q-text-rectangle-logo.png" alt="Qr" className="animalito"/>
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
                            Generar Qr
                          </ColorButton>
                        </Stack>
                      </div>
                    </div>
                  </Grid>
                  

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
