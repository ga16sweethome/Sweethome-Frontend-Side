import axios from 'axios';
import {
  RESET_FILTER,
  SET_FILTER_BY_SEARCH,
  SET_FILTER_BY_SECTIONS,
  SET_FILTER_BY_STYLES,
  GET_SECTIONS_FILTER,
  GET_STYLES_FILTER,
} from '../constants';

export const getSectionsFilter = () => (dispatch) => {
  dispatch({
    type: GET_SECTIONS_FILTER,
    payload: {
      loading: true,
      result: null,
      error: false,
    },
  });

  axios({
    method: 'get',
    url: `${process.env.REACT_APP_BASE_API}content/section`,
  })
    .then((response) => {
      dispatch({
        type: GET_SECTIONS_FILTER,
        payload: {
          loading: false,
          result: response.data.map((obj) => ({ ...obj, value: false })),
          error: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_SECTIONS_FILTER,
        payload: {
          loading: false,
          result: null,
          error: error.msg,
        },
      });
    });
};

export const getStylesFilter = () => (dispatch) => {
  dispatch({
    type: GET_STYLES_FILTER,
    payload: {
      loading: true,
      result: null,
      error: false,
    },
  });

  axios({
    method: 'get',
    url: `${process.env.REACT_APP_BASE_API}content/style`,
  })
    .then((response) => {
      dispatch({
        type: GET_STYLES_FILTER,
        payload: {
          loading: false,
          result: response.data.map((obj) => ({ ...obj, value: false })),
          error: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_STYLES_FILTER,
        payload: {
          loading: false,
          result: null,
          error: error.msg,
        },
      });
    });
};

export const setSearch = (words) => {
  return {
    type: SET_FILTER_BY_SEARCH,
    payload: words,
  };
};

export const setSectionsFilter = (data) => {
  const { key, checked } = data;
  const newObject = {};
  newObject[key] = checked;
  return {
    type: SET_FILTER_BY_SECTIONS,
    payload: newObject,
  };
};

export const setStylesFilter = (data) => {
  const { key, checked } = data;
  const newObject = {};
  newObject[key] = checked;
  return {
    type: SET_FILTER_BY_STYLES,
    payload: newObject,
  };
};

export const resetFilter = () => {
  return {
    type: RESET_FILTER,
  };
};
