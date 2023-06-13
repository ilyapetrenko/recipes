import React from "react";
import { useSearchProductsQuery } from "../store/reducers/productApi";
import { IRecipe } from "../models/models";
import { Recipe } from "./Recipe";
import { useAppSelector } from "../hooks/selector";
import { useActions } from "../hooks/actions";
import { useEffect } from "react";
import {WorkSpace} from "./WorkSpace";

export const RecipesList = () => {
    const { data: recipes, isLoading, isError } = useSearchProductsQuery();
    const currentRecipes: IRecipe[] | null = useAppSelector((state) => state.products.allRecipes);
    const favouriteRecipes: IRecipe[] | null = useAppSelector((state) => state.products.favoriteRecipes);
    const filteredRecipes: IRecipe[] | null = useAppSelector((state) => state.products.filteredRecipes);
    const { addRecipe, deleteRecipe, fetchAllRecipes, filterRecipes } = useActions();


    useEffect(() => {
        fetchAllRecipes(recipes);
        filterRecipes("all")
    }, [recipes]);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error occurred while fetching recipes</div>;
    }

    const handleAddRecipe = (recipe: IRecipe) => {
        addRecipe(recipe);
    };

    const handleDeleteRecipe = (recipe: IRecipe) => {
        deleteRecipe(recipe);
    };

    return (
        <div>
            <div className='flex justify-center m-5'>
                <WorkSpace/>
            </div>
            <div className='flex justify-around flex-wrap max-w-5xl mt-12'>
                {filteredRecipes &&
                    (filteredRecipes as IRecipe[]).map((recipe: IRecipe) => (
                        <div key={recipe.id}>
                            <Recipe recipe={recipe}
                                    onAddRecipe={handleAddRecipe}
                                    onDeleteRecipe={handleDeleteRecipe}
                                    favoriteRecipes={favouriteRecipes}/>
                        </div>
                    ))}
            </div>
        </div>
    );
};

