import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import ButtonLoader from './ButtonLoader';
import '../css/Search.css';

function Search(props) {
  const [heroesState, setHeroesState] = useState({
    name: '',
  });

  function handleInputChange(e) {
    setHeroesState({
      name: e.target.value
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (heroesState.name.trim()) {
      props.searchHeroes(heroesState)
      handleReset();
    }
  };

  function handleReset() {
    setHeroesState({
      name: '',
    });
  };


  return (
    <form className="search-form"
      onSubmit={handleSubmit}
    >
      <TextField
        id="search-heroes"
        label="Busque seu heroí"
        variant="outlined"
        onChange={handleInputChange}
        value={heroesState.name}
      />
      <ButtonLoader
        type="submit"
        //  loading={isDeleting}
        variant="contained"
        className="button-search"
      >
        Pesquisar
        </ButtonLoader>
    </form>
  );
}

export default Search;