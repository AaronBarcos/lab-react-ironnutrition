import React, { useState } from 'react'

function AddFormFood(props) {

    const [nameInput, setNameInput] = useState("")
    const [imageInput, setImageInput] = useState("")
    const [caloriesInput, setCaloriesInput] = useState(0)
    const [servingsInput, setServingsInput] = useState(0)

    const handleNameChange = (event) => {
        setNameInput(event.target.value)
    }
    const handleImageChange = (event) => {
        setImageInput(event.target.value)
    }
    const handleCaloriesChange = (event) => {
        setCaloriesInput(event.target.value)
    }
    const handleServingsChange = (event) => {
        setServingsInput(event.target.value)
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();

        const newFood = {
            name: nameInput,
            image: imageInput,
            calories: caloriesInput,
            servings: servingsInput
        }

        props.addNewFood(newFood)
    }

  return (
    <div>
        <h2>Form to add</h2>
        <form onSubmit={handleSubmitForm}>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' value={nameInput} onChange={handleNameChange} />
            <br />
            <label htmlFor="image">Image:</label>
            <input type="text" name='image' value={imageInput} onChange={handleImageChange}/>
            <br />
            <label htmlFor="calories">Calories:</label>
            <input type="number" name='calories' value={caloriesInput} onChange={handleCaloriesChange}/>
            <br />
            <label htmlFor="servings">Servings:</label>
            <input type="number" name='servings' value={servingsInput} onChange={handleServingsChange}/>
            <br />
            <button>Add new food</button>
        </form>
    </div>
  )
}

export default AddFormFood