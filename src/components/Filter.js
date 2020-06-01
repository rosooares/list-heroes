import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import '../css/List.css';

export const Powerstats = [
  { type: 'combat', name: 'Combat' },
  { type: 'durability', name: 'Durability' },
  { type: 'intelligence', name: 'Intelligence' },
  { type: 'power', name: 'Power' },
  { type: 'speed', name: 'Speed' },
  { type: 'strength', name: 'Strength' },
];

export const Filter = ({
  heroes,
  heroesName,
  handleChangeName,
  handleChangePowerstartsLeight,
  heroesPowerLenght,
  heroesPower,
  handleChangePowerstarts,
}) => (
    <Grid container className="filterName">
      <Grid item xs={12} md={4} className="infos-heroes">
        <Typography variant="caption">
          Filtrar por nome
  </Typography>
        <Select
          value={heroesName || 'Nome'}
          fullWidth
          onChange={handleChangeName}
          inputProps={{
            name: 'heroesName',
            id: 'name-simple',
          }}
        >
          {heroes.map(item => (
            <MenuItem data-testid="heroes" key={item.id} value={item.name}>{item.name}</MenuItem>
          ))}
        </Select>
      </Grid>
      <Typography variant="h6"> OU </Typography>
      <Grid item xs={12} md={6} className="infos-heroes">
        <Typography variant="caption">
          Filtrar por poder
      </Typography>
        <Grid container className="filterPower">
          <Grid item xs={12} md={5}>
            <TextField
              id="leight-simple"
              type="number"
              onChange={handleChangePowerstartsLeight}
              value={heroesPowerLenght}
              placeholder="Ex. 100"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Select
              value={heroesPower || 'Poder'}
              fullWidth
              placeholder="Combat"
              onChange={handleChangePowerstarts}
              inputProps={{
                name: 'heroesPower',
                id: 'power-simple',
              }}
            >
              {Powerstats.map(power =>
                <MenuItem key={power.type} value={power.type}>{power.name}</MenuItem>
              )}
            </Select>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

