import React from 'react';

const RecipeHeader = ({name, index}) => (
            <h2 className="recipeHeader">{name}<span className="recipeMore">+</span></h2>
);

export default RecipeHeader;