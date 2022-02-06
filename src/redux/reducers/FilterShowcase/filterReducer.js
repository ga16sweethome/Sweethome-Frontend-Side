import {
  SET_FILTER_BY_SEARCH,
  SET_FILTER_BY_SECTIONS,
  SET_FILTER_BY_STYLES,
} from '../../constants';

const initialState = {
  search: '',
  sections: [],
  styles: [],
  pages: [],
};

const filterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_FILTER_BY_SEARCH:
      return {
        ...state,
        search: payload,
      };
    case SET_FILTER_BY_SECTIONS:
      return {
        ...state,
        sections: payload,
      };
    case SET_FILTER_BY_STYLES:
      return {
        ...state,
        styles: payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
