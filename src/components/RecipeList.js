import React from 'react';
import Recipe from './Recipe';

const RecipeList = ({recipes}) => (
    <div className = "recipeList">
        {recipes.map(
            (recipe) => (
                <Recipe 
                    key={recipe.id}
                    index={recipe.id}
                    name={recipe.name} 
                    description={recipe.description} 
                    ingredients={recipe.ingredients} 
                    />
            ))
        }
    </div>
);

export default RecipeList;