import {
  GET_SECTIONS,
  SET_SECTIONS,
  SET_STYLES,
  GET_STYLES,
} from '../../constants';

const initialState = {
  sections: {
    loading: false,
    result: null,
    error: false,
  },
  styles: {
    loading: false,
    result: null,
    error: false,
  },
};

const appointmentForm = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SECTIONS:
      return {
        ...state,
        sections: {
          loading: payload.loading,
          result: payload.result,
          error: payload.error,
        },
      };
    case SET_SECTIONS:
      return {
        ...state,
        sections: {
          ...state.sections,
          result: payload,
        },
      };
    case GET_STYLES:
      return {
        ...state,
        styles: {
          loading: payload.loading,
          result: payload.result,
          error: payload.error,
        },
      };
    case SET_STYLES:
      return {
        ...state,
        styles: {
          ...state.styles,
          result: payload,
        },
      };
    default:
      return state;
  }
};

export default appointmentForm;
