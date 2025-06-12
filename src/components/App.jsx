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
      {showForm ? <ToyForm /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys}/>
    </>
  );
}

export default App;
