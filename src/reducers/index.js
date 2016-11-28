import {combineReducers} from 'redux';
import recipes from './recipes';
import recipeFormStatus from './recipeFormStatus';

const recipesBoxApp = combineReducers({
  recipes,
  recipeFormStatus
})

export default recipesBoxApp;