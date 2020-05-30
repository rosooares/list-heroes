import axios from 'axios';

export function getHeroes(param) {
    return axios
    .get(`https://www.superheroapi.com/api.php/3265653080136026/search/${param}`)
    .then(response => response.data.results)
    .catch(error => console.error('error', error))
};