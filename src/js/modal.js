let recipeFormContainer = document.getElementById("recipeFormContainer");
let app = document.getElementById('app');
let openModalWindow = () => {
  recipeFormContainer.style.display = "block";
};

// Open modal if click on add or edit button
app.addEventListener("click", (e) => {
  if(e.target.className === 'editButton' || e.target.className === 'addButton'){
    openModalWindow();
  }
  //Toggles + and - on recipe expand
  if(e.target.className === 'recipeHeader') {
    let span = e.target.getElementsByTagName("span")[0];
    span.innerHTML = span.innerHTML === "+" ? "-" : "+";
  }
  if(e.target.tagName === 'SPAN'){
    e.target.innerHTML = e.target.innerHTML === "+" ? "-" : "+";
  }
});

//Modal is closed if you click outside it.
if(recipeFormContainer){
  recipeFormContainer.addEventListener("click", function(e){
    if(e.target === recipeFormContainer){
      e.target.style.display = "none";
    }
    //Closes modal when Save button is clicked
    if(e.target.tagName === "BUTTON" && e.target.innerHTML === "Save"){
      recipeFormContainer.style.display = "none";
    }
  });
} else {
  console.log("recipeFormContainer error/not found");
}