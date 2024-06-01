import React from "react";
import { Button, useDisclosure } from "@nextui-org/react";
import { ModalP } from './Modal.jsx';

export function Juegos({ img, nombre, descripcion, pregunta, r, no }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div className="rounded-2xl relative grid h-[40rem] w-full items-end justify-center overflow-hidden text-center">
            <div
                className="absolute inset-0 m-0 h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
            >
                <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/70" />
            </div>
            <div className="relative py-14 px-6 md:px-12">
                <h2 className="mb-6 text-white text-4xl font-bold leading-[1.5]">
                    {nombre}
                </h2>
                <p className="mb-6 text-white text-lg">
                    {descripcion}
                </p>
                <Button shadow color="error" onPress={onOpen}>Jugar</Button>
            </div>
            <ModalP isOpen={isOpen} onClose={onClose} pregunta={pregunta} r={r} no={no}/>
        </div>
    );
}
