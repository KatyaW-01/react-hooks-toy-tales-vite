import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const [toys, setToys] = useState([])
  const [formData, setFormData] = useState({name: "", image: "", likes: 0})

  useEffect(() => {
    getToys()
  },[])

  async function getToys() {
    try {
      const response = await fetch("http://localhost:3001/toys")
      const toyData = await response.json() 
      setToys(toyData)
    } catch (error) {
      console.error("Error fetching toys", error)
    }
  }
  return (
    <>
      <Header />
      {showForm ? <ToyForm  formData={formData} setFormData={setFormData} setToys={setToys}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} setToys={setToys}/>
    </>
  );
}

export default App;
