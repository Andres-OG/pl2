import React from "react";
import { recuerdos } from '../datos.jsx';
import { Juegos } from "./CardF.jsx";
import { Divider } from "@nextui-org/react";

export function Gallery() {
    return (
        <div className="flex flex-col p-20 gap-16 justify-center items-center">
            <h2 className="font-thin text-5xl">Es momento de recordar algunas cosas</h2>
            <Divider className="my-2"/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:grid-cols-4">
                {recuerdos.map((data) => (
                    <div key={data.id} >
                        <Juegos img={data.url} nombre={data.nombre} descripcion={data.descripcion} />
                    </div>
                ))}
            </div>
        </div>

    );
}
