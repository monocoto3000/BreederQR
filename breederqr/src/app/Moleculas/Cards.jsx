"use client"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Card, Grid, Typography, CardContent } from '@mui/material';
import Chip from '@mui/material/Chip';
import Icon from '../Atoms/Icon';
import InsertInvitationRoundedIcon from '@mui/icons-material/InsertInvitationRounded';

export default function Cards(aux) {
  console.log(aux.aux)
  function colorCard() {
    if (aux.aux.sexo === "H") {
      return "#fce4ec"
    } else {
      return "#c5cae9"
    }
  }

  function colorLineas() {
    if (aux.aux.sexo === "H") {
      return "#ec407a"
    } else {
      return "#283593"
    }
  }

  function chipColor() {
    if (aux.aux.sexo === "H") {
      return "rgba(236, 64, 122, 0.5)"
    } else {
      return "rgba(40, 53, 147, 0.5)"
    }
  }

  const CardStyle = styled(Card)(() => ({
    background: colorCard(),
    position: 'relative',
    borderRadius: "10px",
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '200px',
      height: '200px',
      border: '19px solid ',
      borderColor: colorLineas(),
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
      borderColor: colorLineas(),
      borderRadius: '50%',
      top: '90px',
      right: '-70px',
      opacity: "50%",
    }
  }));

  return (
    <>
      <CardStyle style={{ cursor: "pointer" }} onClick={() => window.location.href='../Ejemplar'}>
        <CardContent>
          <Grid container>
            <Grid item lg={4}>
              <Icon aux={aux.aux} />
            </Grid>
            <Grid item lg={4}>
              <Typography variant="h6">{aux.aux.nombre}</Typography>
              <Typography variant="body2" color="grey.900" sx={{ opacity: 0.6 }}>
                <a style={{ float: "left" }}>{aux.aux.sexo}</a> <br></br>
                <a style={{ float: "left" }}>{aux.aux.especie}</a> <br></br>
                <a style={{ float: "left" }}>{aux.aux.edad}</a><br></br>
              </Typography>
            </Grid>
            <Grid item lg={4}>
              <Chip icon={<InsertInvitationRoundedIcon color='white'/>} label={aux.aux.nacimiento} size='small' variant='filled' style={{backgroundColor: chipColor(), color: "white"}}/>
            </Grid>
          </Grid>
          <Typography variant="caption" color="black">
            <a style={{ float: "left", margin: "5px 0 5px 0" }}>{aux.aux.descripcion}</a> <br></br>
          </Typography>
        </CardContent>
      </CardStyle>
    </>
  )
}
