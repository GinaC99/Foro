import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import style from './homeStyle.module.css';

const Home = () => {
  useEffect(()=> {
    
  },[])
    const [selectedDate, setSelectedDate] = useState(new Date());
    const markedDates = [
        new Date(2023, 10, 25),
        new Date(2023, 10, 20),
        new Date(2023, 10, 29),
      ];
    
      const tileContent = ({ date }) => {
        return markedDates.some(
          (markedDate) =>
            date.getDate() === markedDate.getDate() &&
            date.getMonth() === markedDate.getMonth() &&
            date.getFullYear() === markedDate.getFullYear()
        ) ? (
          <div className="marked-date"></div>
        ) : null;
      };
  
    return (
      <div className={style.containerCalendar}>
        <h1>{}</h1>
        <Calendar
          onChange={setSelectedDate}
          value={markedDates}
          tileContent={tileContent}
        />
      </div>
    );
}
export default Home;