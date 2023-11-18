import styles from "./page.module.css";
import * as React from "react";
import Grid from "@mui/material/Grid";
import CardGeneration from "./Moleculas/CardGeneration";
import { Box, Button } from "@mui/material";
import MortalityRate from "./Moleculas/MortalityRate";
import SalesRate from "./Moleculas/SalesRate";
import MainCard from "./Components/ui-component/cards/MainCard";
import CardMedia from '@mui/material/CardMedia';
import { Card, Typography, CardContent } from '@mui/material';
import Chip from '@mui/material/Chip';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

export default function Home() {
  const criaderos = [{
    nombre: "Criadero1",
    direccion: "12ª Lorem Ipsum #3290 Col. Lomas",
    registro: "Registro",
    logo: "https://via.placeholder.com/300.png/09f/fff",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed nisi nunc. Integer nec turpis in urna eleifend imperdiet nec in augue. Curabitur dignissim sodales augue"
  },
  {
    nombre: "Criadero2",
    direccion: "5ª Lorem Ipsum #2398 Col. Palmas",
    registro: "Registro",
    logo: "https://via.placeholder.com/300.png/09f/fff",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed nisi nunc. Integer nec turpis in urna eleifend imperdiet nec in augue. Curabitur dignissim sodales augue"
  },
  ]
  return (
    <div style={{ margin: 15 }}>
      <Grid container direction="row" spacing={2}>
        <Grid item lg={4} xs={12}>
          <MortalityRate
            title="Taza de nacimiento"
            chart={{
              series: [
                { label: "Vivos", value: 4344 },
                { label: "Muertos", value: 5435 },
              ],
            }}
          />
        </Grid>
        <Grid item lg={4} xs={12}>
          <SalesRate />
        </Grid>
        <Grid item lg={4} xs={12}>
          <MainCard title="Criaderos">
            <Grid container spacing={2} direction="column">
              {criaderos.map((criadero) => (
                <Grid item lg={4}>
                  <Card>
                    <Box sx={{ flexDirection: 'column' }}>
                      <Grid container spacing={1} direction="row">
                        <Grid item xs={6} lg={4}>
                          <CardMedia
                            height={"100%"}
                            width={"100%"}
                            component="img"
                            image={criadero.logo}
                          />
                        </Grid>
                        <Grid item xs={6} lg={8}>
                          <CardContent>
                            <Typography variant="caption" color="text.secondary" component="div">
                              {criadero.direccion}
                            </Typography>
                            <Typography component="div" variant="subtitle1">
                              <b>{criadero.nombre}</b>
                            </Typography>
                            <Typography color="text.secondary" component="div">
                              <Box sx={{ width: "100%" }}>
                                <Chip label={criadero.registro} variant="outlined" />
                              </Box>
                            </Typography>
                            <Typography>
                              <Button
                                size="small"
                                variant="outlined"
                                color="error"
                                style={{ float: "left", marginTop: 10 }}
                                startIcon={<DeleteIcon />}>
                                Eliminar
                              </Button>
                              <Button variant="outlined" size="small" style={{ float: "left", marginLeft: 5, marginTop: 10 }} startIcon={<ModeEditIcon />}>Editar</Button>
                            </Typography>
                          </CardContent>
                        </Grid>
                        <Grid item xs={12} lg={12}>
                          <CardContent>
                            <Typography variant="caption" color="text.secondary" component="div">
                              <strong>Descripción</strong><br></br>
                              {criadero.descripcion}
                            </Typography>
                          </CardContent>
                        </Grid>
                      </Grid>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </MainCard>
        </Grid>
      </Grid>
    </div>
  );
}
