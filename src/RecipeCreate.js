import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [rating, setRating] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleNameChange = (event) => setName(event.target.value);
  const handleCuisineChange = (event) => setCuisine(event.target.value);
  const handlePhotoChange = (event) => setPhoto(event.target.value);
  const handleIngredientsChange = (event) => setIngredients(event.target.value);
  const handlePreparationChange = (event) => setPreparation(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe({name, cuisine, photo, ingredients, preparation});
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input id="name" name="name" type="text" placeholder="Name" required="true" onChange={handleNameChange} value={name} /></td>
            <td><input id="cuisine" name="cuisine" type="text" placeholder="Cuisine" required="true" onChange={handleCuisineChange} value={cuisine} /></td>
            <td><input id="photo" name="photo" type="url" placeholder="URL" required="true" onChange={handlePhotoChange} value={photo} /></td>
            <td><textarea id="ingredients" name="ingredients" placeholder="Ingredients" required="true" onChange={handleIngredientsChange} value={ingredients} /></td>
            <td><textarea id="preparation" name="preparation" placeholder="Preparation" required="true" onChange={handlePreparationChange} value={preparation} /></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
