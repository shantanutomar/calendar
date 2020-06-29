import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/styles';
import { getMonth, getDate, getYear, isValid } from "date-fns";
import Header from "./Header";
import Days from "./Days";
import Dates from "./Dates";
import { useQueryStringState, getCurrentDate } from "../Utils/utils";

const useStyles = makeStyles(theme => ({
  calendar: {
    border: '1px solid #eee',
    margin: '5% auto 0;',
    display: 'block',
    position: 'relative',
    width: '700px',
    background: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.3)'
  },
  inValidDate: {
    fontSize: '24px',
    textAlign: 'center',
    marginTop: '100px',
    color: theme.errorText,
    fontWeight: '600',
  }
}));

const Calendar = props => {

  const [month, setMonth] = useQueryStringState('month', getMonth(new Date()) + 1);
  const [date, setDate] = useQueryStringState('date', getDate(new Date()));
  const [year, setYear] = useQueryStringState('year', getYear(new Date()));

  const classes = useStyles(props);

  useEffect(() => {
    if(window.location.search === '') {
      setMonth(getMonth(new Date()) + 1);
      setDate(getDate(new Date()));
      setYear(getYear(new Date()));
    }
  }, [setMonth, setDate, setYear])

  const onDateClick = day => {
    setDate(getDate(day));
  };

  const onNextMonthClick = () => {
    setDate(1);
    if(month <= 11) {
      setMonth(month + 1);
    } else {
      setMonth(1); 
      setYear(year + 1);
    }
  };

  const onPrevMonthClick = () => {
    setDate(1);
    if(month !== 1) {
      setMonth(month - 1);
    } else {
      setMonth(11); 
      setYear(year - 1);
    }
  };

  const onMonthChange = month => {
    setMonth(month);
    setDate(1);
  }

  const onYearChange = year => {
    setYear(year);
    setDate(1);
  }


  const isValidDate = isValid(getCurrentDate(date, month, year));
  return ( 
    isValidDate ? 
    <main className={classes.calendar}>
      <Header onPrevMonthClick={onPrevMonthClick} onNextMonthClick={onNextMonthClick} month={month} year={year} currentDate={getCurrentDate(date, month, year)} onMonthChange={onMonthChange} onYearChange={onYearChange} />
      <Days currentDate={getCurrentDate(date, month, year)} />
      <Dates currentDate={getCurrentDate(date, month, year)} onDateClick={onDateClick} />
    </main> : <div className={classes.inValidDate}>You have selected an Invalid Date !!</div>
  );
}

export default Calendar;
