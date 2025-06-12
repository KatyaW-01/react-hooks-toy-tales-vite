import React from "react";

function ToyCard({toy, setDeletedToy, handleDeleteToys}) {
  async function handleDelete() {
    try {
      const response = await fetch(`http://localhost:3001/toys/${toy.id}`, {
        method: "DELETE"
      });
      const deleted = await response.json()
      setDeletedToy(deleted) // adds the toy to be deleted to state
      handleDeleteToys(deleted)
    } catch (error) {
      console.error ("Error deleting toy:", error)
    }
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
