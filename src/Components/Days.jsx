import React from "react";
import { startOfWeek, format, addDays } from "date-fns";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  days: {
    padding: '20px 0',
    color: theme.textColorPrimary,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontWeight: '500',
  },
  day: {
    flexGrow: '1',
    flexBasis: '0',
    justifyContent: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 600,
    fontSize: '18px',
  },
}));

const Days = props => {
  const classes = useStyles(props);

  const dateFormat = "EEE";
  const days = [];
  let startDate = startOfWeek(props.currentDate);
  for (let index = 0; index < 7; index++) {
    days.push(
      <div className={classes.day} key={index}>{format(addDays(startDate, index), dateFormat)}</div>
    );
  }
  
  return <section className={`${classes.days}`}>{days}</section>;
}

export default Days;