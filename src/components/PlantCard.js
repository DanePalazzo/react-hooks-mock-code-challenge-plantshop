import React, { useState } from "react";

function PlantCard({ id, name, image, price, index, plantsCurrent, setPlants }) {
  const [inStock, setInStock] = useState(true)
  const [newPrice, setNewPrice] = useState("")

  let inProccessPlants = [...plantsCurrent]
  console.log(inProccessPlants[index])


  function handleSubmit(e, index){
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({price: newPrice})
    })
    .then(res => res.json())
    .then(res => {
      console.log(index)
      console.log(inProccessPlants[index])
      inProccessPlants[index].price = res.price
      console.log(inProccessPlants)
      setPlants(inProccessPlants)
    })
  }

  function handleDelete(){
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(res => {
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



// let obj = {
//   first: first,
//   second: second,
//   third: third,
// }

// obj.first = last


// setPlants(...plantsCurrent.id = res)