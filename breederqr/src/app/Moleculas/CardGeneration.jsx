"use client"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import Cards from './Cards';
import { Grid } from '@mui/material';
import MainCard from '../Components/ui-component/cards/MainCard';

export default function CardGeneration() {
    let pacientes = [
        {
            nombre: "pablo",
            edad: 12,
            sexo: "H",
            img: "https://www.gstatic.com/webp/gallery3/1.sm.png"
        },
        {
            nombre: "pepe",
            edad: 23,
            sexo: "M",
            img: "https://placebear.com/g/200/200"
        },
        {
            nombre: "cesar",
            edad: 9,
            sexo: "H",
            img: "https://source.unsplash.com/user/c_v_r/1900×800"
        },
    ]
    return (
        <>
            <MainCard title="Ejemplares">
                <Grid container direction="row" >
                    {pacientes.map((paciente, index) => {
                        return (
                            <div key={index}>
                                <Grid margin={2} width={300}>
                                    <Cards aux={paciente} />
                                </Grid>
                            </div>
                        );
                    })}
                </Grid>
            </MainCard>
        </>
    )
}
