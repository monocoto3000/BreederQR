"use client"
import React from 'react';

export default function Icon(aux) {
    console.log(aux.aux.aux)
    return (
        <>
            <img
                style={{ borderRadius: "100%", width: 90, height: 90, float: "left", marginRight: 15 }}
                src={aux.aux.img}
                alt="new"
            />
        </>
    )
}
