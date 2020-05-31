import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Powerstats } from './Powerstats';
import '../css/DialogHeroes.css';

export default function DialogHeroes({ open, onClose, heroeSelected }) {
  const {
    appearance = {
      'eye-color': "",
      gender: "",
      'hair-color': "",
      race: "",
    },
    biography = {
      'full-name': '',
      alignment: "",
      'place-of-birth': "",
      publisher: "",
    },
    connections = {
      "group-affiliation": '',
      relatives: '',
    },
    image = '',
    name,
    powerstats = {
      intelligence: "",
      strength: "",
      speed: "",
      durability: "",
      power: "",
      combat: "",
    },
    work = {
      base: '',
      occupation: '',
    },
  } = heroeSelected;
  return (
    <>
      <Dialog
        key={heroeSelected.id}
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className="dialog-heroes">
            <Grid container className="description-heroes" spacing={2}>
              <Grid item xs={6}>
                <img className="img-heroes-dialog" alt="Heroes image" src={image.url} />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" className="title-characteristics">Powerstats</Typography>
                <Powerstats powerstats={powerstats} />
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" className="title-characteristics">Appearance</Typography>
                <Typography> Eye color: {appearance["eye-color"]} </Typography>
                <Typography> Gender: {appearance.gender} </Typography>
                <Typography> Hair color: {appearance["hair-color"]} </Typography>
                <Typography> Race: {appearance.race} </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" className="title-characteristics">Biography</Typography>
                <Typography> Name: {biography["full-name"]} </Typography>
                <Typography> Alignment: {biography.alignment} </Typography>
                <Typography> Place of birth: {biography["place-of-birth"]} </Typography>
                <Typography> Publisher: {biography.publisher} </Typography>
              </Grid>
              
              <Grid item xs={4}>
                <Typography variant="h6" className="title-characteristics">Work</Typography>
                <Typography> Base: {work.base} </Typography>
                <Typography> Occupation: {work.occupation} </Typography>
              </Grid>
            </Grid>
            <br />
            <div>
              <Typography variant="h6" className="title-characteristics">Connections</Typography>
              <Typography> Group affiliation: {connections["group-affiliation"]} </Typography>
              <Typography> Relatives: {connections.relatives} </Typography>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
