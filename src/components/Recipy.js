import React from "react";
import RecipeItem from "./RecipeItem";

const Recipy = (props) => {
    const {recipe} = props;
    return(
        <>
            <div className='card-columns'>
                {
                    recipe.map( (recipe) => {
                        return(
                            <RecipeItem
                                name={recipe.recipe.label}
                                image={recipe.recipe.image}
                                ingredientLines={recipe.recipe.ingredientLines}
                            />
                        );
                    })
                }
            </div>
        </>
    );
}

export default Recipy;