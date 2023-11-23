"use client"
import * as React from "react";
import Grid from "@mui/material/Grid";
import { Box, Button } from "@mui/material";
import MortalityRate from "./Moleculas/MortalityRate";
import SalesRate from "./Moleculas/SalesRate";
import MainCard from "./Components/ui-component/cards/MainCard";
import CardMedia from '@mui/material/CardMedia';
import { Card, Typography, CardContent } from '@mui/material';
import Chip from '@mui/material/Chip';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import config from "../../config";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie';

const baseURL = "http://localhost:8080/breedingPlace/getBreedingPlace"
const baseURL2 = "http://localhost:8080/breedingPlace/deleteBreedingPlace"
const token = Cookies.get("token");
export default function Home() {
  const [criadero, setCriaderos] = useState(null)
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(baseURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        "token": token
      }
    }).then(response => {
      setCriaderos(response.data);
      console.log(response.data);
      setLoading(false);
      Cookies.set('breedingPlace', response.data.id);

    })
      .catch(error => {
        console.log(error)
      });
  }, []);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60%",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const deleteBreedingPlace = () => {

    const formData = new FormData();
    formData.append("token", token);

    const Headers = {
      Authorization: `Bearer ${token}`,
      "Content-type": ''
    }

    axios.put(
      baseURL2,
      formData,
      { Headers }
    ).then(response => {
      alert(response.data)
    }).catch(error => {
        console.log(error)
      });
  }
  const [openModalEdit, setOpenModalEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenModalEdit(true);
  const handleCloseEdit = () => setOpenModalEdit(false);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
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
          <MainCard title={
            <>
              Criadero
            </>
          }>
            <Grid container spacing={2} direction="column">
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
                            {criadero.address}
                          </Typography>
                          <Typography component="div" variant="subtitle1">
                            <b>{criadero.name}</b>
                          </Typography>
                          <Typography color="text.secondary" component="div">
                            <Box sx={{ width: "100%" }}>
                              <Chip label={criadero.register_number} variant="outlined" />
                            </Box>
                          </Typography>
                          <Typography>
                            <Button
                              onClick={deleteBreedingPlace}
                              size="small"
                              variant="outlined"
                              color="error"
                              style={{ float: "left", marginTop: 10 }}
                              startIcon={<DeleteIcon />}>
                              Eliminar
                            </Button>
                            <Button variant="outlined" size="small" style={{ float: "left", marginLeft: 5, marginTop: 10 }} startIcon={<ModeEditIcon />} onClick={handleOpenEdit} >Editar</Button>
                          </Typography>
                        </CardContent>
                      </Grid>
                      <Grid item xs={12} lg={12}>
                        <CardContent>
                          <Typography variant="caption" color="text.secondary" component="div">
                            <strong>Descripción</strong><br></br>
                            {criadero.description}
                          </Typography>
                        </CardContent>
                      </Grid>
                    </Grid>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
      </Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModalEdit}
        onClose={handleCloseEdit}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModalEdit}>
          <Box sx={style}>
            <Grid container spacing={2}>
              <Grid item lg={12} xs={12}>
                <Typography variant="h6" component="h2">
                  Crear criadero
                </Typography>
              </Grid>
              <Grid item xs={12} lg={6}>
                <InputLabel style={{ fontSize: 12 }}>
                  Nombre
                </InputLabel>
                <TextField
                  fullWidth />
              </Grid>
              <Grid item xs={12} lg={6}>
                <InputLabel style={{ fontSize: 12 }}>
                  Dirección
                </InputLabel>
                <TextField
                  fullWidth />
              </Grid>
              <Grid item xs={12} lg={6}>
                <InputLabel style={{ fontSize: 12 }}>
                  Registro
                </InputLabel>
                <TextField
                  fullWidth
                  multiline
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <InputLabel style={{ fontSize: 12 }}>
                  Logo
                </InputLabel>
                <TextField
                  fullWidth
                  multiline
                />
              </Grid>
              <Grid item xs={12} lg={12}>
                <InputLabel style={{ fontSize: 12 }}>
                  Descripción
                </InputLabel>
                <TextField
                  fullWidth
                  multiline
                />
              </Grid>
              <Grid item xs={12} lg={12}>
                <Button fullWidth variant='outlined' onClick={handleCloseEdit}>Actulizar</Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}