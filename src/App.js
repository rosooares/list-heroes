import React from 'react';
import SearchHeroes from './containers/SearchHeroes';
import ListHeroesContainer from './containers/ListHeroesContainer';
import './App.css';

export default function App() {
  return (
    <>
      <h3 className="header">Heroís</h3>
      <SearchHeroes />
      <ListHeroesContainer />
    </>
  );
}