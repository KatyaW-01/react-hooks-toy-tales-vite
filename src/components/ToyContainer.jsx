import React from "react";
import { useState} from "react";

import ToyCard from "./ToyCard";

function ToyContainer({toys, setToys}) {
  const [deletedToy, setDeletedToy] = useState(null)

  function handleDeleteToys(deletedToy) {
    const updatedToys = toys.filter(toy => toy.id !== deletedToy.id)
    setToys(updatedToys)
  }

  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard key={toy.id} toy={toy} setDeletedToy={setDeletedToy} handleDeleteToys={handleDeleteToys} />
      ))}
    </div>
  );
}

export default ToyContainer;
