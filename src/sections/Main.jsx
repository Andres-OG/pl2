import React, { useEffect, useState } from "react";
import { CarouselCustomNavigation } from '../components/Carousel';
import { Games } from '../components/Games';
import { Gallery } from "../components/Gallery";
import Confetti from 'react-confetti'; // Importa el componente de confeti
import BirthdayAnimation from '../components/Birtday'; // Importa el componente de animación

export function Main() {
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        // Muestra el confeti después de 1 segundo de cargar la página
        const timer = setTimeout(() => {
            setShowConfetti(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <main>
            <BirthdayAnimation />
            <CarouselCustomNavigation />
            <Games />
            {showConfetti && (
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                />
            )}
            <Gallery />
        </main>
    );
}
