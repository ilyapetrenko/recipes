import React from 'react';
import {RecipesList} from "./components/RecipesList";
import {Route, Routes} from "react-router-dom";
import {SavedRecipes} from "./components/SavedRecipes";
import {RecipeCard} from "./components/RecipeCard";

function App() {
  return (
    <div className="flex justify-center">
        <Routes>
            <Route path="/" element={<RecipesList />}/>
            <Route path="/favourites" element={<SavedRecipes/>}/>
            <Route path="/recipe/:id" element={<RecipeCard />} />
        </Routes>
    </div>
  );
}

export default App;
