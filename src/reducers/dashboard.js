import moment from 'moment-timezone';

const initialState = {
  customTime: null,
  momentNow: moment(),
  editedTimezone: null,
  editFieldValue: null,
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TIME':
      return Object.assign({}, state, {
        momentNow: action.momentNow,
        customTime: null,
      });

    case 'TOGGLE_EDIT_MODE':
      return Object.assign({}, state, {
        editedTimezone: action.enable ? action.timezoneName : null,
        editFieldValue: action.enable ? action.fieldValue : null,
      });

    case 'UPDATE_EDIT_FIELD_VALUE':
      return Object.assign({}, state, {
        editFieldValue: action.fieldValue,
      });

    case 'SHOW_CUSTOM_TIME':
      return Object.assign({}, state, {
        customTime: true,
        momentNow: action.customTime,
        editedTimezone: null,
        editFieldValue: null,
      });

    default:
      return state;
  }
};

export default dashboard;
