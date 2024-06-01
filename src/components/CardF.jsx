import React, { useState } from "react";

export function Juegos({ img, nombre, descripcion }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="rounded-2xl p-10 relative grid h-[40rem] w-full items-end justify-center overflow-hidden text-center bg-gradient-to-b from-black/90 via-black/70 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {!hovered && (
                <>
                    <div
                        className="absolute inset-0 m-0 h-full w-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${img})` }}
                    >
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-black/90 via-black/70" />
                    </div>
                    <div className="relative px-6 md:px-12 w-full h-full">
                        <h2 className="mb-6 text-white text-2xl md:text-4xl font-bold leading-tight">
                            {nombre}
                        </h2>
                        <p className="mb-6 text-white text-lg">
                            {descripcion}
                        </p>
                    </div>
                </>
            )}
        </div>
    );
}
