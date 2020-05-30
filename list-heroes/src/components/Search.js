import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getHeroes } from '../services/getHeroes';
import '../css/Search.css';

function Search({ setHeroes }) {
  const [query, setQuery] = useState('');

  return (
    <form className="search-form"
      onSubmit={async event => {
        event.preventDefault();
        setHeroes(await getHeroes(query));
      }}
    >
      <TextField
        id="search-heroes"
        label="Busque seu heroí"
        variant="outlined"
        onChange={(event) => setQuery(event.target.value)}
      />
      <Button variant="contained" className="button-search" type="submit">
        Pesquisar
      </Button>
    </form>
  );
}

export default Search;