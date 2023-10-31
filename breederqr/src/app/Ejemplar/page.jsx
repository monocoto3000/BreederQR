"use client"
import React from "react";
import MainCard from "../Components/ui-component/cards/MainCard";
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
            img: "https://via.placeholder.com/300.png/09f/fff",
            descripcion: "qweqweqweqw qw,eq weq werqweqwer qwr  rt wrer   wre q r ewtre  weq w e r"
        }]
    return (
        <>
            <div style={{ margin: 20 }}>
                <MainCard title="Nombre del ejemplar">
                    <Grid container direction="row" spacing={2}>
                        <Grid container xs={12} lg={6} style={{ backgroundColor: "#564E58", boxSizing: "border-box", borderRadius: 20, padding: 20, margin: 10 }}>
                            <Grid item xs={12} lg={3}>
                                <img
                                    style={{ borderRadius: "100%", width: 200, height: 200, float: "left", marginRight: 15 }}
                                    src={pacientes[0].img}
                                    alt="new"
                                />
                            </Grid>
                            <Grid item xs={12} lg={9}>
                                <Typography variant="h4" gutterBottom color={"white"} fullWidth>
                                    Nombre: {pacientes[0].nombre}
                                </Typography>
                                <Typography variant="h4" gutterBottom color={"white"} fullWidth>
                                    Edad: {pacientes[0].edad}
                                </Typography>
                                <Typography variant="h4" gutterBottom color={"white"} fullWidth>
                                    Edad: {pacientes[0].nacimiento}
                                </Typography>
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
            </div >
        </>
    )
}
