"use client"
import React from "react";
import MainCard from "../Components/ui-component/cards/MainCard";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Card, Grid, Typography, CardContent, Button, Autocomplete } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Page, Text, Document, Image, View } from "@react-pdf/renderer"
import CircularProgress from '@mui/material/CircularProgress';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import { useState } from "react";
import uniqid from 'uniqid';
import "../Components/Anexos.css"
import config from "../../../config";
import { useEffect } from "react";
import axios from "axios";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Ejemplares() {
    const token = config.auth.token
    const softDeleteAnimalURL = "http://localhost:8080/animal/deleteAnimal"

    const [open, setOpen] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);
    const handleAcordion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const styles = ({
        body: {
            paddingTop: 35,
            paddingBottom: 65,
            paddingHorizontal: 35,
        }
    });
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "70%",
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };
    const QR = () => {
        return (
            <Document>
                <Page wrap style={styles.body}>
                    <Text>soy un qr</Text>
                </Page>
            </Document>
        )
    }

    const getAnimalUrl = "http://localhost:8080/animal/getAnimalById?id=1"
    const [animal, setAnimal] = useState(null)
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(getAnimalUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                "id": 1
            }
        }).then(response => {
            setAnimal(response.data);
            setLoading(false);
        })
            .catch(error => {
                console.log(error)
            });
    }, []);

    const imagesURL = "http://localhost:8080/photo/getPhoto?idBreedingPace=1"
    const [imgage, setImage] = useState(null)
    useEffect(() => {
        axios.get(imagesURL, {
            params: {
                "idBreedingPace": 1
            }
        }).then(response => {
            setImage(response.data);
            setLoading(false);
        })
            .catch(error => {
                console.log(error)
            });
    }, []);

    const postPhotoURL = "http://localhost:8080/photo/postPhoto"
    const pacientes = [
        {
            nombre: "Gecko3000",
            edad: 8,
            sexo: "H",
            nacimiento: "12/42/2004",
            especie: "Gecko amarillo",
            img: "https://via.placeholder.com/300.png/09f/fff",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed nisi nunc. Integer nec turpis in urna eleifend imperdiet nec in augue. Curabitur dignissim sodales augue"
        }]

    const cardData = [
        { id: 1, nombre: 'Felipe', sexo: "H", nacimiento: "12/42/2004", img: "https://via.placeholder.com/300.png/09f/fff", especie: "Astrolopitecus", parentesco: "Mamá" },
        { id: 2, nombre: 'Pancho', sexo: "M", nacimiento: "12/42/2004", img: "https://via.placeholder.com/300.png/09f/fff", especie: "Tiranosaurio", parentesco: "Papá" },
        { id: 3, nombre: 'Ernesto', sexo: "H", nacimiento: "12/42/2004", img: "https://via.placeholder.com/300.png/09f/fff", especie: "Calamar", parentesco: "Hermano" },
    ];
    const Notas = [
        { id: 1, titulo: 'Nota 1', nota: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed nisi nunc. Integer nec turpis in urna eleifend imperdiet nec in augue. Curabitur dignissim sodales augue", fecha: "12/42/2004" },
        { id: 2, titulo: 'Nota 2', nota: "vestibulum venenatis libero interdum a. Integer vitae tortor placerat dui ultrices dictum. Suspendisse a porttitor nibh. Integer viverra mattis orci ac posuere", fecha: "12/42/2004" },
        { id: 3, titulo: 'Nota 3', nota: "Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id enim ornare arcu tristique malesuada nec eu nisi.", fecha: "12/42/2004" },
        { id: 4, titulo: 'Nota 4', nota: "Proin facilisis elementum neque quis sodales. Nullam ut diam et sem tincidunt faucibus ac id ante. Nunc pulvinar lacinia porttitor. Praesent varius sed leo at auctor", fecha: "12/42/2004" },
        { id: 5, titulo: 'Nota 5', nota: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum libero vitae est vehicula, et mattis nisl scelerisque.", fecha: "12/42/2004" },
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

    const sexoOptions = [{ label: "MACHO", id: 1 }, { label: "HEMBRA", id: 2 }, { label: "NO SEXADO", id: 3 }]
    const especieOptions = [{ label: "GECKO", id: 1 }, { label: "CABALLO", id: 2 }, { label: "VACA", id: 3 }]

    const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
            expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
            {...props}
        />
    ))(({ theme }) => ({
        backgroundColor:
            theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, .05)'
                : 'rgba(0, 0, 0, .02)',
        flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(-90deg)',
        }
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
                    return [
                        ...preValue,
                        selectedfile[index]
                    ]
                })
            }
            SetSelectedFile([]);
        } else {
            alert('No ha seleccionado ningun documento')
        }
    }
    const filesizes = (bytes, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    const InputChange = (e) => {
        let images = [];
        for (let i = 0; i < e.target.files.length; i++) {
            images.push((e.target.files[i]));
            let reader = new FileReader();
            let file = e.target.files[i];
            reader.onloadend = () => {
                let subCadena = reader.result.split(",")
                SetSelectedFile((preValue) => {
                    return [
                        ...preValue,
                        {
                            id: uniqid(),
                            nombre: e.target.files[i].name,
                            tipo: e.target.files[i].type.toString(),
                            contenido: subCadena[1],
                            imagen: reader.result,
                            datetime: e.target.files[i].lastModifiedDate.toLocaleString('en-IN'),
                            filesize: filesizes(e.target.files[i].size)
                        }
                    ]
                });
            }
            if (e.target.files[i]) {
                reader.readAsDataURL(file);
            }
        }
    }
    const DeleteSelectFile = (id) => {
        if (window.confirm("¿Seguro/a que desea borrar ese documento?")) {
            const result = selectedfile.filter((data) => data.id !== id);
            SetSelectedFile(result);
        } else {
            // alert('No');
        }
    }
    const putAnimal = "http://localhost:8080/animal/putAnimal"
    console.log(selectedfile)
    if (isLoading) {
        return <div className="App">Loading...</div>;
    }
    return (
        <>
            <div style={{ margin: 20 }}>
                <Box sx={{ width: '100%' }}>
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
                                <AlertTitle><strong>¿Desea eliminar al ejemplar {animal.name}?</strong></AlertTitle>
                            </Typography>
                            <Typography variant="caption" fontSize={15}>
                                Para continuar presione <strong>ELIMINAR</strong>
                            </Typography>
                            <br></br>
                            <Button
                                variant="outlined"
                                color="error"
                                style={{ marginTop: 5 }}
                                startIcon={<DeleteIcon />}>
                                Eliminar
                            </Button>
                        </Alert>
                    </Collapse>
                </Box>
                <Grid container direction="row" spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <MainCard title={
                            <>
                                {animal.name}
                                <Button
                                    variant="outlined"
                                    color="error"
                                    style={{ float: "right", marginRight: 10 }}
                                    startIcon={<DeleteIcon />}
                                    onClick={() => {
                                        setOpen(true);
                                    }}>
                                    Eliminar
                                </Button>
                                <Button variant="outlined" style={{ float: "right", marginRight: 10 }} startIcon={<ModeEditIcon />} onClick={handleOpenEdit}>Editar</Button>
                            </>
                        }>
                            <Grid container spacing={2} direction={"row"}>
                                <Grid item xs={12} lg={4}>
                                    <div style={{ textAlign: "center" }}>
                                        <img
                                            style={{ borderRadius: "100%", width: 180, height: 180 }}
                                            src={animal.birthday}
                                            alt="new"
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={12} lg={8}>
                                    <Chip label={
                                        <Typography variant="subtitle1">
                                            <b>{animal.birthday}</b>
                                        </Typography>
                                    } variant="outlined" style={{ float: "right" }} />
                                    <Typography variant="h5" gutterBottom>
                                        <b>Sexo:</b> {animal.gender}
                                    </Typography>
                                    <Typography variant="h5" gutterBottom>
                                        <b>Número de Registro:</b> {animal.register_number}
                                    </Typography>
                                    <Typography variant="h5" gutterBottom>
                                        <b>Especie:</b> {animal.specie.name}
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                        <b>Fecha de registro:</b> {animal.createdAt}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <div style={{ height: 20 }} />
                            <Grid container spacing={2} direction="row">
                                {cardData
                                    .map((card) => (
                                        <Grid item lg={4}>
                                            <Card sx={{ display: 'flex' }}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                    <Grid container spacing={2} direction="row">
                                                        <Grid item xs={6} lg={6}>
                                                            <CardContent>
                                                                <Typography variant="caption" color="text.secondary" component="div">
                                                                    {card.nacimiento}
                                                                </Typography>
                                                                <Typography component="div" variant="subtitle1">
                                                                    <b>{card.nombre}</b>
                                                                </Typography>
                                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                                    {card.parentesco}
                                                                </Typography>
                                                                <Typography variant="caption" color="text.secondary" component="div">
                                                                    {card.especie}
                                                                </Typography>
                                                                <Chip label={card.sexo} variant="outlined" size="small" />
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
                                    {animal.description}
                                </Typography>
                                <PDFDownloadLink document={<QR />} fileName={pacientes[0].nombre + "_qr"}>
                                    {({ loading }) => (loading ? <Button variant="outlined"><CircularProgress />Generando QR</Button> : <Button variant="outlined">Generar QR</Button>)}
                                </PDFDownloadLink>
                            </Grid>
                        </MainCard>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <MainCard title={
                            <>
                                Notas
                                <Button
                                    variant="outlined"
                                    style={{ float: "right", marginRight: 10 }}
                                    startIcon={<AddIcon />}
                                    onClick={handleOpen}>
                                    Agregar
                                </Button>
                            </>
                        }>
                            {Notas.map((nota) => (
                                <Accordion expanded={expanded === nota.id} onChange={handleAcordion(nota.id)} elevation={0} disableGutters>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                            {nota.titulo}
                                        </Typography>
                                        <Typography sx={{ color: 'text.secondary' }}>{nota.fecha}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {nota.nota}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>))}
                        </MainCard>
                        <div style={{ height: 20 }} />
                        <MainCard title={
                            <>
                                Galeria
                                <Button
                                    variant="outlined"
                                    style={{ float: "right", marginRight: 10 }}
                                    startIcon={<AddIcon />}
                                    onClick={handleOpenImg}>
                                    Agregar
                                </Button>
                            </>
                        }>
                            <Grid container direction="row" spacing={1}>
                                {imgage?.map((imagen) => (
                                    <Grid item xs md lg={2}>
                                        <img
                                            style={{ borderRadius: 10, width: 100, height: 100 }}
                                            src={imagen.url}
                                            alt="new"
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </MainCard>
                    </Grid>
                </Grid>
                <Formik
                    initialValues={{
                        title: '',
                        date: '',
                        note: ''
                    }}
                    onSubmit={async (values) => {
                        console.log(values)
                        await new Promise((r) => setTimeout(r, 500));
                        console.log("funciona o me mato")
                        // const token = Cookies.get('token');
                        axios.post(baseURL,
                            {
                                "title": values.title,
                                "date": values.date,
                                "note": values.note,
                            }, {
                            headers: {
                                Authorization: `Bearer ${token}`,
                                'Content-Type': 'application/json',
                            }
                        })
                            .then((response) => {
                                setPost(response.data);
                            });
                    }}
                >
                    {({ errors, handleBlur, handleChange, handleSubmit, values, setFieldValue }) => (
                        <form onSubmit={handleSubmit}>
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
                                <Fade in={openModal}>
                                    <Box sx={style}>
                                        <Grid container spacing={2}>
                                            <Grid item lg={12} xs={12}>
                                                <Typography variant="h6" component="h2">
                                                    Crear nota
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} lg={6}>
                                                <InputLabel style={{ fontSize: 12 }}>
                                                    Titulo
                                                </InputLabel>
                                                <TextField
                                                    id="title"
                                                    required
                                                    value={values.title}
                                                    onChange={handleChange}
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12} lg={6}>
                                                <InputLabel style={{ fontSize: 12 }}>
                                                    Fecha
                                                </InputLabel>
                                                <TextField
                                                    required
                                                    id="date"
                                                    type="date"
                                                    value={values.date}
                                                    onChange={handleChange}
                                                    fullWidth />
                                            </Grid>
                                            <Grid item xs={12} lg={12}>
                                                <InputLabel style={{ fontSize: 12 }}>
                                                    Nota
                                                </InputLabel>
                                                <TextField
                                                    id="note"
                                                    required
                                                    value={values.note}
                                                    fullWidth
                                                    multiline
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12} lg={12}>
                                                <Button fullWidth variant='outlined' onClick={handleClose} type="submit">guardar</Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Fade>
                            </Modal>
                        </form>
                    )}
                </Formik>

                <Formik
                    initialValues={{
                        specie: animal.specie.id,
                        birthday: animal.birthday,
                        breedingPlace: animal.breedingPlace.id,
                        gender: animal.gender,
                        name: animal.name,
                        description: animal.description,
                        register_number: animal.register_number,
                        token: token
                    }}
                    onSubmit={async (values) => {
                        try {
                            axios.put(putAnimal, {
                                specie: values.specie,
                                breedingPlace: values.breedingPlace,
                                birthday: values.birthday,
                                gender: values.gender,
                                name: values.name,
                                description: values.description,
                                register_number: values.register_number,
                                token: token
                            }).then(Response);
                            console.log("Ejemplar actualizado exitosamente")
                        } catch (error) {
                            console.log("Hubo un error al actualizar al ejemplar")
                            console.error(error);
                        }
                    }}
                >
                    {({ errors, handleBlur, handleChange, handleSubmit, values, setFieldValue }) => (
                        <form onSubmit={handleSubmit}>
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
                                                    Editar a <strong>{animal.name}</strong>
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} lg={6}>
                                                <InputLabel style={{ fontSize: 12 }}>
                                                    Nombre
                                                </InputLabel>
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
                                                    id="register_number"
                                                    required
                                                    onChange={handleChange}
                                                    value={values.register_number}
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12} lg={6}>
                                                <FormControl>
                                                    <FormLabel id="demo-radio-buttons-group-label">Sexo</FormLabel>
                                                    <RadioGroup
                                                        aria-labelledby="demo-radio-buttons-group-label"
                                                        defaultValue={1}
                                                        id="gender"
                                                        name="radio-buttons-group"
                                                        row
                                                        value={values.gender}
                                                    >
                                                        <FormControlLabel control={<Radio />} label="MACHO" value={1} />
                                                        <FormControlLabel control={<Radio />} label="HEMBRA" value={2} />
                                                        <FormControlLabel control={<Radio />} label="NO SEXADO" value={3} />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} lg={3}>
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
                                            <Grid item xs={12} lg={3}>
                                                <FormControl>
                                                    <FormLabel id="demo-radio-buttons-group-label">Especie</FormLabel>
                                                    <RadioGroup
                                                        id="specie"
                                                        value={values.specie}
                                                        aria-labelledby="demo-radio-buttons-group-label"
                                                        defaultValue={1}
                                                        name="radio-buttons-group"
                                                        row
                                                    >
                                                        <FormControlLabel control={<Radio />} label="GECKO" value={1} />
                                                        <FormControlLabel control={<Radio />} label="CABALLO" value={2} />
                                                        <FormControlLabel control={<Radio />} label="VACA" value={3} />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>
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
                                            <Grid item xs={12} lg={12}>
                                                <Button fullWidth variant='outlined' onClick={handleCloseEdit} type="sumbit">Actualizar</Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Fade>
                            </Modal>
                        </form>
                    )}
                </Formik>

                <Formik
                    initialValues={{
                        idAnimal: '',
                        photo: '',
                        token: '',
                    }}
                    onSubmit={async (values) => {
                        axios.post(postPhotoURL,
                            {
                                "idAnimal": values.specie,
                                "photo": selectedfile,
                                "token": token
                            }
                        )
                    }}
                >
                    {({ errors, handleBlur, handleChange, handleSubmit, values, setFieldValue }) => (
                        <form onSubmit={handleSubmit}>
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
                                                                                            <h6>Subir documentos e imagenes</h6>
                                                                                        </div>
                                                                                    </div>
                                                                                    <form>
                                                                                        <div className="kb-file-upload">
                                                                                            <div className="file-upload-box">
                                                                                                <input type="file" id="fileupload" className="file-upload-input" onChange={InputChange} multiple />
                                                                                                <span>Arrastra y suelta o <span className="file-link">Seleccione sus documentos</span></span>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="kb-attach-box mb-3">
                                                                                            {selectedfile.map((data) => {
                                                                                                const { id, nombre, contenido, imagen, datetime, filesize } = data;
                                                                                                return (
                                                                                                    <div className="file-atc-box" key={id}>
                                                                                                        {nombre.match(/.(jpg|jpeg|png|gif|svg)$/i) ?
                                                                                                            <div className="file-image"> <img src={imagen} alt="" /></div> :
                                                                                                            <div className="file-image"><i className="far fa-file-alt"></i></div>}
                                                                                                        <div className="file-detail">
                                                                                                            <h6>{nombre}</h6>
                                                                                                            <p><span>Size : {filesize}</span><span className="ml-2"><br></br>Tiempo de modificación : {datetime}</span></p>
                                                                                                            <div className="file-actions">
                                                                                                                <button type="button" className="file-action-btn" onClick={() => DeleteSelectFile(id)}>Eliminar</button>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                );
                                                                                            })}
                                                                                        </div>
                                                                                        <div className="kb-buttons-box">
                                                                                            <button onClick={FileUploadSubmit} className="btn btn-primary form-submit" type="submit">Subir</button>
                                                                                        </div>
                                                                                    </form>
                                                                                    {Files.length > 0 ?
                                                                                        <div className="kb-attach-box">
                                                                                            <hr />
                                                                                            {Files.map((data, index) => {
                                                                                                const { nombre, contenido, imagen, datetime, filesize } = data;
                                                                                                return (
                                                                                                    <div className="file-atc-box" key={index}>
                                                                                                        {nombre.match(/.(jpg|jpeg|png|gif|svg)$/i) ?
                                                                                                            <div className="file-image"> <img src={imagen} alt="" /></div> :
                                                                                                            <div className="file-image"><i className="far fa-file-alt"></i></div>}
                                                                                                        <div className="file-detail">
                                                                                                            <h6>{nombre}</h6>
                                                                                                            <p><span>Tamaño: {filesize}</span><span className="ml-3">Tiempo de modificación: {datetime}</span></p>
                                                                                                            <div className="file-actions">
                                                                                                                <a href={contenido} className="file-action-btn" download={nombre}>Descargar</a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                );
                                                                                            })}
                                                                                        </div>
                                                                                        : ''}
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
                        </form>
                    )}
                </Formik>
            </div>

        </>
    )
}

