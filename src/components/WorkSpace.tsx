import React, { useState } from "react";
import {useActions} from "../hooks/actions";

export const WorkSpace = () => {
    const [selectedCategory, setSelectedCategory] = useState("");

    const { filterRecipes } = useActions();

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const category = event.target.value;
        console.log(category)
        setSelectedCategory(category);
        filterRecipes(category)
    };

    return (
        <div className={"text-xl"}>
            <h1>Filter</h1>
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="all">all</option>
                <option value="soup">soup</option>
                <option value="healthy">healthy</option>
                <option value="junk">junk</option>
            </select>
        </div>
    );
};
