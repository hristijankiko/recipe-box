let nextRecipeId = 3;
export const addRecipe = (name, description, ingredients) => {
  nextRecipeId++;
  return {
    type: "ADD_RECIPE",
    name: name,
    description: description,
    ingredients: ingredients,
    id: nextRecipeId
  }
};

export const editRecipe = (id, name, description, ingredients) => {
  return {
    type: "EDIT_RECIPE",
    id: id,
    name: name,
    description: description,
    ingredients: ingredients
  }
}

export const deleteRecipe = (id) => ({
  type: 'DELETE_RECIPE',
  id: id
});

export const fillEditForm = (id) => ({
  type: "FILL_EDIT_FORM",
  id: id
})

export const setFormStatus = (status) => ({
  type: "SET_FORM_STATUS",
  status: status
});

export const setFormFields = (index, name, description, ingredients) => {
  if(ingredients){
    ingredients = ingredients.join(',');
  }
  return {
  type: "SET_FORM_FIELDS",
  index: index,
  name: name,
  description: description,
  ingredients: ingredients
}};

export const onFormNameChange = (input) => ({
  type: "SET_FORM_NAME",
  name: input
});

export const onFormDescriptionChange = (input) => ({
  type: "SET_FORM_DESCRIPTION",
  description: input
});

export const onFormIngredientsChange = (input) => ({
  type: "SET_FORM_INGREDIENTS",
  ingredients: input
});

export const onFormSubmit = (id, name, description, formType, ingredients) => {
  ingredients = ingredients.split(',');
  if(formType === "addForm") {
    return addRecipe(name, description, ingredients);
  } else if (formType === "editForm") {
    return editRecipe(id, name, description, ingredients);
  }
};