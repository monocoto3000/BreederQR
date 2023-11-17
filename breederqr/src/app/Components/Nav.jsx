"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Enlaces from '../Atoms/Enlaces';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FilledInput from '@mui/material/FilledInput';
import { Button, OutlinedInput } from '@mui/material';

const pages = [
  {

    nombrePage: "Dashboard",
    href: "../"
  },
  {

    nombrePage: "subirImagen",
    href: "../Imagen"
  },
  {

    nombrePage: "Contactanos",
    href: "../form"
  }
  ,
  {

    nombrePage: "Repositorio",
    href: "../Ejemplares"
  },
  {

    nombrePage: "Ejemplar",
    href: "../Ejemplar"
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Enlaces {...page} />
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Typography textAlign="center" variant='caption'>Nombre: <strong>{perfil[0].nombre} {perfil[0].apellido_paterno} {perfil[0].apellido_materno}</strong></Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center" variant='caption'>Nombre de usuario: <strong>{perfil[0].usuario}</strong></Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center" variant='caption'>Correo: <strong>{perfil[0].correo}</strong></Typography>
              </MenuItem>
              <MenuItem onClick={handleOpen}>
                <Typography textAlign="center" variant='caption'><strong>Editar perfil</strong></Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center" variant='caption' style={{ color: "#b71c1c" }}><strong>Cerrar sesion</strong></Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar><Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
        <Fade in={open}>
          <Box sx={style}>
            <Grid container spacing={2}>
              <Grid item lg={12} xs={12}>
                <Typography variant="h6" component="h2">
                  Editar perfil
                </Typography>
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel style={{ fontSize: 12 }}>
                  Nombre
                </InputLabel>
                <TextField
                  defaultValue={perfil[0].nombre}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel style={{ fontSize: 12 }}>
                  Apellido paterno
                </InputLabel>
                <TextField
                  defaultValue={perfil[0].apellido_paterno}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel style={{ fontSize: 12 }}>
                  Apellido materno
                </InputLabel>
                <TextField
                  defaultValue={perfil[0].apellido_materno}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel style={{ fontSize: 12 }}>
                  Usuario
                </InputLabel>
                <TextField
                  defaultValue={perfil[0].usuario}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel style={{ fontSize: 12 }}>
                  Correo
                </InputLabel>
                <TextField
                  defaultValue={perfil[0].correo}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel style={{ fontSize: 12 }}>
                  Contraseña
                </InputLabel>
                <OutlinedInput
                  type={showPassword ? 'text' : 'password'}
                  defaultValue={perfil[0].contrasenia}
                  fullWidth
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Grid>
              <Grid item xs={12} lg={12}>
                <Button fullWidth variant='outlined' onClick={handleClose}>Guardar</Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
export default Nav;

{/*  */ }