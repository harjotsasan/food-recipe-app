import React from "react";

const RecipeItem = (props) => {
    const {name, image, ingredientLines} = props; //props destructuring

    return(
            <div className='card py-2'>
                <img className ='img-fluid w-50 m-auto rounded-circle' src={image} />
                <div className='card-body'>
                    <h5>{name}</h5>
                </div>
                <ul className='list-group list-group-flush'>
                    {
                        ingredientLines.map( (ingredient) => {
                            return(<li className='list-group-item'>{ingredient}</li>)
                        })
                    }
                </ul>
            </div>
    )

}

export default RecipeItem;