import React from 'react';
import './bird.css'; // Importamos el archivo CSS donde definiremos las animaciones

const BirthdayAnimation = () => {
    return (
        <div className="flex justify-center items-center p-5 bg-white">
            <div className="text-center flex gap-3 justify-center items-center">
                <h1 className="text-4xl font-bold mb-4 font-sans animated-text">¡Feliz Cumpleaños, preciosa!</h1>
            </div>
        </div>
    );
}

export default BirthdayAnimation;
