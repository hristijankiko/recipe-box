const initialState = {
  formType: '',
  fields: {
    index: '',
    name: '',
    description: '',
    ingredients: ''
  }
}

const recipeFormStatus = (state=initialState, action) => {
  switch (action.type) {
    case 'SET_FORM_STATUS':
      return Object.assign({}, state, {
        formType: action.status
      })
    case 'SET_FORM_FIELDS':
      return Object.assign({}, state, {
        fields: {
          index: action.index,
          name: action.name,
          description: action.description,
          ingredients: action.ingredients
        }
      })
    case 'SET_FORM_NAME':
      return Object.assign({}, state, {
        fields: {
          name: action.name,
          description: state.fields.description,
          index: state.fields.index,
          ingredients: state.fields.ingredients
        }
      })
    case 'SET_FORM_DESCRIPTION':
      return Object.assign({}, state, {
        fields: {
          name: state.fields.name,
          description: action.description,
          index: state.fields.index,
          ingredients: state.fields.ingredients
        }
      });
    case 'SET_FORM_INGREDIENTS':
      return Object.assign({}, state, {
        fields: {
          name: state.fields.name,
          description: state.fields.description,
          index: state.fields.index,
          ingredients: action.ingredients
        }
      });
      
  }
  return state;
}

export default recipeFormStatus;