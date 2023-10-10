import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, plantsCurrent, setPlants}) {
  return (
    <ul className="cards">
      {plants.map((plant, index) => 
        <PlantCard key={plant.id} index={index} name={plant.name} image={plant.image} price={plant.price} id={plant.id} plantsCurrent={plantsCurrent} setPlants={setPlants}/>
      )}
    </ul>
  );
}

export default PlantList;
