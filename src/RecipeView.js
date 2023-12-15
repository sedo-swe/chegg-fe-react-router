import React from "react";
import "./App.css"

function RecipeView ({ recipe, deleteRecipe }) {
    return (
        <tr>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img src={recipe.photo} width="150px" /></td>
            <td>{recipe.ingredients}</td>
            <td>{recipe.preparation}</td>
            <td>
                <button name="delete" onClick={deleteRecipe}>Delete</button>
            </td>
        </tr>
    );
}

export default RecipeView;