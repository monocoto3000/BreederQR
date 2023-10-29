"use client"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import Cards from './Cards';
import { Grid } from '@mui/material';

export default function CardGeneration() {
    let pacientes = [
        {
            nombre: "pablo",
            edad: 12,
            sexo: "H",
            nacimiento: "12/42/2004",
            img: "https://www.gstatic.com/webp/gallery3/1.sm.png",
            descripcion: "qweqweqweqw qw,eq weq werqweqwer qwr  rt wrer   wre q r ewtre  weq w e r"
        },
        {
            nombre: "pepe",
            edad: 23,
            sexo: "M",
            nacimiento: "12/42/2004",
            img: "https://placebear.com/g/200/200",
            descripcion: "qweqweqweqw qw qweqqeqwewr qwe qweq wewqrewt wre q r ewtre  weq w e r"
        },
        {
            nombre: "Rox",
            edad: 9,
            sexo: "H",
            nacimiento: "12/42/2004",
            img: "https://source.unsplash.com/user/c_v_r/1900×800",
            descripcion: "qweqweqweqw rewt wre q r ewtre  weq w e r"
        },
        {
            nombre: "Monica",
            edad: 9,
            sexo: "H",
            nacimiento: "12/42/2004",
            img: "https://source.unsplash.com/user/c_v_r/1900×800",
            descripcion: "qweqweqweqw qw,eq weq werqt wre q r ewtre  weq w e r"
        },
        {
            nombre: "Monica",
            edad: 9,
            sexo: "M",
            nacimiento: "12/42/2004",
            img: "https://source.unsplash.com/user/c_v_r/1900×800",
            descripcion: "qweqweqweqw qw,eq weq werqewtre  weq w e r"
        }
    ]
    return (
        <>
            {pacientes.map((paciente, index) => {
                return (
                    <Grid item xs={12} lg={3}>
                        <div key={index}>
                            <Cards aux={paciente} />
                        </div>
                    </Grid>
                );
            })}
        </>
    )
}
