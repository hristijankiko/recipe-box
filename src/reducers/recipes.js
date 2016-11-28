const recipes = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_RECIPE':
      return [
        ...state,
          {
            name: action.name,
            description: action.description,
            ingredients: action.ingredients,
            id: action.id
          }
      ];
    case 'EDIT_RECIPE':
     let newState = state.slice();
     newState.forEach((recipe) => {
       if(recipe.id === action.id) {
         recipe.name = action.name,
         recipe.description = action.description,
         recipe.ingredients = action.ingredients
       }
     });
     return newState;
    case 'DELETE_RECIPE':
      return state.filter((recipe) => recipe.id != action.id);
  }
  return state;
}

export default recipes;