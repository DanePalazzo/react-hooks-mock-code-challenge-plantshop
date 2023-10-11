import React, { useState } from "react";

function PlantCard({ index, plant, plants, setPlants }) {
  const {id, name, image, price } = plant
  const [inStock, setInStock] = useState(true)
  const [newPrice, setNewPrice] = useState("")

  function handleSubmit(e, index){
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({price: newPrice})
    })
    .then(res => res.json())
    .then(res => {
      {const updatedPlantsArray = plants.map((plant) => {
        if (plant.id === res.id) {
          return res;
        } else {
          return plant;
        }
      });
      setPlants(updatedPlantsArray);
    }
      // let inProccessPlants = [...plants]
      // inProccessPlants[index].price = res.price;
      // setPlants(inProccessPlants)
    })
  }

  function handleDelete(){
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(res => {
      const updatedPlantsArray = plants.filter((plant) => plant.id !== id);
      setPlants(updatedPlantsArray);
      console.log(res)
    })
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={() => setInStock(!inStock)}>In Stock</button>
      ) : (
        <button onClick={() => setInStock(!inStock)}>Out of Stock</button>
      )}
      <button onClick={(handleDelete)}>Delete</button>
      <form onSubmit={(e) => handleSubmit(e, index)}>
        <input type="number" name="price" placeholder="Price" value={newPrice} onChange={(e) => setNewPrice(parseFloat(e.target.value))}/>
        <button>Update Price</button>
      </form>
    </li>
  );
}

export default PlantCard;
