"use client"
import React from "react";
import MainCard from "../Components/ui-component/cards/MainCard";
import { Grid } from '@mui/material';
import CardGeneration from "../Moleculas/CardGeneration";
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
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../../../config";

export default function Ejemplares() {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const baseURL = "http://localhost:8080/animal/getAllAnimals"
    const token = config.auth.token
    console.log(token)
    const [ejemplares, setEjemplares] = useState(null);
    useEffect(() => {
        axios.get(baseURL, {
            params: {
                "token": token
            }
        }).then(response => {
            setEjemplares(response?.data);
        })
            .catch(error => {
                console.log(error)
            });
    }, []);
    console.log(ejemplares)
    return (
        <>
            <div style={{ margin: 20 }}>
                <MainCard title="Ejemplares">
                    <Grid container direction="row" spacing={2}>
                        <Grid item xs={12} lg={4}>
                            <TextField id="outlined-basic" label="Buscar" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12} lg={4}>
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
                        <Grid item xs={12} lg={3}>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Sexo</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Hembra" />
                                    <FormControlLabel value="male" control={<Radio />} label="Macho" />
                                    <FormControlLabel value="other" control={<Radio />} label="Indefinido" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} lg={1}>
                            <Button variant="contained" size="large" style={{ backgroundColor: "#564E58" }} fullWidth>Aplicar</Button>
                        </Grid>
                        {ejemplares.map((ejemplar, index) => {
                            return (
                                <Grid item xs={12} lg={3}>
                                    <div key={index}>
                                        <Cards aux={ejemplar} />
                                    </div>
                                </Grid>
                            );
                        })}
                    </Grid>
                </MainCard>
            </div >
        </>
    )
}
