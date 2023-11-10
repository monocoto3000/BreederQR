"use client"
import React from "react";
import MainCard from "../Components/ui-component/cards/MainCard";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useState } from "react";
import { styled } from '@mui/material/styles';
import { Card, Grid, Typography, CardContent } from '@mui/material';
import Icon from "../Atoms/Icon";
import Chip from '@mui/material/Chip';
import InsertInvitationRoundedIcon from '@mui/icons-material/InsertInvitationRounded';
import Divider from '@mui/material/Divider';

export default function Ejemplares() {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const pacientes = [
        {
            nombre: "Gecko3000",
            edad: 8,
            sexo: "H",
            nacimiento: "12/42/2004",
            especie: "Gecko amarillo",
            img: "https://via.placeholder.com/300.png/09f/fff",
            descripcion: "qweqweqweqw qw,eq weq werqweqwer qwr  rt wrer   wre q r ewtre  weq w e r"
        }]
    const cardData = [
        { id: 1, nombre: 'Felipe', sexo: "H", nacimiento: "12/42/2004", img: "https://via.placeholder.com/300.png/09f/fff", especie: "Amarrillo", parentesco: "Mamá" },
        { id: 2, nombre: 'Pancho', sexo: "M", nacimiento: "12/42/2004", img: "https://via.placeholder.com/300.png/09f/fff", especie: "Rojo", parentesco: "Papá" },
        { id: 3, nombre: 'Ernesto', sexo: "H", nacimiento: "12/42/2004", img: "https://via.placeholder.com/300.png/09f/fff", especie: "Azul", parentesco: "Hermano" },
        { id: 4, nombre: 'Pedro', sexo: "M", nacimiento: "12/42/2004", img: "https://via.placeholder.com/300.png/09f/fff", especie: "Depende" },
        { id: 5, nombre: 'Norm', sexo: "M", nacimiento: "12/42/2004", img: "https://via.placeholder.com/300.png/09f/fff", especie: "Pulpo" },
    ];
    function chipColor(card) {
        if (card.sexo === "H") {
            return "rgba(236, 64, 122, 0.5)"
        } else {
            return "rgba(40, 53, 147, 0.5)"
        }
    }
    const [startIndex, setStartIndex] = useState(0);
    const cardsPerPage = 4;

    const prevCard = () => {
        setStartIndex((prevStartIndex) =>
            (prevStartIndex - cardsPerPage) < 0
                ? cardData.length - cardsPerPage
                : prevStartIndex - cardsPerPage
        );
    };

    const nextCard = () => {
        setStartIndex((prevStartIndex) =>
            (prevStartIndex + cardsPerPage) % cardData.length
        );
    };
    const CardStyle = styled(Card)(() => ({
        background: "white",
        position: 'relative',
        borderRadius: "15px",
        '&:after': {
            content: '""',
            position: 'absolute',
            width: '200px',
            height: '200px',
            border: '19px solid ',
            borderColor: "#564E58",
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
            borderColor: "#564E58",
            borderRadius: '50%',
            top: '90px',
            right: '-70px',
            opacity: "50%",
        }
    }));

    return (
        <>
            <div style={{ margin: 20 }}>
                <MainCard title="Nombre del ejemplar">
                    <Grid container direction="row" spacing={2}>
                        <Grid container xs={12} lg={6} style={{  boxSizing: "border-box", margin: 30 }} spacing={2  }>
                            <Grid item>
                                <img
                                    style={{ borderRadius: "100%", width: 200, height: 200, float: "left", marginRight: 15 }}
                                    src={pacientes[0].img}
                                    alt="new"
                                />
                            </Grid>
                            <Divider orientation="vertical" flexItem>
                            </Divider>
                            <Grid item>
                                <Typography variant="h5" gutterBottom fullWidth>
                                    <Chip label={pacientes[0].nombre} variant="outlined" />
                                </Typography>
                                <Typography variant="h5" gutterBottom  fullWidth>
                                    Edad: {pacientes[0].edad}
                                </Typography>
                                <Typography variant="h5" gutterBottom  fullWidth>
                                    <b>Fecha de nacimiento:</b> {pacientes[0].nacimiento}
                                </Typography>
                                <Typography variant="h5" gutterBottom  fullWidth>
                                    Edad: {pacientes[0].edad} Años
                                </Typography>
                                <Typography variant="h5" gutterBottom fullWidth>
                                    Especie: {pacientes[0].especie} Años
                                </Typography>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} lg={1}>
                                    <button onClick={prevCard}>Anterior</button>
                                </Grid>
                                <Grid item xs={12} lg={10}>
                                    <div style={{ display: "flex", overflow: "hidden" }}>
                                        {cardData
                                            .slice(startIndex, startIndex + cardsPerPage)
                                            .map((card) => (
                                                <Grid item xs={12} lg={3}>
                                                    <div key={card.id} style={{ padding: "10px" }}>
                                                        <CardStyle>
                                                            <CardContent>
                                                                <Grid container direction={"row"}>
                                                                    <Grid item xs={12} lg={12}>
                                                                        <Chip icon={<InsertInvitationRoundedIcon color='white' />} label={card.nacimiento} size='small' variant='filled' style={{ backgroundColor: chipColor(card), color: "white" }} />
                                                                    </Grid>
                                                                    <Grid item xs={12} lg={12}>
                                                                        <Icon aux={card.img} />
                                                                    </Grid>
                                                                    <Grid item xs={12} lg={6}>
                                                                        <Typography variant="h6">{card.nombre}</Typography>
                                                                        <Typography variant="body2" color="grey.900" sx={{ opacity: 0.6 }}>
                                                                            <a style={{ float: "left" }}>{card.parentesco}</a> <br></br>
                                                                        </Typography>
                                                                    </Grid>
                                                                </Grid>
                                                            </CardContent>
                                                        </CardStyle>
                                                    </div>
                                                </Grid>
                                            ))}
                                    </div>
                                </Grid>
                                <Grid item xs={12} lg={1}>
                                    <button onClick={nextCard}>Siguiente</button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} lg={5}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Ordenar por</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Ordenar por"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Agregados recientemente</MenuItem>
                                        <MenuItem value={20}>Más antiguos</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Grid>
                </MainCard>
            </div>
        </>
    )
}

