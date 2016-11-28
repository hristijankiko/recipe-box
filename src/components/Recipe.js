import React from 'react';
import RecipeHeader from './Recipe/RecipeHeader';
import RecipeDescription from './Recipe/RecipeDescription';
import RecipeDescriptionContainer from '../containers/RecipeDescriptionContainer';

const Recipe = ({name, description, ingredients, index}) => (
    <div className="recipe">
        <label htmlFor={"toggleDescription-" + index}>
            <RecipeHeader name={name} index={index} />
        </label>
        <input type="checkbox" id={"toggleDescription-" + index} value="checked"></input>
        <RecipeDescriptionContainer description={description} ingredients={ingredients} name={name} index={index} />
    </div>
);

export default Recipe;