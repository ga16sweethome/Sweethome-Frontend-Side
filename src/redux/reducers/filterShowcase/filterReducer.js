import {
  GET_SECTIONS_FILTER,
  GET_STYLES_FILTER,
  RESET_FILTER,
  SET_FILTER_BY_SEARCH,
  SET_FILTER_BY_SECTIONS,
  SET_FILTER_BY_STYLES,
} from '../../constants';

const initialState = {
  search: '',
  sections: [],
  styles: [],
  pages: '',
};

const filterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SECTIONS_FILTER:
      return {
        ...state,
        sections: payload,
      };
    case GET_STYLES_FILTER:
      return {
        ...state,
        styles: payload,
      };
    case SET_FILTER_BY_SEARCH:
      return {
        ...state,
        search: payload,
      };
    case SET_FILTER_BY_SECTIONS:
      return {
        ...state,
        sections: {
          ...state.sections,
          ...payload,
        },
      };
    case SET_FILTER_BY_STYLES:
      return {
        ...state,
        styles: {
          ...state.styles,
          ...payload,
        },
      };
    case RESET_FILTER:
      return initialState;
    default:
      return state;
  }
};

export default filterReducer;
