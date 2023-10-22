"use client"
import { CardContent } from "@mui/material";
import CardGeneration from "../Moleculas/CardGeneration"
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function CardGroup(params) {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={10}>
                        <Item>
                            <CardContent>
                                <CardGeneration />
                            </CardContent>
                        </Item>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}