"use client"
import React from "react";
import MainCard from "../Components/ui-component/cards/MainCard";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Card, Grid, Typography, CardContent, Button } from '@mui/material';
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

export default function Ejemplares() {
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
        width: "60%",
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
                                <AlertTitle><strong>¿Desea eliminar al ejemplar {pacientes[0].nombre}?</strong></AlertTitle>
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
                                {pacientes[0].nombre}
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
                                <Button variant="outlined" style={{ float: "right", marginRight: 10 }} startIcon={<ModeEditIcon />}>Editar</Button>
                            </>
                        }>
                            <Grid container spacing={2} direction={"row"}>
                                <Grid item xs={12} lg={4}>
                                    <div style={{ textAlign: "center" }}>
                                        <img
                                            style={{ borderRadius: "100%", width: 180, height: 180 }}
                                            src={pacientes[0].img}
                                            alt="new"
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={12} lg={8}>
                                    <Chip label={
                                        <Typography variant="subtitle1">
                                            <b>{pacientes[0].nacimiento}</b>
                                        </Typography>
                                    } variant="outlined" style={{ float: "right" }} />
                                    <Typography variant="h5" gutterBottom>
                                        <b>Sexo:</b> {pacientes[0].sexo}
                                    </Typography>
                                    <Typography variant="h5" gutterBottom>
                                        <b>Edad:</b> {pacientes[0].edad} Años
                                    </Typography>
                                    <Typography variant="h5" gutterBottom>
                                        <b>Especie:</b> {pacientes[0].especie}
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
                                    {pacientes[0].descripcion}
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
                        <MainCard title="Galeria">
                            <Grid container direction="row" spacing={1}>
                                {imagenes.map((imagen) => (
                                    <Grid item xs md lg={2}>
                                        <img
                                            style={{ borderRadius: 10, width: 100, height: 100 }}
                                            src={imagen.img}
                                            alt="new"
                                        />
                                    </Grid>
                                ))}
                            </Grid>
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
                                        fullWidth />
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <InputLabel style={{ fontSize: 12 }}>
                                        Fecha
                                    </InputLabel>
                                    <TextField
                                        defaultValue={new Date().toDateString()}
                                        fullWidth />
                                </Grid>
                                <Grid item xs={12} lg={12}>
                                    <InputLabel style={{ fontSize: 12 }}>
                                        Nota
                                    </InputLabel>
                                    <TextField
                                        fullWidth
                                        multiline
                                        />
                                </Grid>
                                <Grid item xs={12} lg={12}>
                                    <Button fullWidth variant='outlined' onClick={handleClose}>guardar</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Fade>
                </Modal>
            </div>
        </>
    )
}

