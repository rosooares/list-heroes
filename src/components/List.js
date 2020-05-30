import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ButtonLoader from './ButtonLoader';
import Typography from '@material-ui/core/Typography';
import DialogHeroes from './DialogHeroes';
import '../css/List.css';

export const Powerstats = ({ powerstats }) => (
  <ul className="list-powerstats">
    <li>Combat: {powerstats.combat || '-'}</li>
    <li>Durability: {powerstats.durability || '-'}</li>
    <li>Intelligence: {powerstats.intelligence || '-'}</li>
    <li>Power: {powerstats.power || '-'}</li>
    <li>Speed: {powerstats.speed || '-'}</li>
    <li>Strength: {powerstats.strength || '-'}</li>
  </ul>
);

function List({ heroes = {} }) {
  const [open, setOpen] = useState(false);
  const [heroeSelected, setHeroeSelected] = useState({});

  const handleClickOpen = (heroeSelected) => {
    setOpen(true);
    setHeroeSelected(heroeSelected);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DialogHeroes
        open={open}
        onClose={handleClose}
        heroeSelected={heroeSelected}
      />
      <>
        <Grid key={heroes.id} item xs={4} className="box-heroes">
          <Grid item xs={7}>
            <img className="img-heroes" alt="Heroes image" src={heroes.image && heroes.image.url} />
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h6" className="title-box-heroes"> {heroes.name} </Typography>
            <Typography variant="caption"> Poderes: </Typography>
            <Powerstats powerstats={heroes.powerstats} />
            <ButtonLoader
              className="button-veja-mais"
              onClick={() => handleClickOpen(heroes)}>
              Veja mais +
             </ButtonLoader>
          </Grid>
        </Grid>
      </>
    </>
  );
}

export default List;