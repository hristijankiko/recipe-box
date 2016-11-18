import React from 'react';
import Button from './Button';
import IngredientsList from './IngredientsList';

const RecipeDescription = () => (
    <div className="recipeDescription">
        <IngredientsList />
        <p>Description qwe qweqwqwe qwe qwe qwe</p>
        <Button name="Edit" />
        <Button name="Delete" />
    </div>
);

export default RecipeDescription;