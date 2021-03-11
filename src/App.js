import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Recipy from './components/Recipy';
import Axios from "axios";

function App() {
  const [search, setSearch] = useState('');
  const [recipe, setRecipe] = useState([]);

  const App_ID = "7736e43d";
  const App_KEY = "84333671af70e2526d0037cf20878c44";

// Executing getPost function for calling API right after component is rendered.
// Yes! By default, it runs both after the first render and after every update.
  useEffect( () => {
    getPost();
  }, [])

// async promise-based behavior
// await response, where either a promise is fulfilled or not.
  const getPost = async () => {
// Axios is promise-based, which gives you the ability to take advantage of
// JavaScript’s async and await for more readable asynchronous code.
    const response = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${App_ID}&app_key=${App_KEY}`);
    console.log(response);
    setRecipe(response.data.hits);
  }

  const onSearchClick = () => {
    getPost();
  }

  const searchOnChangeHandler = (event) => {
    setSearch(event.target.value);
  }
  return (
    <div className="App">
      <Header 
        search={search} 
        searchOnChangeHandler={searchOnChangeHandler}
        onSearchClick={onSearchClick}
      />
      <div className='container'>
        <Recipy recipe={recipe}/>
      </div>
    </div>
  );
}

export default App;
