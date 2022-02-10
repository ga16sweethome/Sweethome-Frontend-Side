import { SET_CHECKBOX_SECTIONS, SET_CHECKBOX_STYLES } from '../../constants';

const initialState = {
  enquiryDetails: {
    checkbox: {
      sections: {
        'Living Room': false,
        'Dining Room': false,
        Kitchen: false,
        Bedroom: false,
        Study: false,
        Office: false,
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
    },
  },
};

const appointmentForm = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CHECKBOX_SECTIONS:
      return {
        ...state,
        enquiryDetails: {
          ...state.enquiryDetails,
          checkbox: {
            ...state.enquiryDetails.checkbox,
            sections: {
              ...state.enquiryDetails.checkbox.sections,
              ...payload,
            },
          },
        },
      };
    case SET_CHECKBOX_STYLES:
      return {
        ...state,
        enquiryDetails: {
          ...state.enquiryDetails,
          checkbox: {
            ...state.enquiryDetails.checkbox,
            styles: {
              ...state.enquiryDetails.checkbox.styles,
              ...payload,
            },
          },
        },
      };
    default:
      return state;
  }
};

export default appointmentForm;
