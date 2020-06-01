import React, { useEffect, useState } from 'react';
import List from '../components/List';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Filter } from './Filter';
import '../css/List.css';

export const Powerstats = [
  { type: 'combat', name: 'Combat' },
  { type: 'durability', name: 'Durability' },
  { type: 'intelligence', name: 'Intelligence' },
  { type: 'power', name: 'Power' },
  { type: 'speed', name: 'Speed' },
  { type: 'strength', name: 'Strength' },
];

export function ListHeroes({ heroes }) {
  const [heroesName, setHeroesName] = useState({});
  const [heroesPowerLenght, setHeroesPowerLenght] = useState({});
  const [heroesPower, setHeroesPower] = useState({});
  const [heroesSelected, setHeroesSelected] = useState([]);

  useEffect(() => {
    setHeroesName(undefined);
    setHeroesPower(undefined);
    setHeroesPowerLenght('');
    setHeroesSelected(heroes);
  }, [heroes]);

  const handleChangeName = (event) => {
    setHeroesPower(undefined);
    setHeroesPowerLenght('');
    setHeroesName(event.target.value);
    const selected = heroes.filter(item => item.name === event.target.value);
    setHeroesSelected(selected);
  };

  const handleChangePowerstartsLeight = (event) => {
    setHeroesName(undefined);
    setHeroesPowerLenght(event.target.value);
  };

  const handleChangePowerstarts = (event) => {
    const power = event.target.value;
    setHeroesName(undefined);
    setHeroesPower(power);

    const selected = heroes
      .filter(item => item.powerstats[power] === heroesPowerLenght)
    setHeroesSelected(selected);
  };

  if (heroes.length === 0) {
    return (
      <Grid className="box-title-heroes">
        <Typography variant="h5" className="title-box-heroes">
          Nenhum heroí!
      </Typography>
      </Grid>
    )
  }

  return (
    <div>
      <Grid container className="box-title-heroes">
        <Grid item xs={12} md={4}>
          <Typography variant="h5" className="title-box-heroes">
            Lista de Heroís
        </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Filter 
            heroes={heroes}
            heroesName={heroesName}
            handleChangeName={handleChangeName}
            handleChangePowerstartsLeight={handleChangePowerstartsLeight}
            heroesPowerLenght={heroesPowerLenght}
            heroesPower={heroesPower}
            handleChangePowerstarts={handleChangePowerstarts}
           />
        </Grid>
      </Grid>
      <Grid container className="root">
        {heroesSelected.map(heroes => {
          return (
            <List heroes={heroes} key={heroes.id} />
          );
        })}
      </Grid>
    </div >
  );
}

export default ListHeroes;
