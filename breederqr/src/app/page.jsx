import styles from "./page.module.css";
import * as React from "react";
import Grid from "@mui/material/Grid";
import CardGeneration from "./Moleculas/CardGeneration";
import { Box } from "@mui/material";
import MortalityRate from "./Moleculas/MortalityRate";
import SalesRate from "./Moleculas/SalesRate";

export default function Home() {
  return (
    <Grid container direction="row" spacing={2}>
      <Grid item xs={12} lg={3}>
        <Grid direction={"column"} item xs={12} spacing={2}>
          <CardGeneration />
        </Grid>
      </Grid>

      <Grid item lg={9}>
        <div
          style={{
            margin: "20px",
          }}
        >
          <Grid container spacing={2} flexWrap={"wrap"} sx={{
            display:"flex",
            flexWrap:"wrap"
          }} >
            <Grid item xs={12} flexGrow={1} sx={{
              flexGrow:"1"
            }}>
              
                <MortalityRate
                  title="Taza de nacimiento"
                  chart={{
                    series: [
                      { label: "Vivos", value: 4344 },
                      { label: "Muertos", value: 5435 },
                    ],
                  }}
                />
              
            </Grid>
            <Grid item xs={12}>
              <SalesRate />
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}
