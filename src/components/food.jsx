import React , { Component } from "react";
import recipesData from '../recipesData'
import './App.css'
import recipes from "../recipesData";


class RecipeApp extends  Component {
  constructor(props){
    super(props);
    this.state = {
      searchQuery: '',
      recipes: recipesData.sort((a , b ) => a.title.localeCompare(b.title)),
      selectedRecipie: null
};
  }

  handleRecipeSelect = (recipe) => {
    this.setState({ selectedRecipe : recipe})
  };

  handleSearch = (event) => {
    this.setState({ searchQuery : event.target.value})
  };


  render(){
    const {recipes , selectedRecipe , searchQuery} = this.state;
    const filteredRecipes = recipes.filter((recipe) =>
     recipe.title.toLowerCase().includes(searchQuery.toLowerCase()));
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>Davel's Recipe App</h1>
        </header>

        <div className="recipe-container">
          <div className="recipe-list">
            <h2>Recipes</h2>
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={this.handleSearch}
              className="search-bar"
            />
            <ul>
              {filteredRecipes.map((recipe) => (
                <li
                  key={recipe.id}
                  onClick={() => this.handleRecipeSelect(recipe)}
                >
                  {recipe.title} ({recipe.cookingTime} mins)
                </li>
              ))}
            </ul>
          </div>

          <div className="recipe-details">
            {selectedRecipe ? (
              <div>
                <h2>{selectedRecipe.title}</h2>
                <p><strong>Cooking Time:</strong> {selectedRecipe.cookingTime} minutes</p>
                <h3>Ingredients</h3>
                <ul>
                  {selectedRecipe.ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>

                <h3>Instructions</h3>
                <p>{selectedRecipe.instructions}</p>
              </div>
            ) : (
              <p>Select a recipe to view details</p>
            )}
          </div>
        </div>

        <footer>
          <p>&copy; 2025 davel's recipe</p>
        </footer>
      </div>
    );
  }
}

export default RecipeApp;



