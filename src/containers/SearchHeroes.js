import { connect } from 'react-redux';
import { getHeroes } from '../service/getHeroes';
import Search from '../components/Search';

const mapDispatchToProps = dispatch => {
  return {
    searchHeroes: name => {
      dispatch(getHeroes(name));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Search);