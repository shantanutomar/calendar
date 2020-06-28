import { useState, useCallback } from "react";
import qs from "query-string";
import { parse } from "date-fns";

const setQueryParamsInUrl = queryString => { 
  const newUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}${queryString}`;
  window.history.pushState({ path: newUrl }, "", newUrl);
};

const getValuesFromQueryString = (key, queryString = window.location.search) => {
  const values = qs.parse(queryString);
  return Number(values[key]);
};

const setValuesInQueryString = ( key, value, queryString = window.location.search ) => { 
   const values = qs.parse(queryString); 
   const newQsValue = qs.stringify({ ...values, [key]: value });
   setQueryParamsInUrl(`?${newQsValue}`);
};

export const useQueryStringState = (key, initialValue) => {
  const [currentValue, setValue] = useState(getValuesFromQueryString(key) || initialValue);
  const setNewValue = useCallback(newValue => {
    setValue(newValue);
    setValuesInQueryString(key, newValue);
  }, [key]);

  return [currentValue, setNewValue];
}

export const getCurrentDate = (date, month, year) => {
  return parse(`${year}-${month}-${date}`, 'yyyy-MM-dd', new Date());
}
