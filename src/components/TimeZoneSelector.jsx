import React from 'react';
import Select from 'react-select';

const TimeZoneSelector = ({ timezones, value, onChange }) => {
  return <Select options={timezones} value={value} onChange={onChange} />;
};

export default TimeZoneSelector;
