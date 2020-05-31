import { connect } from 'react-redux';
import ListHeroes from '../components/ListHeroes';

import '../css/List.css';

const mapStateToProps = state => {
  return {
    heroes: state.heroes
  };
};

export default connect(
  mapStateToProps,
)(ListHeroes);