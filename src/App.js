import React from "react"
import Calendar from "./Components/Calendar";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '34px 0',
    backgroundColor: theme.primaryColor,
    color: theme.textColorPrimary,
    textAlign: 'center',
    fontSize: '36px',
    fontWeight: '600',
    textTransform: 'uppercase'
  },
  calendarIcon: {
    fontSize: '38px',
    marginRight: '15px',  
  }
}));


const App = (props) => {
  const classes = useStyles(props);

  return (
    <>
      <header className={classes.header}>
        <div className={`${classes.calendarIcon} material-icons`}>today</div>
        Calendar
      </header>
      <Calendar />
    </>
  );
}

export default App;
