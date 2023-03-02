import { useState } from 'react';
import './App.css';
import AddFormFood from './components/AddFormFood';
import FoodBox from './components/FoodBox';
import Search from './components/Search';

import food from './foods.json';

function App() {

  const [updatedFood, setUpdatedFood] = useState(food)
  const [updatedFoodDisplay, setupdatedFoodDisplay] = useState(food)
  const [isHide, setIsHide] = useState(true)

  const addNewFood = (newFood) => {
    const foodArrClone = [...updatedFood]
    foodArrClone.push(newFood)
    setUpdatedFood(foodArrClone)
    const foodDisplayArrClone = [...updatedFoodDisplay]
    foodDisplayArrClone.push(newFood)
    setupdatedFoodDisplay(foodDisplayArrClone)
  }

  const filterFromSearch = (searchedFood) => {
    const filteredArrFood = updatedFood.filter((eachFood) => {
      if (eachFood.name.includes(searchedFood)) {
        return true; 
      } else {
        return false;
      }
    })
    setupdatedFoodDisplay(filteredArrFood)
  }

  const deleteFood = (foodName) => {
    const filteredArr = updatedFoodDisplay.filter(eachFood => eachFood.name !== foodName)
    setupdatedFoodDisplay(filteredArr)
  }

  const displayAddForm = () => {
    setIsHide(false);
  }
  const hideAddForm = () => {
    setIsHide(true);
  }

  return (
    <div className="App">
      <h1>List</h1>
      <button onClick={displayAddForm}>Display form</button>    
      {isHide === false ? <AddFormFood addNewFood={addNewFood}/> : null}    
      {isHide === false ? <button onClick={hideAddForm}>Hide form</button> : null}    
      <Search filterFromSearch={filterFromSearch} />
      {updatedFoodDisplay.map((eachFood) => {
        return (
          <FoodBox 
            food={{
          name: eachFood.name,
          calories: eachFood.calories,
          image: eachFood.image,
          servings: eachFood.servings
        }}
        key={eachFood.name}
        deleteFood={deleteFood}
          />
        );
      })}
    </div>
  );
}

export default App;
