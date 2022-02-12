import axios from 'axios';
import {
  SET_SECTIONS,
  SET_STYLES,
  GET_SECTIONS,
  GET_STYLES,
  GET_SERVICES_TYPE,
  GET_BUILDING_TYPE,
} from '../constants';

export const getBuildingType = () => (dispatch) => {
  dispatch({
    type: GET_BUILDING_TYPE,
    payload: {
      loading: true,
      result: null,
      error: false,
    },
  });
  axios({
    method: 'get',
    url: `${process.env.REACT_APP_BASE_API}content/buildingtype`,
  })
    .then((response) => {
      dispatch({
        type: GET_BUILDING_TYPE,
        payload: {
          loading: false,
          result: response.data,
          error: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_BUILDING_TYPE,
        payload: {
          loading: false,
          result: null,
          error: error.message,
        },
      });
    });
};

export const getServicesType = () => (dispatch) => {
  dispatch({
    type: GET_SERVICES_TYPE,
    payload: {
      loading: true,
      result: null,
      error: false,
    },
  });
  axios({
    method: 'get',
    url: `${process.env.REACT_APP_BASE_API}content/servicetype`,
  })
    .then((response) => {
      dispatch({
        type: GET_SERVICES_TYPE,
        payload: {
          loading: false,
          result: response.data,
          error: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_SERVICES_TYPE,
        payload: {
          loading: false,
          result: null,
          error: error.message,
        },
      });
    });
};

export const getSections = () => (dispatch) => {
  dispatch({
    type: GET_SECTIONS,
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
        type: GET_SECTIONS,
        payload: {
          loading: false,
          result: response.data.map((obj) => ({ ...obj, value: false })),
          error: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_SECTIONS,
        payload: {
          loading: false,
          result: null,
          error: error.message,
        },
      });
    });
};

export const getStyles = () => (dispatch) => {
  dispatch({
    type: GET_STYLES,
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
        type: GET_STYLES,
        payload: {
          loading: false,
          result: response.data.map((obj) => ({ ...obj, value: false })),
          error: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_STYLES,
        payload: {
          loading: false,
          result: null,
          error: error.message,
        },
      });
    });
};

export const setSections = (data) => {
  const { checked, idx, arr } = data;
  const newSections = arr;
  newSections[idx].value = checked;
  return {
    type: SET_SECTIONS,
    payload: newSections,
  };
};

export const setStyles = (data) => {
  const { checked, idx, arr } = data;
  const newStyles = arr;
  newStyles[idx].value = checked;
  return {
    type: SET_STYLES,
    payload: newStyles,
  };
};
