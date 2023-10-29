"use client"
import Nav from "../Components/Nav";
import CardGroup from "../Components/CardGroup";
import MainCard from "../Components/ui-component/cards/MainCard";
import { Grid } from '@mui/material';

export default function Ejemplares() {
    return (
        <>
            <Nav />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <CardGroup />
                </Grid>
            </Grid>

        </>
    )
}
