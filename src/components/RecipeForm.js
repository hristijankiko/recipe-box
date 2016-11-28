import React from 'react';
import Button from './Button';
const RecipeForm = ({fields, formType, onNameChange, onDescriptionChange, onIngredientsChange, onFormSubmit}) => (
  <div className="recipeFormContainer" id="recipeFormContainer">
    <div className="recipeForm">
      <label htmlFor="recipeName">Recipe name:</label>
      <input type="text" name="recipeName" value={fields.name} onChange={(event) => {onNameChange(event.target.value)}}></input>
      <label htmlFor="recipeDescription">Recipe Description</label>
      <textarea value={fields.description} rows="5" onChange={(event) => {onDescriptionChange(event.target.value)}}></textarea>
      <label>Ingredients:</label>
      <input type="text" name="recipeIngredients" placeholder="Enter Ingredients, separated by commas." value={fields.ingredients}
      onChange={(event) => {onIngredientsChange(event.target.value)}}
      ></input>
      <Button onClick={() => {onFormSubmit(fields.index, fields.name, fields.description, formType, fields.ingredients)} } name="Save" />
    </div>
  </div>
);

export default RecipeForm;