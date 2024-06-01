import React, { useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { datos, datos2, datos3 } from "../datos.jsx";
import { CardC } from "./Cards.jsx";

export function Tabss() {
  const [activeTab, setActiveTab] = useState("Alma");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderCarousel = (data) => (
    <div className="w-full h-screen relative overflow-hidden">
      <div className="absolute bottom-4 left-1/2 z-50 flex flex-col justify-center items-center -translate-x-1/2 gap-4">
        <div className="flex gap-2">
          {data.map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                activeTab === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveTab(i)}
            />
          ))}
        </div>
      </div>
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${activeTab * 100}%)` }}>
        {data.map((item, index) => (
          <div key={item.id} className="w-full flex-shrink-0">
            <CardC img={item.url} nombre={item.nombre} descripcion={item.descripcion} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full p-0">
      <Tabs
        color="danger"
        aria-label="Tabs colors"
        radius="full"
        variant="underlined"
        className="w-full p-0 sticky top-0 z-50 flex gap-10 justify-center items-center bg-white"
      >
        <Tab key="Alma" title="Alma" className="w-full p-0" onClick={() => handleTabClick("Alma")}>
          {renderCarousel(datos)}
        </Tab>
        <Tab key="Andres" title="Andres" className="w-full p-0" onClick={() => handleTabClick("Andres")}>
          {renderCarousel(datos2)}
        </Tab>
        <Tab key="Juntos" title="Juntos" className="w-full p-0" onClick={() => handleTabClick("Juntos")}>
          {renderCarousel(datos3)}
        </Tab>
      </Tabs>
    </div>
  );
}
