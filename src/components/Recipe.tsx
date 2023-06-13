import {IRecipe} from "../models/models";
import { Link } from "react-router-dom";

export const Recipe = ({ recipe, onAddRecipe, onDeleteRecipe, favoriteRecipes }: { recipe: any, onAddRecipe: (recipe: any) => void, onDeleteRecipe: (recipe: any) => void, favoriteRecipes: IRecipe[] }) => {
    const isFavorite = favoriteRecipes.some((favoriteRecipe) => favoriteRecipe.id === recipe.id);

    const handleAdd = () => {
        if (!isFavorite) {
            onAddRecipe(recipe);
        } else {
            onDeleteRecipe(recipe);
        }
    };

    const addButtonStyle = isFavorite
        ? "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        : "focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800";

    const buttonText = isFavorite ? "Delete" : "Add";

    return (
        <div>
            <div className='justify-between mx-2.5 my-6'>
                <img
                    className='w-40 h-40'
                    src={recipe?.imageUrl}
                />
                <ul>
                    <li className="text-center"><span>{recipe.name}</span></li>
                    <li><span>Time to cook - {recipe.time} m</span></li>
                    <div className={"mt-2"}>
                    <button
                        type="button"
                        onClick={handleAdd}
                        className={addButtonStyle}
                    >
                        {buttonText}
                    </button>
                    <Link to={`/recipe/${recipe.id}`}>
                        <button type="button">
                            Cook
                        </button>
                    </Link>
                    </div>
                </ul>
            </div>
        </div>
    );
};
