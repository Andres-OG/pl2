import React, { useState } from "react";
import libros from '../assets/img/libros.jpeg';
import nutria from '../assets/img/nutria.jpg';
import amren from '../assets/img/amren.avif';
import cumple from '../assets/img/cumple.jpg';
import { Juegos } from "./CardG.jsx";
import { Divider } from "@nextui-org/react";

export function Games() {
    return (
        <div className="p-20 flex flex-col gap-16 justify-center items-center">
            <h2 className="font-thin text-5xl">¿Quieres jugar algo?</h2>
            <Divider className="my-1"/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full justify-center">
                <Juegos no={1} img={libros} nombre={'Pregunta'} descripcion={'Si contestas bien la pregunta te ganas un premio'} pregunta={'¿Cuál es mi serie favorita?'} r={'Si contestas bien la pregunta te ganas un premio'} />
                <Juegos no={2} img={nutria} nombre={'Ordena'} descripcion={'Si ordenas bien la secuencia te ganas un premio'} pregunta={'Ordena la serie'} r={'Si las ordenas bien te ganas un premio'}/>
                <Juegos no={3} img={amren} nombre={'Regalo'} descripcion={'Solo toma tu premio'} pregunta={'Solo toma tu premio'} r={'Esta te la regalo por preciosa(:'}/>
                <Juegos no={4} img={cumple} nombre={'¡Feliz cumple!'} descripcion={'Si adivinas cuantos cumples ganas jajaja'} pregunta={'¿Cuántos años cumples?'} r={'Si contestas bien la preguntas te ganas un premio'}/>
            </div>
        </div>
    );
}
