import {
  GET_SECTIONS,
  SET_SECTIONS,
  SET_STYLES,
  GET_STYLES,
  GET_SERVICES_TYPE,
  GET_BUILDING_TYPE,
  SET_APPOINTMENT_REVIEWS,
} from '../../constants';

const initialState = {
  buildingType: {
    loading: false,
    result: null,
    error: false,
  },
  servicesType: {
    loading: false,
    result: null,
    error: false,
  },
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
  reviews: {},
};

const appointmentForm = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_BUILDING_TYPE:
      return {
        ...state,
        buildingType: {
          loading: payload.loading,
          result: payload.result,
          error: payload.error,
        },
      };
    case GET_SERVICES_TYPE:
      return {
        ...state,
        servicesType: {
          loading: payload.loading,
          result: payload.result,
          error: payload.error,
        },
      };
    case GET_SECTIONS:
      return {
        ...state,
        sections: {
          loading: payload.loading,
          result: payload.result,
          error: payload.error,
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
    case SET_SECTIONS:
      return {
        ...state,
        sections: {
          ...state.sections,
          result: payload,
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
    case SET_APPOINTMENT_REVIEWS:
      return {
        ...state,
        reviews: payload,
      };
    default:
      return state;
  }
};

export default appointmentForm;
