import { FETCH_HEROES_NAME } from './types';
import axios from 'axios';

const apiUrl = 'https://www.superheroapi.com/api.php/3265653080136026';

export const getHeroes = ({ name }) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/search/${name}`)
      .then(response => {
        dispatch(createPostSuccess(response.data.results))
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const createPostSuccess = (data) => {
  return {
    type: FETCH_HEROES_NAME,
    payload: data,
  }
};

