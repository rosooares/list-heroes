import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../css/ListHerois.css';

export const Powerstats = ({ powerstats }) => (
  <ul className="list-powerstats">
    <li>Combat: {powerstats.combat}</li>
    <li>Durability: {powerstats.durability}</li>
    <li>Intelligence: {powerstats.intelligence}</li>
    <li>Power: {powerstats.power}</li>
    <li>Speed: {powerstats.speed}</li>
    <li>Strength: {powerstats.strength}</li>
  </ul>
);

function ListHerois({ heroes }) {
  console.log('heroes', heroes);

  return (
    <Grid container className="root">
      <Grid className="box-title-heroes">
        <Typography variant="h5" className="title-box-heroes">
          Lista de Heroís
        </Typography>
      </Grid>
      {heroes.map(cinemaItem => (
        <>
          <Grid key={cinemaItem.id} item xs={4} className="box-heroes">
            <Grid item xs={7}>
              <img className="img-heroes" alt="Heroes image" src={cinemaItem.image.url} />
            </Grid>
            <Grid item xs={5}>
              <Typography variant="h6" className="title-box-heroes"> {cinemaItem.name} </Typography>
              <Typography variant="caption"> Poderes: </Typography>
              <Powerstats powerstats={cinemaItem.powerstats} />
              <Button className="button-veja-mais">
                Veja mais +
              </Button>
            </Grid>
          </Grid>
        </>
      ))}
    </Grid>
  );
}

export default ListHerois;