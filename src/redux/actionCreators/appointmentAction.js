import { SET_CHECKBOX_SECTIONS, SET_CHECKBOX_STYLES } from '../constants';

export const setSections = (data) => {
  const { key, checked } = data;
  const newSections = {};
  newSections[key] = checked;
  return {
    type: SET_CHECKBOX_SECTIONS,
    payload: newSections,
  };
};

export const setStyles = (data) => {
  const { key, checked } = data;
  const newStyles = {};
  newStyles[key] = checked;
  return {
    type: SET_CHECKBOX_STYLES,
    payload: newStyles,
  };
};
