import React, { useEffect, useState } from 'react';
import List from '../components/List';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import '../css/List.css';

export function ListHeroes({ heroes }) {
  console.log('component heroes', heroes);
  const [heroesName, setHeroesName] = useState({});
  const [heroesSelected, setHeroesSelected] = useState([]);

  useEffect(() => {
    setHeroesSelected(heroes);
  }, [heroes]);

  const handleChange = (event) => {
    setHeroesName(event.target.value);
    const selected = heroes.filter(item => item.name === event.target.value);
    setHeroesSelected(selected);
  };

  if (heroes.length === 0) {
    return (
      <Grid className="box-title-heroes">
        <Typography variant="h5" className="title-box-heroes">
          No heroes!
      </Typography>
      </Grid>
    )
  }
  
  return (
    <div>
      <Grid className="box-title-heroes">
        <Typography variant="h5" className="title-box-heroes">
          Lista de Heroís
        </Typography>
        <div>

        <Typography variant="caption">
            Nome
        </Typography>
          <Select
            value={heroesName}
            fullWidth
            onChange={handleChange}
            inputProps={{
              name: 'heroesName',
              id: 'name-simple',
            }}
          >
            {heroes.map(item => (
              <MenuItem data-testid="heroes" key={item.id} value={item.name}>{item.name}</MenuItem>
            ))}
          </Select>
        </div>
      </Grid>
      <Grid container className="root">
        {heroesSelected.map(heroes => {
          return (
            <List heroes={heroes} key={heroes.id} />
          );
        })}
      </Grid>
    </div>
  );
}

export default ListHeroes;
