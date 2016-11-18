import React from 'react';
import Recipe from './Recipe';

const RecipeList = ({recipes}) => (
    <div>
    {recipes.map(
        (recipe, i) => (
            <Recipe key={i} name={recipe.name} />
        ))
    }
    <Recipe name="Bacon" />
    <Recipe name="Apples" />
    <Recipe name="Rice" />
    <Recipe name="Noodles" />
    </div>
);

export default RecipeList;