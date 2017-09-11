export const addTimezone = (timezone) => ({
  type: 'ADD_TIMEZONE',
  timezone: timezone,
});

export const removeTimezone = (timezoneName) => ({
  type: 'REMOVE_TIMEZONE',
  timezoneName: timezoneName,
});

export const showCustomTime = (customTime) => ({
  type: 'SHOW_CUSTOM_TIME',
  customTime: customTime,
});

export const showCurrentTime = () => ({
  type: 'SHOW_CURRENT_TIME',
});
