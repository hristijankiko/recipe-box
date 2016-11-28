import React from 'react';
import RecipesListContainer from '../containers/RecipesListContainer';
import RecipeFormContainer from '../containers/RecipeFormContainer';
import Button from './Button';

const App = ({onAddClick}) => (
    <div id="app">
        <h1>Recipe Box</h1>
        <Button name="Add new recipe" className="addButton" onClick={onAddClick} />
        <RecipesListContainer />
        <RecipeFormContainer />
    </div>
);

export default App;