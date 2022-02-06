import {
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
  const { sections, category } = data;
  const isValid = sections.find((value) => value === category);
  const newArray = isValid
    ? sections.filter((value) => value !== category)
    : [...sections, category];

  return {
    type: SET_FILTER_BY_SECTIONS,
    payload: newArray,
  };
};

export const setStylesFilter = (data) => {
  const { styles, category } = data;
  const isValid = styles.find((value) => value === category);
  const newArray = isValid
    ? styles.filter((value) => value !== category)
    : [...styles, category];

  return {
    type: SET_FILTER_BY_STYLES,
    payload: newArray,
  };
};
