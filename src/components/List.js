import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DialogHeroes from './DialogHeroes';
import { Powerstats } from './Powerstats';
import '../css/List.css';

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
        <Grid key={heroes.id} item xs={12} md={4} className="box-heroes">
          <Grid item xs={12} md={7}>
            <img className="img-heroes" alt="Heroes image" src={heroes.image && heroes.image.url} />
          </Grid>
          <Grid item xs={12} md={5} className="infos-heroes">
            <Typography variant="h6" className="title-box-heroes"> {heroes.name} </Typography>
            <Typography variant="caption"> Poderes: </Typography>
            <Powerstats powerstats={heroes.powerstats} />
            <Button
              className="button-veja-mais"
              onClick={() => handleClickOpen(heroes)}>
              Veja mais +
             </Button>
          </Grid>
        </Grid>
      </>
    </>
  );
}

export default List;