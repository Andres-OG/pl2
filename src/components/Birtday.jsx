import React from 'react';
import { FaBirthdayCake } from "react-icons/fa";


const BirthdayAnimation = () => {
    return (
        <div className="flex justify-center items-center p-5 bg-white font-montserrat">
            <div className="text-center flex gap-3 justify-center items-center" style={styles.textContainer}>
                <FaBirthdayCake className="text-4xl font-bold mb-4"  />
                <h1 className="text-4xl font-bold mb-4" style={styles.animatedText}>¡Feliz Cumpleaños!</h1>
            </div>
        </div>
    );
}

const styles = {
    textContainer: {
        animation: 'bounce 2s infinite alternate',
    },
    animatedText: {
        marginBottom: '1rem',
    },
    plate: {
        width: '160px',
        height: '20px',
        backgroundColor: '#8a653a',
        borderRadius: '10px',
        margin: '0 auto',
    },
    layer: {
        position: 'absolute',
        width: '160px',
        height: '80px',
        backgroundColor: '#fcbfb7',
        borderRadius: '10px',
    },
    icing: {
        position: 'absolute',
        width: '100px',
        height: '10px',
        backgroundColor: '#ffded4',
        borderRadius: '5px',
        left: '50%',
        transform: 'translateX(-50%)',
        bottom: '240px',
    },
    drip: {
        position: 'absolute',
        width: '20px',
        height: '20px',
        backgroundColor: '#8a653a',
        borderRadius: '50%',
    },
    candle: {
        position: 'absolute',
        width: '20px',
        height: '100px',
        backgroundColor: '#ffeed3',
        borderRadius: '10px',
        bottom: '320px',
        left: '50%',
        transform: 'translateX(-50%)',
    },
    flame: {
        width: '20px',
        height: '40px',
        backgroundColor: '#ff8c00',
        borderRadius: '50%',
        position: 'relative',
        animation: 'flame 1s infinite alternate',
    },
}

export default BirthdayAnimation;
