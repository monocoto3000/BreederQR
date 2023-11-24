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
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import CardGeneration from "./Moleculas/CardGeneration";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Formik } from "formik";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const baseURL = "http://localhost:8080/breedingPlace/getBreedingPlace"
const baseURL2 = "http://localhost:8080/breedingPlace/deleteBreedingPlace"
const token = Cookies.get("token");
export default function Home() {
  const [breeder, setBreeder] = useState(null)
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
      setBreeder(response.data.breeder)
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


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div style={{ margin: 15 }}>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12} lg={12}>
          <MainCard title=
            {<>
              <Button variant="filled" disabled size="large" startIcon={<AccountCircleRoundedIcon fontSize="large" />} style={{ color: "black", fontSize: 20 }}>Perfil de usuario</Button>
            </>}>
            <Grid container spacing={2} direction={"row"}>
              <Grid item lg={6}>
                <Typography variant='subtitle1'><strong>Nombre: </strong>{breeder.name} {breeder.last_name} {breeder.second_last_name}</Typography>
                <Typography variant='subtitle1'><strong>Nombre de Usuario: </strong>{breeder.username}</Typography>
                <Typography variant='subtitle1'><strong>Correo: </strong>{breeder.mail}</Typography>
                <Typography variant='subtitle1'><strong>Fecha de registro: </strong>{breeder.createdAt}</Typography>
                <Typography variant='subtitle1'><strong>Criadero: </strong>{criadero.name}</Typography>
                <Button variant="outlined" onClick={handleOpen} style={{ marginTop: 20 }} startIcon={<ModeEditIcon />}>Editar</Button>
              </Grid>
              <Grid item lg={6}>
                <Grid container spacing={2} direction="column">
                  <Grid item lg={6}>
                    <Card variant="outlined" style={{ padding: 10 }}>
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
                              Direccion: {criadero.address}
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
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
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
          <CardGeneration></CardGeneration>
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
        <Formik
          initialValues={{
            logo: criadero.logo,
            address: criadero.address,
            name: criadero.name,
            description: criadero.description,
            register_number: criadero.register_number,
            token: token
          }}
          onSubmit={async (values) => {
            try {
              console.log(values);
              const token = Cookies.get("token");
              console.log(token)
              axios
                .post("http://localhost:8080/breedingPlace/putBreedingPlace", {
                  logo: values.logo,
                  address: values.address,
                  name: values.name,
                  description: values.description,
                  register_number: values.register_number,
                  token: token
                })
                .then((response) => {
                  console.log(response);
                  alert("actualizado");
                });
            } catch (error) {
              console.error(error);
              if (scriptedRef.current) {
                setStatus({ success: false });
                setErrors({ submit: err.message });
                setSubmitting(false);
              }
            }
          }}
        >
          {({ errors, handleBlur, handleChange, handleSubmit, values, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <Fade in={openModalEdit}>
                <Box sx={style}>
                  <Grid container spacing={2}>
                    <Grid item lg={12} xs={12}>
                      <Typography variant="h6" component="h2">
                        Editar criadero
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <InputLabel style={{ fontSize: 12 }}>
                        Nombre
                      </InputLabel>
                      <TextField
                        onChange={handleChange}
                        id="name"
                        value={values.name}
                        required
                        defaultValue={criadero.name}
                        fullWidth />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <InputLabel style={{ fontSize: 12 }}>
                        Dirección
                      </InputLabel>
                      <TextField
                        onChange={handleChange}
                        id="address"
                        value={values.address}
                        required
                        defaultValue={criadero.address}
                        fullWidth />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <InputLabel style={{ fontSize: 12 }}>
                        Número de registro
                      </InputLabel>
                      <TextField
                        onChange={handleChange}
                        id="register_number"
                        value={values.register_number}
                        required
                        defaultValue={criadero.register_number}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <InputLabel style={{ fontSize: 12 }}>
                        Logo
                      </InputLabel>
                      <TextField
                        onChange={handleChange}
                        id="logo"
                        value={values.logo}
                        required
                        defaultValue={criadero.logo}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} lg={12}>
                      <InputLabel style={{ fontSize: 12 }}>
                        Descripción
                      </InputLabel>
                      <TextField
                        onChange={handleChange}
                        id="description"
                        value={values.description}
                        required
                        defaultValue={criadero.description}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Button fullWidth variant='outlined' type="submit">Actulizar</Button>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Button fullWidth variant='outlined' color="error" onClick={handleCloseEdit}>Cerrar</Button>
                    </Grid>
                  </Grid>
                </Box>
              </Fade>
            </form>
          )}
        </Formik>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Formik
          initialValues={{
            last_name: breeder.last_name,
            mail: breeder.mail,
            name: breeder.name,
            password: "",
            second_last_name: breeder.second_last_name,
            username: breeder.username,
            token: token
          }}
          onSubmit={async (values) => {
            try {
              console.log(values);
              const token = Cookies.get("token");
              console.log(token)
              axios
                .post("http://localhost:8080/breeder/putBreeder", {
                  last_name: values.last_name,
                  mail: values.mail,
                  name: values.name,
                  password: values.password,
                  second_last_name: values.second_last_name,
                  username: values.username,
                  token: token
                })
                .then((response) => {
                  console.log(response);
                  alert("actualizado");
                });
            } catch (error) {
              console.error(error);
              if (scriptedRef.current) {
                setStatus({ success: false });
                setErrors({ submit: err.message });
                setSubmitting(false);
              }
            }
          }}
        >
          {({ errors, handleBlur, handleChange, handleSubmit, values, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <Fade in={open}>
                <Box sx={style}>
                  <Grid container spacing={2}>
                    <Grid item lg={12} xs={12}>
                      <Typography variant="h6" component="h2">
                        Editar perfil
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <InputLabel style={{ fontSize: 12 }}>
                        Nombre
                      </InputLabel>
                      <TextField
                        id="name"
                        required
                        onChange={handleChange}
                        value={values.name}
                        defaultValue={breeder.name}
                        fullWidth />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <InputLabel style={{ fontSize: 12 }}>
                        Apellido paterno
                      </InputLabel>
                      <TextField
                        id="last_name"
                        required
                        onChange={handleChange}
                        value={values.last_name}
                        defaultValue={breeder.last_name}
                        fullWidth />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <InputLabel style={{ fontSize: 12 }}>
                        Apellido materno
                      </InputLabel>
                      <TextField
                        id="second_last_name"
                        required
                        onChange={handleChange}
                        value={values.second_last_name}
                        defaultValue={breeder.second_last_name}
                        fullWidth />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <InputLabel style={{ fontSize: 12 }}>
                        Usuario
                      </InputLabel>
                      <TextField
                        id="username"
                        required
                        onChange={handleChange}
                        value={values.username}
                        defaultValue={breeder.username}
                        fullWidth />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <InputLabel style={{ fontSize: 12 }}>
                        Correo
                      </InputLabel>
                      <TextField
                        id="mail"
                        type="mail"
                        required
                        onChange={handleChange}
                        value={values.mail}
                        defaultValue={breeder.mail}
                        fullWidth />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <InputLabel style={{ fontSize: 12 }}>
                        Contraseña*
                      </InputLabel>
                      <OutlinedInput
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
                        required
                        value={values.password}
                        onChange={handleChange}
                        id="password"
                        endAdornment={<InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>} />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Button fullWidth variant='outlined' type="submit">Actualizar</Button>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Button fullWidth variant='outlined' color="error" onClick={handleClose}>Cerrar</Button>
                    </Grid>
                  </Grid>
                </Box>
              </Fade>
            </form>
          )}
        </Formik>
      </Modal>
    </div>
  );
}