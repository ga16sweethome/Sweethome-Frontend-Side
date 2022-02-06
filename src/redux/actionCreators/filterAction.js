import {
  RESET_FILTER,
  SET_FILTER_BY_SEARCH,
  SET_FILTER_BY_SECTIONS,
  SET_FILTER_BY_STYLES,
} from '../constants';

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
