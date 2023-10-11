import React from "react";
import PlantCard from "./PlantCard";

function PlantList({displayPlants, plants, setPlants}) {
  return (
    <ul className="cards">
      {displayPlants.map((plant, index) => 
        <PlantCard key={plant.id} index={index} plant={plant} plants={plants} setPlants={setPlants}/>
      )}
    </ul>
  );
}

export default PlantList;
