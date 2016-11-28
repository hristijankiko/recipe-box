import {connect} from 'react-redux';
import RecipeDescription from '../components/Recipe/RecipeDescription';
import {setFormStatus, setFormFields, deleteRecipe} from '../actions';


const mapStateToProps = (state, {description, ingredients, name, index}) => {
  return {
    description: description,
    ingredients: ingredients,
    name: name,
    index: index
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onEditClick: (index, name, description, ingredients) => {
      dispatch(setFormStatus("editForm"));
      dispatch(setFormFields(index, name, description, ingredients));
    },
    onDeleteClick: (id) => {
      dispatch(deleteRecipe(id));
    }
  }
}

const RecipeDescriptionContainer = connect(mapStateToProps, mapDispatchToProps)(RecipeDescription);

export default RecipeDescriptionContainer;