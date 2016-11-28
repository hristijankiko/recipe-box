import {connect} from 'react-redux';
import RecipesList from '../components/RecipeList';

const mapStateToProps = (state) => {
  return {recipes: state.recipes}
}


const RecipesListContainer = connect(mapStateToProps)(RecipesList);

export default RecipesListContainer;