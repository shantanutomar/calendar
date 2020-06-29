import React from "react";
import { makeStyles } from '@material-ui/styles';
import { startOfWeek, format, addDays, toDate, isSameMonth, isSameDay, startOfMonth, endOfMonth, endOfWeek } from "date-fns";

const useStyles = makeStyles(theme => ({
  datesRow: {
    display: 'flex',
  },
  dates: {
    padding: '20px'
  },
  dateCell: {
    padding: '15px',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '5px',
    flexGrow: '1',
    flexBasis: '0',
    color: theme.textColorPrimary,
    border: '1px solid #fff',
    '&:hover': {
      border: `1px solid ${theme.primaryColor}`,
      cursor: 'pointer',
      color: theme.textColorPrimary
    },
  },
  dateSelected: {
    background: theme.primaryColor,
    color: theme.textColorPrimary,
    border: `1px solid ${theme.primaryColor}`,
    '&:hover': {
      background: theme.primaryColor,
      cursor: 'pointer',
      color: theme.textColorPrimary
    },
  },
  dateDisabled: {
    color: theme.textColorDisabled,
    pointerEvents: 'none',
    fontWeight: '500',
  }
}));

const Dates = props => {

  const classes = useStyles(props);
  const monthStart = startOfMonth(props.currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const dateFormat = "d";
  let dateRows = [];
  let dates = [];
  let date = startDate;

  while (date <= endDate) {
    for(let index = 0; index < 7; index++) {
      let showDate = format(date, dateFormat);
      const currentDateValue = date;
      dates.push(
        <div className={`${classes.dateCell} ${!isSameMonth(date, monthStart) ? classes.dateDisabled : isSameDay(date, props.currentDate) ? classes.dateSelected : ""}`}
          key={date} onClick={() => props.onDateClick(toDate(currentDateValue))}>
          {showDate}
        </div>
      );
      date = addDays(date, 1);
    }
    dateRows.push(<div className={classes.datesRow} key={date}>{dates}</div>);
    dates = [];
  }
  return <section className={classes.dates}>{dateRows}</section>;
}

export default Dates;