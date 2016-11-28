import {connect} from 'react-redux';
import RecipeForm from '../components/RecipeForm';
import {onFormNameChange, onFormDescriptionChange, onFormIngredientsChange, onFormSubmit} from '../actions';

const mapStateToProps = (state) => {
  return state.recipeFormStatus
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFormSubmit : (index, name, description, formType, ingredients) => {
      dispatch(onFormSubmit(index, name, description, formType, ingredients));
    },
    onNameChange : (name) => {
      dispatch(onFormNameChange(name));
    },
    onDescriptionChange: (description) => {
      dispatch(onFormDescriptionChange(description));
    },
    onIngredientsChange: (ingredients) => {
      dispatch(onFormIngredientsChange(ingredients));
    }
  }
}

const RecipeFormContainer = connect(mapStateToProps, mapDispatchToProps)(RecipeForm);

export default RecipeFormContainer;