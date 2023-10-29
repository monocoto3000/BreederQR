"use client"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';

export default function Icon(aux) {
    console.log(aux.aux.aux)
    return (
        <>
            <img
                style={{ borderRadius: "100%", width: 90, height: 90, float: "left", marginRight: 15 }}
                src={aux.aux.aux.img}
                alt="new"
            />
        </>
    )
}
