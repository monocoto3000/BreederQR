"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Enlaces from "../Atoms/Enlaces";
import { Grid } from "@mui/material";
import "../../css/form.css"
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { OutlinedInput } from '@mui/material';
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import config from "../../../config";

const pages = [
  {
    nombrePage: "Inicio",
    href: "../",
  },

  {
    nombrePage: "Agregar ejemplar",
    href: "../form",
  },
  {
    nombrePage: "Ejemplares",
    href: "../Ejemplares",
  },

];
const perfil = [{
  nombre: "Cesar",
  apellido_paterno: "Hernandez",
  apellido_materno: "Gomez",
  usuario: "Cesar_3000",
  correo: "cesars@gmail.com",
  contrasenia: "1234"
}]
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "60%",
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <><AppBar position="static" style={{ background: "#65717d" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={2}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <AdbIcon sx={{ display: { md: "flex" }, mr: 1 }} />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                    display: "flex",
                  }}
                >
                  BREEDER QR
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} lg={9}>

              <Grid Container spacing={2} className="nav">
                {pages.map((page) => (
                  <Enlaces {...page} />
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12} lg={1}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "15px",
                  marginBottom: "15px",
                }}
              >
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem>
                      <Typography textAlign="center" variant='caption' style={{ color: "#b71c1c" }} onClick={() => config.auth.token = ""}><strong>Cerrar sesion</strong></Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}
export default Nav;