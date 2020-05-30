import React from 'react';
import { connect } from 'react-redux';
import List from '../components/List';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import '../css/List.css';

function ListHeroes({ heroes }) {
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
      </Grid>
      <Grid container className="root">
        {heroes.map(heroes => {
          return (
            <List heroes={heroes} key={heroes.id} />
          );
        })}
      </Grid>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    heroes: state.heroes
  };
};

export default connect(
  mapStateToProps,
)(ListHeroes);