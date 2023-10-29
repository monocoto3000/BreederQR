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

  const CardStyle = styled(Card)(() => ({
    background: colorCard(),
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '200px',
      height: '200px',
      border: '19px solid ',
      borderColor: colorLineas(),
      borderRadius: '50%',
      top: '65px',
      right: '-150px'
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '200px',
      height: '200px',
      border: '3px solid ',
      borderColor: colorLineas(),
      borderRadius: '50%',
      top: '145px',
      right: '-70px'
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
              backgroundColor: colorLineas()
            }}
            variant="contained"> Ver más </Button>
        </CardContent>
      </CardStyle>
    </>
  )
}
