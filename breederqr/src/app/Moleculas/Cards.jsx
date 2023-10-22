"use client"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Card, Grid, Typography, CardContent } from '@mui/material';
import Button from '@mui/material/Button';

import Icon from '../Atoms/Icon';

export default function Cards(aux) {
    console.log(aux.aux)
    function colorCard() {
        if (aux.aux.sexo === "M") {
            return "linear-gradient(180deg, #FD9898 0%, rgba(253, 152, 152, 0.63) 100%)"
        } else {
            return "linear-gradient(180deg, #72A0C2 0%, rgba(114, 160, 194, 0.43) 100%)"
        }
    }

    function buttonColor() {
        if (aux.aux.sexo === "M") {
            return "linear-gradient(180deg, #FD9898 0%, rgba(253, 152, 152, 0.63) 100%)"
        } else {
            return "linear-gradient(180deg, #72A0C2 0%, rgba(114, 160, 194, 0.43) 100%)"
        }
    }

    const CardStyle = styled(Card)(() => ({
        background: colorCard(),
        position: 'relative',
        borderRadius: "20px",
        border: 0,
        '&:hover': {
        background: "red"
        }
    }));

    return (
        <>
            <CardStyle>
                <CardContent>
                    <Grid item>
                        <Icon aux={aux} />
                        <Typography variant="h4">{aux.aux.nombre}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" color="grey.900" sx={{ opacity: 0.6 }}>
                            <a style={{ float: "left" }}>{aux.aux.sexo}</a> <br></br>
                            <a style={{ float: "left" }}>{aux.aux.edad}</a><br></br>
                        </Typography>
                    </Grid>
                    <Button
                        style={{
                            marginLeft: "auto",
                            zIndex: 100,
                            display: "flex",
                            backgroundColor: buttonColor()
                        }}
                        variant="contained"> Ver más </Button>
                </CardContent>
            </CardStyle>
        </>
    )
}
