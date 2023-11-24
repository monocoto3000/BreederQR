"use client";
import React from "react";
import { Button, Grid, TextField, Typography,Modal, Box } from "@mui/material";
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
  const baseUrl = "http://localhost:8080/breedingPlace/postBreedingPlace";
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [openModalImg, setOpenModalImg] = React.useState(false);
  const handleOpenImg = () => setOpenModalImg(true);
  const handleCloseImg = () => setOpenModalImg(false);

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
          try {
            const token = Cookies.get("token");
            var posdata = new URLSearchParams();
            posdata.append("name", values.name);
            posdata.append("description", values.description);
            posdata.append("addres", values.addres);
            posdata.append("description", values.description);
            posdata.append("image", selectedfile)

            axios.post(baseUrl, posdata).then((response) => {
              window.location.href = "http://localhost:3000/";
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
                      <Stack spacing={2} direction="row">
                        <ColorButton
                          variant="contained"
                          onClick={handleOpenImg}
                        >
                          AGREGAR IMAGEN
                        </ColorButton>
                      </Stack>
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

                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      open={openModalImg}
                      onClose={handleCloseImg}
                      closeAfterTransition
                      slots={{ backdrop: Backdrop }}
                      slotProps={{
                        backdrop: {
                          timeout: 500,
                        },
                      }}
                    >
                      <Fade in={openModalImg}>
                        <Box sx={style}>
                          <MainCard title="Anexos">
                            <Grid container spacing={2}>
                              <Grid item xs={12}>
                                <Grid container spacing={2}>
                                  <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <div className="fileupload-view">
                                      <div className="row justify-content-center">
                                        <div>
                                          <div className="card">
                                            <div className="card-body">
                                              <div className="kb-data-box">
                                                <div className="kb-modal-data-title">
                                                  <div className="kb-data-title">
                                                    <h6>
                                                      Subir documentos e
                                                      imagenes
                                                    </h6>
                                                  </div>
                                                </div>
                                                <form>
                                                  <div className="kb-file-upload">
                                                    <div className="file-upload-box">
                                                      <input
                                                        type="file"
                                                        id="fileupload"
                                                        className="file-upload-input"
                                                        onChange={InputChange}
                                                        multiple
                                                      />
                                                      <span>
                                                        Arrastra y suelta o{" "}
                                                        <span className="file-link">
                                                          Seleccione sus
                                                          documentos
                                                        </span>
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div className="kb-attach-box mb-3">
                                                    {selectedfile.map(
                                                      (data) => {
                                                        const {
                                                          id,
                                                          nombre,
                                                          contenido,
                                                          imagen,
                                                          datetime,
                                                          filesize,
                                                        } = data;
                                                        return (
                                                          <div
                                                            className="file-atc-box"
                                                            key={id}
                                                          >
                                                            {nombre.match(
                                                              /.(jpg|jpeg|png|gif|svg)$/i
                                                            ) ? (
                                                              <div className="file-image">
                                                                {" "}
                                                                <img
                                                                  src={imagen}
                                                                  alt=""
                                                                />
                                                              </div>
                                                            ) : (
                                                              <div className="file-image">
                                                                <i className="far fa-file-alt"></i>
                                                              </div>
                                                            )}
                                                            <div className="file-detail">
                                                              <h6>{nombre}</h6>
                                                              <p>
                                                                <span>
                                                                  Size :{" "}
                                                                  {filesize}
                                                                </span>
                                                                <span className="ml-2">
                                                                  <br></br>
                                                                  Tiempo de
                                                                  modificación :{" "}
                                                                  {datetime}
                                                                </span>
                                                              </p>
                                                              <div className="file-actions">
                                                                <button
                                                                  type="button"
                                                                  className="file-action-btn"
                                                                  onClick={() =>
                                                                    DeleteSelectFile(
                                                                      id
                                                                    )
                                                                  }
                                                                >
                                                                  Eliminar
                                                                </button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        );
                                                      }
                                                    )}
                                                  </div>
                                                  <div className="kb-buttons-box">
                                                    <button
                                                      onClick={FileUploadSubmit}
                                                      className="btn btn-primary form-submit"
                                                      type="submit"
                                                    >
                                                      Subir
                                                    </button>
                                                  </div>
                                                </form>
                                                {Files.length > 0 ? (
                                                  <div className="kb-attach-box">
                                                    <hr />
                                                    {Files.map(
                                                      (data, index) => {
                                                        const {
                                                          nombre,
                                                          contenido,
                                                          imagen,
                                                          datetime,
                                                          filesize,
                                                        } = data;
                                                        return (
                                                          <div
                                                            className="file-atc-box"
                                                            key={index}
                                                          >
                                                            {nombre.match(
                                                              /.(jpg|jpeg|png|gif|svg)$/i
                                                            ) ? (
                                                              <div className="file-image">
                                                                {" "}
                                                                <img
                                                                  src={imagen}
                                                                  alt=""
                                                                />
                                                              </div>
                                                            ) : (
                                                              <div className="file-image">
                                                                <i className="far fa-file-alt"></i>
                                                              </div>
                                                            )}
                                                            <div className="file-detail">
                                                              <h6>{nombre}</h6>
                                                              <p>
                                                                <span>
                                                                  Tamaño:{" "}
                                                                  {filesize}
                                                                </span>
                                                                <span className="ml-3">
                                                                  Tiempo de
                                                                  modificación:{" "}
                                                                  {datetime}
                                                                </span>
                                                              </p>
                                                              <div className="file-actions">
                                                                <a
                                                                  href={
                                                                    contenido
                                                                  }
                                                                  className="file-action-btn"
                                                                  download={
                                                                    nombre
                                                                  }
                                                                >
                                                                  Descargar
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        );
                                                      }
                                                    )}
                                                  </div>
                                                ) : (
                                                  ""
                                                )}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </MainCard>
                        </Box>
                      </Fade>
                    </Modal>

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
