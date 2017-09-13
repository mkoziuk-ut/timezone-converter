/* Timezone list actions */
// adds a timezone to displayed timezones
export const addTimezone = (timezone) => ({
  type: 'ADD_TIMEZONE',
  timezone: timezone,
});

// removes a timezone from displayed timezones
export const removeTimezone = (timezoneName) => ({
  type: 'REMOVE_TIMEZONE',
  timezoneName: timezoneName,
});

/* Dashboard actions */
// updates the time used as base by timezone clocks
export const updateTime = (momentNow) => ({
  type: 'UPDATE_TIME',
  momentNow: momentNow,
});

// enables or disable edit mode on the specified timezone panel, passing in
// the initial input field value in case of enabled === true
export const toggleEditMode = (timezoneName, enable, fieldValue) => ({
  type: 'TOGGLE_EDIT_MODE',
  timezoneName: timezoneName,
  enable: enable,
  fieldValue: fieldValue,
});

// used to keep the state of the time input field while editing
export const updateEditFieldValue = (fieldValue) => ({
  type: 'UPDATE_EDIT_FIELD_VALUE',
  fieldValue: fieldValue,
});

// sets the displayed time to the value specified as customTime, and sets
// the showingCustomTime flag to indicate that clocks are not ticking
export const showCustomTime = (customTime) => ({
  type: 'SHOW_CUSTOM_TIME',
  customTime: customTime,
});
