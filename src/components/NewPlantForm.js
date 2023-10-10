import React, { useState, useEffect } from "react";

function NewPlantForm({handleAddPlant}) {
  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: ""
  })

  function addPlant(e) {
    e.preventDefault()
    let newArray = [newPlant.name.trim(), newPlant.image.trim(), newPlant.price.trim()]
    const isEmpty = () => newArray.every((ele) => ele != "")
    console.log(isEmpty())
    if (isEmpty() === true) {
      fetch("http://localhost:6001/plants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPlant)
      })
        .then(res => res.json())
        .then(res => handleAddPlant(res))
      console.log("submitted!")
    } else {
      alert("Please fill every field.")
    }
  }

  function handleChange(e) {
    setNewPlant({ ...newPlant, [e.target.name]: e.target.value })
    console.log(newPlant)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(e) => addPlant(e)}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange} />
        <button type="submit" >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
