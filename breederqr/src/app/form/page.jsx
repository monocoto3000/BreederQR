import React from "react";
import { Button, Card, Grid, TextField, Box, Item } from "@mui/material";
import MainCard from "../Components/ui-component/cards/MainCard";
import "../../css/form.css";

export default function form() {
  return (
    <>
      <Card>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <form>
                <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                  <Grid item xs={12} >
                      <img alt="Animalito">
                      </img>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      placeholder="Nombre"
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "#F7F7F9",
                        opacity: "75%",
                      }}
                    ></TextField>
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      placeholder="Tipo"
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "#F7F7F9",
                        opacity: "75%",
                      }}
                    ></TextField>
                  </Grid>
                  <Grid item>
                    <TextField
                      placeholder="Tipo"
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "#F7F7F9",
                        opacity: "75%",
                      }}
                    ></TextField>
                  </Grid>
                  <Grid item>
                    <TextField
                      placeholder="Tipo"
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "#F7F7F9",
                        opacity: "75%",
                      }}
                    ></TextField>
                  </Grid>
                  <Grid item>
                    <Button>AGREGAR</Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item xs={6}>
              <h1>hola</h1>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  );
}

/* 
   <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",marginTop:"35px"}}>
        <Card style={{ background: "#564E58", width: "35%", borderRadius:"15px", height:"500px" }}>
          <div>
            <div style={{
              display:"flex", flexDirection:"row",justifyContent:"center"
            }}>
              <img className="animalito" alt="Animalito" />
            </div>
            <div style={{
              display:"flex", flexDirection:"row",justifyContent:"center"
            }}>
               <form
              style={{
                display: "flex",
                flexDirection: "column",
                width:"25%",
                alignItems:"center",
                margin:"25px"
                
              }}
            >
              <TextField placeholder="Nombre" style={{
                margin:"10px",borderRadius:"5px", backgroundColor:"#F7F7F9", opacity:"75%", width:"200%"
              }}></TextField>
              <TextField placeholder="Tipo" style={{
                margin:"10px",borderRadius:"5px", backgroundColor:"#F7F7F9", opacity:"75%", width:"200%"
              }}></TextField>
              <Button>AGREGAR</Button>
            </form>
            </div>
           
          </div>
        </Card>
      </div>
*/
