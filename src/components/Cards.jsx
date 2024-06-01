import React, { useState, useEffect } from 'react';
import {Spoti} from "./CardSpo.jsx";

export function CardC({ img, nombre, descripcion }) {

    return (
        <div className="w-full h-screen flex justify-center items-center bg-cover" style={{ backgroundImage: `url(${img})` }}>
            <div className='w-full h-screen backdrop-blur-3xl flex items-center justify-center'>
                <Spoti img={img} nombre={nombre} descripcion={descripcion}/>
            </div>
        </div>
    );
}
