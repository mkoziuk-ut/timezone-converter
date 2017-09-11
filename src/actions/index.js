/* Timezone list actions */
export const addTimezone = (timezone) => ({
  type: 'ADD_TIMEZONE',
  timezone: timezone,
});

export const removeTimezone = (timezoneName) => ({
  type: 'REMOVE_TIMEZONE',
  timezoneName: timezoneName,
});

/* Dashboard actions */
export const updateTime = (momentNow) => ({
  type: 'UPDATE_TIME',
  momentNow: momentNow,
});

export const toggleEditMode = (timezoneName, enable, fieldValue) => ({
  type: 'TOGGLE_EDIT_MODE',
  timezoneName: timezoneName,
  enable: enable,
  fieldValue: fieldValue,
});

export const updateEditFieldValue = (fieldValue) => ({
  type: 'UPDATE_EDIT_FIELD_VALUE',
  fieldValue: fieldValue,
});

export const showCustomTime = (customTime) => ({
  type: 'SHOW_CUSTOM_TIME',
  customTime: customTime,
});
