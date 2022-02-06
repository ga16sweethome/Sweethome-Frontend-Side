import {
  RESET_FILTER,
  SET_FILTER_BY_SEARCH,
  SET_FILTER_BY_SECTIONS,
  SET_FILTER_BY_STYLES,
} from '../../constants';

const initialState = {
  search: '',
  sections: {
    'Living Room': false,
    'Dining Room': false,
    Bedroom: false,
    Kitchen: false,
    Bathroom: false,
    'Study/Office': false,
    Outdoor: false,
  },
  styles: {
    Modern: false,
    Contemporary: false,
    Minimalist: false,
    Industrial: false,
    Scandinavian: false,
    Traditional: false,
    Natural: false,
    Rustic: false,
    Bohemian: false,
  },
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
