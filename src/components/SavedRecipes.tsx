import React from "react";
import { useAppSelector } from "../hooks/selector";
import { Recipe } from "./Recipe";
import { IRecipe } from "../models/models";
import { useActions } from "../hooks/actions";

export const SavedRecipes = () => {
    const favouriteRecipes: IRecipe[] | null =
        useAppSelector((state) => state.products.favoriteRecipes
    );
    const { deleteRecipe, addRecipe } = useActions();

    const handleDeleteRecipe = (recipe: IRecipe) => {
        deleteRecipe(recipe);
    };

    const handleAddRecipe = (recipe: IRecipe) => {
        addRecipe(recipe);
    };

    return (
        <div>
            {favouriteRecipes && favouriteRecipes.length > 0 ? (
                <div className="flex justify-around flex-wrap max-w-5xl mt-12">
                    {favouriteRecipes.map((recipe: IRecipe) => (
                        <div key={recipe.id}>
                            <Recipe
                                recipe={recipe}
                                onAddRecipe={handleAddRecipe}
                                onDeleteRecipe={handleDeleteRecipe}
                                favoriteRecipes={favouriteRecipes}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    You haven't added any recipes yet.
                </div>
            )}
        </div>
    );
};
