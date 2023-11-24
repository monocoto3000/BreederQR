"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Card, Grid, Typography, CardContent, CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import InsertInvitationRoundedIcon from '@mui/icons-material/InsertInvitationRounded';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import { useState } from 'react';
import Cookies from 'js-cookie';

export default function Cards(aux) {
  console.log(aux)
  const handleClick = () => {
    window.location.href = '../Ejemplar';
  };
  function colorCard() {
    if (aux.aux.gender === "H") {
      return "#fce4ec"
    } else {
      return "#c5cae9"
    }
  }

  function colorLineas() {
    if (aux.aux.gender === "H") {
      return "#ec407a"
    } else {
      return "#283593"
    }
  }

  function chipColor() {
    if (aux.aux.gender === "H") {
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
      <CardStyle  style={{ cursor: "pointer" }}
        onClick={() => {
          console.log(aux.aux)
          Cookies.set('animalId', aux.aux.id);

        }}>
          <CardActionArea href="/Ejemplar">
          <CardContent  >
          <Grid container>
            <Grid item lg={4}>
              <PetsRoundedIcon fontSize="large" style={{ width: "75%", height: "75%" }} />
            </Grid>
            <Grid item lg={4}>
              <Typography variant="h6">{aux.aux.name}</Typography>
              <Typography variant="body2" color="grey.900" sx={{ opacity: 0.6 }}>
                <a style={{ float: "left" }}>{aux.aux.gender}</a> <br></br>
                <a style={{ float: "left" }}>{aux.aux.specie.name}</a> <br></br>
                <a style={{ float: "left" }}>{aux.aux.id}</a> <br></br>
              </Typography>
            </Grid>
            <Grid item lg={4}>
              <Chip icon={<InsertInvitationRoundedIcon color='white' />} label={aux.aux.birthday} size='small' variant='filled' style={{ backgroundColor: chipColor(), color: "white" }} />
            </Grid>
          </Grid>
          <Typography variant="caption" color="black">
            <a style={{ float: "left", margin: "5px 0 5px 0" }}>{aux.aux.description}</a> <br></br>
          </Typography>
        </CardContent>
          </CardActionArea>
      </CardStyle>
    </>
  )
}
