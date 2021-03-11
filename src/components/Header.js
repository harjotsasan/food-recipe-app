import React from "react";

const Header = (props) => {
    const {search, searchOnChangeHandler, onSearchClick} = props //props destructuring
    return(
        <>
            <div className="jumbotron">
                <header className="display-1 p-3">
                    <i className="material-icons brand-icon">fastfood</i>
                    Food Recipe
                </header>

                <div className="input-group w-50 m-auto">
                <input value={search} onChange={searchOnChangeHandler} type="text" className="form-control" placeholder="Search Recipe Here..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <button onClick={onSearchClick} className='btn btn-dark'>Search Recipe</button>
                </div>

            </div>
        </>
    );
}

export default Header;