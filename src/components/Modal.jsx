import React from "react";
import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

import { cartas } from '../datos.jsx';

export function ModalP({ isOpen, onClose, pregunta, r, no }) {
    const [respuesta, setRespuesta] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [color, setColor] = useState('default');
    const [juego, setJuego] = useState(false);

    const handleChange = (e) => {
        setRespuesta(e.target.value);
    }

    const handleSubmit = () => {
        if (no == 1) {
            if (respuesta.trim().toLowerCase() === 'friends') {
                setMensaje(cartas[0]);
                setColor('success');
                setJuego(true);
            } else if (respuesta.trim().toLowerCase() !== 'friends') {
                setMensaje('Respuesta incorrecta, intenta de nuevo');
                setColor('danger');
                setJuego(false);
            }
        } else if (no == 2) {
            if (respuesta.trim() === '1243') {
                setMensaje(cartas[1]);
                setColor('success');
                setJuego(true);
            } else if (respuesta.trim() !== '1243') {
                setMensaje('Respuesta incorrecta, intenta de nuevo');
                setColor('danger');
                setJuego(false);
            }
        } else if (no == 4) {
            if (respuesta.trim().toLowerCase() !== '23') {
                setMensaje('Respuesta incorrecta, intenta de nuevo');
                setColor('danger');
                setJuego(false);
            } else {
                setMensaje(cartas[3]);
                setColor('success');
                setJuego(true);
            }
        }
        else {
            setMensaje(cartas[2]);
            setColor('success');
            setJuego(true);
        }
    }

    const handleClose = () => {
        setMensaje('');
    };

    return (
        <>
            <Modal
                backdrop="opaque"
                isOpen={isOpen}
                onClose={onClose}
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-3xl">{pregunta}</ModalHeader>
                            <ModalBody>
                                {no != 3 &&
                                    <Input
                                        type="text"
                                        label="Respuesta"
                                        placeholder="Escribe tu respuesta aquí"
                                        className="max-w-full"
                                        color={color}
                                        onChange={handleChange}
                                    />
                                }
                                {no >= 3 &&
                                    <p>
                                        {r}
                                    </p>
                                }
                                {
                                    no == 2 &&
                                    <div>
                                        <p>
                                            1. Primer beso
                                        </p>
                                        <p>
                                            2. Primer abrazo
                                        </p>
                                        <p>
                                            3. Primer te amo
                                        </p>
                                        <p>
                                            4. Ser novios
                                        </p>
                                    </div>
                                }
                            </ModalBody>
                            <Mensaje mensaje={mensaje} n={no} juego={juego} />
                            <ModalFooter>
                                <Button color="default" variant="light" onPress={onClose}>
                                    Cerrar
                                </Button>
                                <Button color="danger" onPress={handleSubmit}>
                                    Enviar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}


function Mensaje({ mensaje, n, juego }) {
    return (
        <div className={`ventana-flotante ${mensaje ? 'visible' : ''} p-5` }>
            <div className="contenido">
                {!juego ? mensaje :
                    <div className="flex flex-col gap-5">
                        <h2 className="text-3xl font-bold">{mensaje.titulo}</h2>
                        <p className="text-justify">{mensaje.contenido}</p>
                        <p><strong>{mensaje.team}</strong></p>
                        <p><strong>{mensaje.final}</strong></p>
                    </div>
                }
            </div>
        </div>
    );
}


function Sunflower() {
    return (
      <div className="flex justify-center items-center h-screen bg-yellow-100">
        <div className="relative">
          {/* Centro */}
          <div className="w-16 h-16 bg-yellow-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          {/* Pétalos */}
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className={`absolute w-24 h-24 bg-yellow-500 rounded-full transform rotate-${30 * index} translate-y-24`}
            ></div>
          ))}
        </div>
      </div>
    );
  }