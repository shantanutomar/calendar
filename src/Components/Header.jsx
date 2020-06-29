import React from "react";
import { makeStyles } from '@material-ui/styles';

const months = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
const years = [...Array(201).keys()]; 
const startYear = 1900;

const useStyles = makeStyles(theme => ({
  header: {
    padding: '35px 5px',
    display: 'flex',
    backgroundColor: theme.primaryColor,
    borderRadius: '10px 10px 0 0',
    color: theme.textColorPrimary,
    justifyContent: 'space-around',
    alignItems: 'center',
    boxShadow: '0 0 8px 0 rgba(0,0,0,0.3)'
  },
  select: {
    padding: '2px',
    fontWeight: '600',
    fontSize: '20px',
    cursor: 'pointer',
    width: '160px',
    margin: '0 5px',
    outline: 'none',
    backgroundColor: theme.primaryColor,
    color: theme.textColorPrimary,
    border: 'none'
  },
  year: {
    width: '82px'
  },
  arrow: {
    height: '24px',
    width: '24px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  arrowDisabled: {
    pointerEvents: 'none',
    color: '#ccc',
  },
}));

const Header = props => {
  const classes = useStyles(props);

  return (
    <section className={`${classes.header}`}>
      <div className={classes.arrow}>
        <div className={props.year === startYear && props.month === 1 ? `material-icons ${classes.arrowDisabled}` : "material-icons"} onClick={props.onPrevMonthClick}>
          keyboard_arrow_left
        </div>
      </div>
      <div>
        <select className={classes.select} value={props.month} onChange={(event) => props.onMonthChange(Number(event.target.value))}>
          {months.map((month, index) => <option key={month} value={index + 1}>{month}</option>)}
        </select>
        <select className={`${classes.select} ${classes.year}`} value={props.year} onChange={(event) => props.onYearChange(Number(event.target.value))}>
          {years.map(year => <option key={startYear + year} value={startYear + year}>{startYear + year}</option>)}
        </select>
      </div>
      <div className={classes.arrow}>
        <div className={props.year === 2100 && props.month === 12 ? `material-icons ${classes.arrowDisabled}` : "material-icons"} onClick={props.onNextMonthClick}>
          keyboard_arrow_right
        </div>
      </div>
    </section>
  );
}

export default Header;