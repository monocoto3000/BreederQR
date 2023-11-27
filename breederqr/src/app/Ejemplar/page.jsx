"use client";
import React from "react";
import MainCard from "../Components/ui-component/cards/MainCard";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import {
  Card,
  Grid,
  Typography,
  CardContent,
  Button,
  Autocomplete,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Page, Text, Document, Image, View } from "@react-pdf/renderer";
import CircularProgress from "@mui/material/CircularProgress";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import { useState } from "react";
import uniqid from "uniqid";
import "../Components/Anexos.css";
import config from "../../../config";
import { useEffect } from "react";
import axios from "axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Cookies from "js-cookie";

export default function Ejemplares() {
  const token = Cookies.get("token");
  const idAnimal = Cookies.get("animalId");
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const handleAcordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const specie = ["1", "2", "3"];
  const gender = ['M', 'H', 'N'];
  const getAnimalUrl = `http://localhost:8080/animal/getAnimalById`;
  const [animal, setAnimal] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [puestas, setPuestas] = useState(null);


  useEffect(() => {
    axios
      .get("http://localhost:8080/laying/getAllLayings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          from: 10,
          idAnimal: idAnimal,
          where: 0
        },
      })
      .then((response) => {
        setPuestas(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(getAnimalUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          id: idAnimal,
        },
      })
      .then((response) => {
        setAnimal(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(getAnimalUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          id: idAnimal,
        },
      })
      .then((response) => {
        setAnimal(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

  const styles = {
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    title: {
      fontSize: 24,
      textAlign: "center",
    },
  };
  const QR = () => {
    return (
      <Document>
        <Page wrap style={styles.body}>
          <Text style={styles.title}>{animal?.register_number}</Text>
          <Image style={styles.image} src={animal?.qr} />
        </Page>
      </Document>
    );
  };
  const imagesURL = "http://localhost:8080/photo/getPhoto";
  const [imgage, setImage] = useState(null);
  useEffect(() => {
    axios
      .get(imagesURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          idBreedingPace: idAnimal,
          where: 0,
          from: 10,
        },
      })
      .then((response) => {
        setImage(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const postPhotoURL = "http://localhost:8080/photo/postPhoto";

  const cardData = [
    {
      id: 1,
      nombre: "Felipe",
      sexo: "H",
      nacimiento: "12/42/2004",
      img: "https://via.placeholder.com/300.png/09f/fff",
      especie: "Astrolopitecus",
      parentesco: "Mamá",
    },
    {
      id: 2,
      nombre: "Pancho",
      sexo: "M",
      nacimiento: "12/42/2004",
      img: "https://via.placeholder.com/300.png/09f/fff",
      especie: "Tiranosaurio",
      parentesco: "Papá",
    },
    {
      id: 3,
      nombre: "Ernesto",
      sexo: "H",
      nacimiento: "12/42/2004",
      img: "https://via.placeholder.com/300.png/09f/fff",
      especie: "Calamar",
      parentesco: "Hermano",
    },
  ];

  const imagenes = [
    { img: "https://via.placeholder.com/300.png/09f/fff" },
    { img: "https://via.placeholder.com/300.png/09f/fff" },
    { img: "https://via.placeholder.com/300.png/09f/fff" },
    { img: "https://via.placeholder.com/300.png/09f/fff" },
    { img: "https://via.placeholder.com/300.png/09f/fff" },
    { img: "https://via.placeholder.com/300.png/09f/fff" },
    { img: "https://via.placeholder.com/300.png/09f/fff" },
    { img: "https://via.placeholder.com/300.png/09f/fff" },
    { img: "https://via.placeholder.com/300.png/09f/fff" },
    { img: "https://via.placeholder.com/300.png/09f/fff" },
    { img: "https://via.placeholder.com/300.png/09f/fff" },
    { img: "https://via.placeholder.com/300.png/09f/fff" },
  ];

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .02)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(-90deg)",
    },
  }));
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const [openModalEdit, setOpenModalEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenModalEdit(true);
  const handleCloseEdit = () => setOpenModalEdit(false);

  const [openModalImg, setOpenModalImg] = React.useState(false);
  const handleOpenImg = () => setOpenModalImg(true);
  const handleCloseImg = () => setOpenModalImg(false);

  const [Files, SetFiles] = useState([]);
  const [selectedfile, SetSelectedFile] = useState([]);

  const FileUploadSubmit = async (e) => {
    e.preventDefault();
    // form reset on submit
    if (selectedfile.length > 0) {
      for (let index = 0; index < selectedfile.length; index++) {
        SetFiles((preValue) => {
          return [...preValue, selectedfile[index]];
        });
      }
      SetSelectedFile([]);
    } else {
      alert("No ha seleccionado ningun documento");
    }
  };
  const filesizes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };
  const InputChange = (e) => {
    let images = [];
    for (let i = 0; i < e.target.files.length; i++) {
      images.push(e.target.files[i]);
      let reader = new FileReader();
      let file = e.target.files[i];
      reader.onloadend = () => {
        let subCadena = reader.result.split(",");
        SetSelectedFile((preValue) => {
          return [
            ...preValue,
            {
              id: uniqid(),
              nombre: e.target.files[i].name,
              tipo: e.target.files[i].type.toString(),
              contenido: subCadena[1],
              imagen: reader.result,
              datetime:
                e.target.files[i].lastModifiedDate.toLocaleString("en-IN"),
              filesize: filesizes(e.target.files[i].size),
            },
          ];
        });
      };
      if (e.target.files[i]) {
        reader.readAsDataURL(file);
      }
    }
  };
  const DeleteSelectFile = (id) => {
    if (window.confirm("¿Seguro/a que desea borrar ese documento?")) {
      const result = selectedfile.filter((data) => data.id !== id);
      SetSelectedFile(result);
    } else {
      // alert('No');
    }
  };

  const deleteAnimal = () => {
    const formData = new FormData();
    const putAnimal = "http://localhost:8080/animal/deleteAnimal";

    formData.append("token", token);
    formData.append("id", idAnimal);

    const headers = {
      authorization: `Bearer ${token}`,
      "Content-type": "multipart/form-data",
    };

    console.log(formData);

    axios
      .put(putAnimal, formData, { headers })
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChangeImg = (e) => {
    setImage1(e.target.files[0]);
  }

  const [image1, setImage1] = useState("");

  console.log(selectedfile);
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <>
      <div style={{ margin: 20 }}>
        <Box sx={{ width: "100%" }}>
          <Collapse in={open}>
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              <Typography variant="caption" fontSize={18}>
                <AlertTitle>
                  <strong>¿Desea eliminar al ejemplar {animal?.name}?</strong>
                </AlertTitle>
              </Typography>
              <Typography variant="caption" fontSize={15}>
                Para continuar presione <strong>ELIMINAR</strong>
              </Typography>
              <br></br>
              <Button
                onClick={deleteAnimal}
                variant="outlined"
                color="error"
                style={{ marginTop: 5 }}
                startIcon={<DeleteIcon />}
              >
                Eliminar
              </Button>
            </Alert>
          </Collapse>
        </Box>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12} lg={6}>
            <MainCard
              title={
                <>
                  {animal?.name}
                  <Button
                    variant="outlined"
                    color="error"
                    style={{ float: "right", marginRight: 10 }}
                    startIcon={<DeleteIcon />}
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    Eliminar
                  </Button>
                  <Button
                    variant="outlined"
                    style={{ float: "right", marginRight: 10 }}
                    startIcon={<ModeEditIcon />}
                    onClick={handleOpenEdit}
                  >
                    Editar
                  </Button>
                </>
              }
            >
              <Grid container spacing={2} direction={"row"}>
                <Grid item xs={12} lg={4}>
                  <div style={{ textAlign: "center" }}>
                    <img
                      style={{ borderRadius: "100%", width: 180, height: 180 }}
                      src={animal?.qr}
                      alt="new"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} lg={8}>
                  <Chip
                    label={
                      <Typography variant="subtitle1">
                        <b>{animal?.birthday}</b>
                      </Typography>
                    }
                    variant="outlined"
                    style={{ float: "right" }}
                  />
                  <Typography variant="h5" gutterBottom>
                    <b>Sexo:</b> {animal?.gender}
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    <b>Número de Registro:</b> {animal?.register_number}
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    <b>Especie:</b> {animal?.specie.name}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    <b>Fecha de registro:</b> {animal?.createdAt}
                  </Typography>
                </Grid>
              </Grid>
              <div style={{ height: 20 }} />
              <Grid container spacing={2} direction="row">
                {cardData.map((card) => (
                  <Grid item lg={4}>
                    <Card sx={{ display: "flex" }}>
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Grid container spacing={2} direction="row">
                          <Grid item xs={6} lg={6}>
                            <CardContent>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                                component="div"
                              >
                                {card.nacimiento}
                              </Typography>
                              <Typography component="div" variant="subtitle1">
                                <b>{card.nombre}</b>
                              </Typography>
                              <Typography
                                variant="subtitle1"
                                color="text.secondary"
                                component="div"
                              >
                                {card.parentesco}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                                component="div"
                              >
                                {card.especie}
                              </Typography>
                              <Chip
                                label={card.sexo}
                                variant="outlined"
                                size="small"
                              />
                            </CardContent>
                          </Grid>
                          <Grid item xs={6} lg={6}>
                            <CardMedia
                              height={"100%"}
                              width={"100%"}
                              component="img"
                              image={card.img}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <div style={{ height: 20 }} />
              <Grid item xs={12} lg={12}>
                <Typography variant="h5" gutterBottom>
                  Descripción
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {animal?.description}
                </Typography>
                <PDFDownloadLink
                  document={<QR />}
                  fileName={animal?.name + "_qr"}
                >
                  {({ loading }) =>
                    loading ? (
                      <Button variant="outlined">
                        <CircularProgress />
                        Generando QR
                      </Button>
                    ) : (
                      <Button variant="outlined">Generar QR</Button>
                    )
                  }
                </PDFDownloadLink>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MainCard
              title={
                <>
                  Puestas
                  <Button
                    variant="outlined"
                    style={{ float: "right", marginRight: 10 }}
                    startIcon={<AddIcon />}
                    onClick={handleOpen}
                  >
                    Agregar
                  </Button>
                </>
              }
            >
              {puestas?.map((puesta) => (
                <Accordion
                  expanded={expanded === puesta.id}
                  onChange={handleAcordion(puesta.id)}
                  elevation={0}
                  disableGutters
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      Puesta {puesta.id}
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      {puesta.createdAt}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography><strong>Cantidad total de puestas: </strong>{puesta.amount}</Typography>
                    <Typography><strong>Cantidad total de muertes: </strong>{puesta.deads}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </MainCard>
            <div style={{ height: 20 }} />
            <MainCard
              title={
                <>
                  Galeria

                </>
              }
            >
              <Grid container direction="row" spacing={1}>
                {imgage?.map((imagen) => (
                  <Grid item xs md lg={2}>
                    <img
                      style={{ borderRadius: 10, width: 100, height: 100 }}
                      src={imagen.photo}
                      alt="new"
                    />
                  </Grid>
                ))}
              </Grid>
              <Formik
                initialValues={{
                  idAnimal: "",
                  photo: "",
                  token: "",
                }}
                onSubmit={async (values) => {
                  event.preventDefault();
                  var posdata = new FormData();
                  posdata.append("idAnimal", animal?.id);
                  posdata.append("photo", image1);
                  posdata.append("token", token);
                  for (let entry of posdata.entries()) {
                    console.log(entry[0], entry[1]);
                  }
                  try {
                    axios.post(postPhotoURL, posdata).then((response) => {
                      console.log(response);
                      if (response.data != "") {
                        window.alert("Creado exitosamente");
                      } else {
                        window.alert("Error al subir el archivo");
                      }
                    });
                  } catch (error) {
                    console.error(err);
                  }
                }}
              >
                {({
                  errors,
                  handleSubmit,
                  values,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <input type="file" id="file" onChange={handleChangeImg} >

                    </input>
                    <Button
                      variant="outlined"
                      style={{ float: "right", marginRight: 10 }}
                      startIcon={<AddIcon />}
                      type="submit"
                    >
                      Agregar
                    </Button>

                  </form>
                )}
              </Formik>
            </MainCard>
          </Grid>
        </Grid>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openModal}
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
              amount: 0,
              deads: 0,
              idAnimal: animal?.id,
              token: token
            }}
            onSubmit={async (values) => {
              try {
                axios
                  .post("http://localhost:8080/laying/postLaying", {
                    amount: values.amount,
                    deads: values.deads,
                    idAnimal: animal?.id,
                    token: token
                  })
                console.log(values)
                  .then(Response);
              } catch (error) {
                console.error(error);
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
              <form onSubmit={handleSubmit}>
                <Fade in={openModal}>
                  <Box sx={style}>
                    <Grid container spacing={2}>
                      <Grid item lg={12} xs={12}>
                        <Typography variant="h6" component="h2">
                          Registrar puesta
                        </Typography>
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <InputLabel style={{ fontSize: 12 }}>Cantidad</InputLabel>
                        <TextField
                          type="number"
                          id="amount"
                          required
                          value={values.amount}
                          fullWidth
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <InputLabel style={{ fontSize: 12 }}>Muertes</InputLabel>
                        <TextField
                          type="number"
                          id="deads"
                          required
                          value={values.deads}
                          fullWidth
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <Button fullWidth variant="outlined" type="submit">
                          Crear
                        </Button>
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <Button
                          fullWidth
                          variant="outlined"
                          color="error"
                          onClick={handleClose}
                        >
                          Cerrar
                        </Button>
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
              specie: animal?.specie.id,
              birthday: animal?.birthday,
              breedingPlace: animal?.breedingPlace.id,
              gender: animal?.gender,
              name: animal?.name,
              description: animal?.description,
              registerNumber: animal?.registerNumber,
              token: token,
            }}
            onSubmit={async (values) => {
              console.log(values)
              const headers = {
                authorization: `Bearer ${token}`,
                "Content-type": "multipart/form-data",
              };

              var formData = new FormData();
             
              formData.append("specie", 1);
              formData.append("breedingPlace", 1);
              formData.append("birthday", values.birthday);
              formData.append("gender", values.gender);
              formData.append("name", values.name);
              formData.append("description", values.description);
              formData.append("registerNumber", values.registerNumber);
              formData.append("token", token);
              formData.append("id", idAnimal);

              for (let entry of formData.entries()) {
                console.log(entry[0], entry[1]);
              }

              try {
                axios
                  .post("http://localhost:8080/animal/putAnimal",
                     formData
                  )
                  .then(Response);
              } catch (error) {
                console.log("Hubo un error al actualizar al ejemplar");
                console.error(error);
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
              <form onSubmit={handleSubmit}>
                <Fade in={openModalEdit}>
                  <Box sx={style}>
                    <Grid container spacing={2}>
                      <Grid item lg={12} xs={12}>
                        <Typography variant="h6" component="h2">
                          Editar a <strong>{animal?.name}</strong>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <InputLabel style={{ fontSize: 12 }}>Nombre</InputLabel>
                        <TextField
                          id="name"
                          required
                          value={values.name}
                          fullWidth
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <InputLabel style={{ fontSize: 12 }}>
                          Número de registro
                        </InputLabel>
                        <TextField
                          id="registerNumber"
                          required
                          value={values.registerNumber}
                          fullWidth
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} lg={6}>
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
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <InputLabel style={{ fontSize: 12 }}>
                          Fecha de nacimiento
                        </InputLabel>
                        <TextField
                          type="date"
                          value={values.birthday}
                          fullWidth
                          required
                          onChange={handleChange}
                          id="birthday"
                        />
                      </Grid>
                      {/* <Grid item xs={12} lg={6}>
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
                      </Grid> */}
                      <Grid item xs={12} lg={12}>
                        <InputLabel style={{ fontSize: 12 }}>
                          Descripción
                        </InputLabel>
                        <TextField
                          value={values.description}
                          fullWidth
                          multiline
                          required
                          id="description"
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <Button fullWidth variant="outlined" type="submit">
                          Actualizar
                        </Button>
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <Button
                          fullWidth
                          variant="outlined"
                          color="error"
                          onClick={handleCloseEdit}
                        >
                          Cerrar
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Fade>
              </form>
            )}
          </Formik>
        </Modal>
      </div >
    </>
  );
}