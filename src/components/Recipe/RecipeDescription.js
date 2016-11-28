import React from 'react';
import Button from '../Button';
import IngredientsList from './IngredientsList';

const RecipeDescription = ({index, name, description, ingredients, onEditClick, onDeleteClick}) => (
    <div className="recipeDescription">
        <IngredientsList ingredients={ingredients} />
        <p>{description}</p>
        <Button className="editButton" onClick={() => {onEditClick(index, name, description, ingredients)}} name='Edit'/>
        <Button name="Delete" className="deleteButton" onClick={() => {onDeleteClick(index)}} />
    </div>
);

export default RecipeDescription;