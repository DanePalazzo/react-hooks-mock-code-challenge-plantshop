import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  function handleAddPlant(res) {
    const newPlants = [...plants, res]
    setPlants(newPlants)
  }

  const displayPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  useEffect(() => {
    console.log(`useEffect was called`)
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setPlants(res)
      })
  }, [])

  return (
    <main>
      <NewPlantForm handleAddPlant={handleAddPlant} />
      <Search search={search} setSearch={setSearch} plants={plants} />
      <PlantList displayPlants={displayPlants} plants={plants} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
