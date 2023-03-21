import React from 'react';
import { format, isPast } from 'date-fns';

const DayBox = ({ day, timeSlots, isPassed }) => {
    
  return (
    <div className="day-container">
      <div className='day'><h4>{format(day, 'EEEE, MMMM d')}</h4></div>
      <div className='timeSlots'>
      {timeSlots.map((timeSlot, idx) => {
        const datetime = new Date(`${format(day, 'yyyy-MM-dd')}T${timeSlot}`);
        return (
          <div key={idx} className="time-slot">
            {isPassed || isPast(datetime) ? (
              <span>Passed</span>
            ) : (
              <>
                <input type="checkbox" />
                <span>{timeSlot}</span>
              </>
            )}
          </div>
        );
      })}</div>
    </div>
);
};

export default DayBox;