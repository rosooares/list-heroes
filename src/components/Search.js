import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../css/Search.css';
import SearchIcon from '@material-ui/icons/Search';
import { Typography } from '@material-ui/core';

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
    <section className="header-seach">
      <Typography variant="h4" className="title-box-heroes">
        Pesquise seu heroí!
    </Typography>
      <form className="search-form"
        onSubmit={handleSubmit}
      >
        <TextField
          id="search-heroes"
          label="Digite seu heroí"
          placeholder="Exemplo: Batman"
          variant="outlined"
          onChange={handleInputChange}
          value={heroesState.name}
        />
        <Button
          type="submit"
          variant="contained"
          className="button-search"
        >
          <SearchIcon fontSize="large" />
        </Button>
      </form>
    </section>
  );
}

export default Search;