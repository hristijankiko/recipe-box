import React from 'react';
import Ingredient from './Ingredient';

const IngredientsList = ({ingredients=[]}) => (
    <ul>
        {ingredients.map((ingredient, i) => {
            return <Ingredient key={i} name={ingredient} />
        })}
    </ul>
);

export default IngredientsList;