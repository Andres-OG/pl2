import React from "react";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import { HeartIcon } from "./icons/HeartIcon";
import { PauseCircleIcon } from "./icons/PauseCircleIcon";
import { NextIcon } from "./icons/NextIcon";
import { PreviousIcon } from "./icons/PreviousIcon";
import { RepeatOneIcon } from "./icons/RepeatOneIcon";
import { ShuffleIcon } from "./icons/ShuffleIcon";

export function Spoti({ img, nombre, descripcion }) {
  const [liked, setLiked] = React.useState(false);

  return (
    <Card
      isBlurred
      className="border-none bg-black/30 w-full md:h-auto h-full md:max-w-[70rem]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-1 md:col-span-4">
            <img
              src={img}
              alt="Foto"
              className="bg-center w-full h-64 lg:h-[25rem] shadow-md object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col col-span-1 md:col-span-8 h-full">
            <div className="flex flex-col md:flex-row justify-between items-start h-full">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-2xl md:text-[3rem] mt-2 text-white">
                  {nombre}
                </h3>
                <p className="text-sm md:text-lg text-white/50">21 meses</p>
                <h1 className="text-sm md:text-lg text-white font-medium mt-2">
                  {descripcion}
                </h1>
              </div>
              <Button
                isIconOnly
                className="text-default-900/60 bg-transparent mt-2 md:mt-0 md:-translate-y-2 md:translate-x-2"
                radius="full"
                variant="primary"
                onPress={() => setLiked((v) => !v)}
              >
                <HeartIcon
                  className={liked ? "[&>path]:stroke-foreground" : "text-white"}
                  fill={liked ? "text-white" : "none"}
                />
              </Button>
            </div>

            <div className="flex flex-col mt-3 gap-1">
              <Slider
                aria-label="Music progress"
                classNames={{
                  track: "bg-white",
                  thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground/70 after:rounded-full",
                }}
                color="primary"
                defaultValue={33}
                size="sm"
              />
              <div className="flex justify-between">
                <p className="text-xs md:text-small text-white">1:23</p>
                <p className="text-xs md:text-small text-white">4:32</p>
              </div>
            </div>

            <div className="flex w-full items-center justify-center mt-2 md:mt-0">
              <Button
                isIconOnly
                className="bg-transparent"
                radius="full"
                variant="dark"
              >
                <RepeatOneIcon className="text-white" />
              </Button>
              <Button
                isIconOnly
                className="bg-transparent mx-2"
                radius="full"
                variant="light"
              >
                <PreviousIcon className="text-white" />
              </Button>
              <Button
                isIconOnly
                className="w-auto h-auto bg-transparent"
                radius="full"
                variant="dark"
              >
                <PauseCircleIcon size={54} className="text-white" />
              </Button>
              <Button
                isIconOnly
                className="bg-transparent mx-2"
                radius="full"
                variant="dark"
              >
                <NextIcon className="text-white" />
              </Button>
              <Button
                isIconOnly
                className="bg-transparent"
                radius="full"
                variant="dark"
              >
                <ShuffleIcon className="text-white" />
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
