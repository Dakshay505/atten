import React, { useState } from 'react';
import {
  format,
  eachDayOfInterval,
  addWeeks,
  startOfWeek,
  endOfWeek,
  isToday,
  isPast,
} from 'date-fns';
import './App.css';
import DayBox from './components/DayBox';
import WeekSelector from './components/WeekSelector';
import TimeZoneSelector from './components/TimeZoneSelector';

const timezones = [
  { value: 'UTC-0', label: 'UTC-0' },
  { value: 'UTC+1', label: 'UTC+1' },
];

const App = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [timeZone, setTimeZone] = useState(timezones[0]);

  const moveWeeks = (weeks) => {
    setCurrentWeek(addWeeks(currentWeek, weeks));
  };

  const handleTimeZoneChange = (selectedTimeZone) => {
    setTimeZone(selectedTimeZone);
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let i = 8; i <= 23; i++) {
      slots.push(`${i < 13 ? i : i - 12}:00 ${i < 12 ? 'AM' : 'PM'}`);
      slots.push(`${i < 13 ? i : i - 12}:30 ${i < 12 ? 'AM' : 'PM'}`);
    }
    return slots;
  };

  const startOfWeekDate = startOfWeek(currentWeek, { weekStartsOn: 1 });
  const endOfWeekDate = endOfWeek(currentWeek, { weekStartsOn: 1 });

  const daysOfWeek = eachDayOfInterval({
    start: startOfWeekDate,
    end: endOfWeekDate,
  }).filter((date) => date.getDay() !== 0 && date.getDay() !== 6);

  return (
    <div className="App">
      <h1 className='todaysDate'>{format(new Date(), 'MMMM d, yyyy')}</h1>
      <WeekSelector onPrevious={() => moveWeeks(-1)} onNext={() => moveWeeks(1)} />
      <TimeZoneSelector timezones={timezones} value={timeZone} onChange={handleTimeZoneChange} />
      <div className="days">
        {daysOfWeek.map((day, index) => (
          <DayBox
            key={index}
            day={day}
            timeSlots={generateTimeSlots()}
            isPassed={isPast(day) && !isToday(day)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
