import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/selector";
import { IRecipe } from "../models/models";

export const RecipeCard = () => {
    const { id } = useParams();

    const allRecipes: IRecipe[] | null = useAppSelector((state) => state.products.allRecipes);

    const recipe = allRecipes.find((recipe) => recipe.id === Number(id));

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    return (
        <div>
            <div className="mx-2.5 my-6">
                <img className="w-40 h-40 mb-4 mx-auto" src={recipe?.imageUrl} />
                <ul className="text-center">
                    <li className="mb-2">{recipe.name}</li>
                    <li>Time to cook - {recipe.time} m</li>
                    <ul className="mt-2">
                        {Object.entries(recipe.ingredients).map(([ingredient, quantity]) => (
                            <li key={ingredient}>{`${ingredient}: ${quantity}`}</li>
                        ))}
                    </ul>
                    <ul className="md:w-1/2 mx-auto">
                        {Object.entries(recipe.description).map(([step, cook]) => (
                            <li className={"mt-5"}
                                key={step}>{`${step}: ${cook}`}</li>
                        ))}
                    </ul>
                </ul>
            </div>
        </div>
    );
};


