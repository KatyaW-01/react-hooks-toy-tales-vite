import React from "react";

function ToyForm({formData, setFormData, setToys}) {
  function handleChange(event) {
    const {name, value} = event.target

    setFormData(prevFormData => ({
      ...prevFormData, [name]:value
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const response = await fetch("http://localhost:3001/toys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if(!response.ok) {
        throw new Error (`Error! Status: ${response.status}`)
      }
      const newToy = await response.json()
      setToys(prevToys => [...prevToys, newToy])
    } catch (error) {
      console.error("Error adding toy:", error)
    }
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
