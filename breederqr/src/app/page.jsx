import styles from "./page.module.css";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import CardGeneration from "./Moleculas/CardGeneration";
import { Box } from "@mui/material";
import MortalityRate from "./Moleculas/MortalityRate";
import SalesRate from "./Moleculas/SalesRate";

export default function Home() {
  return (
    <main className={styles.main}>
      <Grid container direction="row" spacing={2}>

        <Grid margin={3} direction={"column"} display={"grid"} container item xs={12} lg={4} spacing={4}>
            <CardGeneration/>
        </Grid>

        <Grid item lg={6} margin={3} display={"grid"} >
        <Box>
          <MortalityRate
            title="Taza de nacimiento"
            chart={{
              series: [
                { label: 'Vivos', value: 4344 },
                { label: 'Muertos', value: 5435 }
              ],
            }}
          />
        </Box>
        <Box>
          <SalesRate/>
        </Box>
        </Grid>

      </Grid>
    </main>
  );
}
