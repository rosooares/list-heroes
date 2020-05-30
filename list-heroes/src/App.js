import React, { useEffect, useState } from 'react';
import Search from './components/Search';
import ListHerois from './components/ListHerois';
import './App.css';

export default function App() {
  const [heroes, setHeroes] = useState();
  
  return (
    <>
      <h3 className="header">Heroís</h3>
      <section className="search-heroes">
        <h1 className="title"> Encontre seu super heroí!</h1>
        <Search
          setHeroes={setHeroes}
        />
      </section>
      {heroes && <ListHerois heroes={heroes} />}
    </>
  );
}