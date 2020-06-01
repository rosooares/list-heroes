import React from 'react';
import SearchHeroes from './containers/SearchHeroes';
import ListHeroesContainer from './containers/ListHeroesContainer';
import Typography from '@material-ui/core/Typography';
import './App.css';

export default function App() {
  return (
    <>
      <Typography variant="h6" className="header">Heroís</Typography>
      <SearchHeroes />
      <ListHeroesContainer />
    </>
  );
}