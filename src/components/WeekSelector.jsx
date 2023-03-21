import React from 'react';

const WeekSelector = ({ onPrevious, onNext }) => {
  return (
    <div className='weeklySelector'>
      <h3 onClick={onPrevious}>Previous</h3>
      <h3 onClick={onNext}>Next</h3>
    </div>
  );
};

export default WeekSelector;
