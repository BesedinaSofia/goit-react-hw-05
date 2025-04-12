import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '5857a842e1a5832376936d3278a93fa8';

export const fetchTrendingMovies = async () => {
  const res = await axios.get(`${BASE_URL}/trending/movie/day`, {
    params: { api_key: API_KEY },
  });
  return res.data.results;
};

export const searchMovies = async query => {
  const res = await axios.get(`${BASE_URL}/search/movie`, {
    params: { query, api_key: API_KEY },
  });
  return res.data.results;
};

export const fetchMovieDetails = async id => {
  const res = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: { api_key: API_KEY },
  });
  return res.data;
};

export const fetchMovieCast = async id => {
  const res = await axios.get(`${BASE_URL}/movie/${id}/credits`, {
    params: { api_key: API_KEY },
  });
  return res.data.cast;
};

export const fetchMovieReviews = async id => {
  const res = await axios.get(`${BASE_URL}/movie/${id}/reviews`, {
    params: { api_key: API_KEY },
  });
  return res.data.results;
};
