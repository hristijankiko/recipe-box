import React from 'react';
import RecipeHeader from './RecipeHeader';
import RecipeDescription from './RecipeDescription';

const Recipe = ({name}) => (
    <div className="recipe">
        <RecipeHeader name={name} />
        <RecipeDescription />
    </div>
);

export default Recipe;