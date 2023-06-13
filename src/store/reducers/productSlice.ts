import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRecipe } from "../../models/models";

interface RecipeState {
    allRecipes: IRecipe[];
    favoriteRecipes: IRecipe[];
    filteredRecipes: IRecipe[];
}

const initialState: RecipeState = {
    allRecipes: [],
    favoriteRecipes: [],
    filteredRecipes: [],
};

export const productSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        addRecipe(state, action: PayloadAction<any>){
            state.favoriteRecipes.push(action.payload);
        },
        deleteRecipe(state, action: PayloadAction<any>) {
            const recipeIdToDelete = action.payload.id;
            const index = state.favoriteRecipes.findIndex((recipe) => recipe.id === recipeIdToDelete);
            if (index !== -1) {
                state.favoriteRecipes.splice(index, 1);
            }
        },
        fetchAllRecipes(state, action: PayloadAction<any>){
            state.allRecipes = action.payload;
        },
        filterRecipes(state, action: PayloadAction<string>) {
            const category = action.payload;
            if (category === "all" || !category) {
                state.filteredRecipes = state.allRecipes;
            } else {
                state.filteredRecipes = state.allRecipes.filter((recipe) => recipe.category === category);
            }
        },
    },
});

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;
