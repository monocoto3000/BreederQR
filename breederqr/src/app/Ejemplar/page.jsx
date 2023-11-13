"use client"
import React from "react";
import MainCard from "../Components/ui-component/cards/MainCard";
import Box from '@mui/material/Box';
import { useState } from "react";
import { styled } from '@mui/material/styles';
import { Card, Grid, Typography, CardContent } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';

export default function Ejemplares() {
    const [age, setAge] = React.useState('');
    const [expanded, setExpanded] = React.useState(false);
    const handleAcordion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
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
        { id: 2, nombre: 'Pancho', sexo: "M", nacimiento: "12/42/2004", img: "https://via.placeholder.com/300.png/09f/fff", especie: "Tiranosaurio Rex", parentesco: "Papá" },
        { id: 3, nombre: 'Ernesto', sexo: "H", nacimiento: "12/42/2004", img: "https://via.placeholder.com/300.png/09f/fff", especie: "Calamar Azul", parentesco: "Hermano" },
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
    function chipColor(card) {
        if (card.sexo === "H") {
            return "rgba(236, 64, 122, 0.5)"
        } else {
            return "rgba(40, 53, 147, 0.5)"
        }
    }

    const CardStyle = styled(Card)(() => ({
        background: "rgba(208, 220, 173, 1)",
        position: 'relative',
        borderRadius: "15px",
        paddingBottom: 10,
        '&:after': {
            content: '""',
            position: 'absolute',
            width: '200px',
            height: '200px',
            border: '19px solid ',
            borderColor: "rgba(167, 198, 80, 1)",
            borderRadius: '50%',
            top: '30px',
            right: '-150px',
            opacity: "50%",
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            width: '200px',
            height: '200px',
            border: '3px solid ',
            borderColor: "rgba(167, 198, 80, 1)",
            borderRadius: '50%',
            top: '90px',
            right: '-70px',
            opacity: "50%",
        }
    }));


    return (
        <>
            <div style={{ margin: 20 }}>
                <Grid container direction="row" spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <MainCard title={pacientes[0].nombre}>
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
                                <Grid item xs={12} lg={6}>
                                    <Typography variant="h5" gutterBottom>
                                        <b>Sexo:</b> {pacientes[0].sexo}
                                    </Typography>
                                    <Typography variant="h5" gutterBottom>
                                        <b>Fecha de nacimiento:</b> {pacientes[0].nacimiento}
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
                                                                <Typography component="div" variant="h5">
                                                                    {card.nombre}
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
                            </Grid>
                        </MainCard>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <MainCard title="Notas">
                            {Notas.map((nota) => (
                                <Accordion expanded={expanded === nota.id} onChange={handleAcordion(nota.id)}>
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
                                            style={{ borderRadius: 10, width: 120, height: 120 }}
                                            src={imagen.img}
                                            alt="new"
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </MainCard>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

