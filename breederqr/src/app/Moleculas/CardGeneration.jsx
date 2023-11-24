
import React from 'react';
import Cards from './Cards';
import { Grid } from '@mui/material';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function CardGeneration() {
    const baseURL = "http://localhost:8080/animal/getAllAnimals"
    const token = Cookies.get("token");
    console.log(token)
    const [ejemplares, setEjemplares] = useState(null);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(baseURL, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                "from": 6,
                "where": 0,
                "token": token
            }
        }).then(response => {
            setEjemplares(response.data);
            setLoading(false);
        })
            .catch(error => {
                console.log(error)
            });
    }, []);
    if (isLoading) {
        return <div className="App">Loading...</div>;
    }
    return (
        <>
            {ejemplares.map((ejemplar, index) => {
                return (
                    <Grid item xs={12} lg={12}>
                        <div key={index}>
                            <Cards aux={ejemplar} />
                        </div>
                    </Grid>
                );
            })}
        </>
    )
}
