import React from "react";
import store from "../../stores/Store";
import RecipesDisp from "./RecipesDisp";
import { observer } from "mobx-react";
import CreateRecipeModal from "../Modal/CreateRecipeModal";
import RecipesCard from "./ResipesCard";

const Recipes = () => {
  // if (store.recipeList == null) {
  //   return <p>Loading...</p>;
  // }
  const findRecipes = (catgRecipes, catgName) => {
    return (
      <div className="item-display">
        {catgRecipes.map((rec) => (
          <div key={rec._id} className="margin-list">
            {console.log(rec.duration)}
            <RecipesCard recipe={rec} catgName={catgName} />
          </div>
        ))}
      </div>
    );
  };

  const allRecipes = store.catgList.map((catg) => (
    <div key={catg._id} className="recipe-div recipe-add">
      <h3>{catg.name}</h3>
      {findRecipes(catg.recipes, catg.name)}
    </div>
  ));
  return (
    <div className="recipe-page">
      <div className="recipe-list">
        <div className="recipes">{allRecipes}</div>
      </div>
      <div className="v-line"></div>
      <div className="recipe-list">
        <div className="recipes recipe-add">
          <CreateRecipeModal />
        </div>
      </div>
    </div>
  );
};

export default observer(Recipes);
