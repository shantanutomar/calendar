import React from 'react';
import Calendar from "./Components/Calendar";
import Dates from "./Components/Dates";
import Days from "./Components/Days";
import Header from "./Components/Header";
import renderer from 'react-test-renderer';

it('Calendar Snapshot generated correctly', () => {
  const tree = renderer
    .create(<Calendar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Dates Snapshot generated correctly', () => {
  const tree = renderer
    .create(<Dates />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Days Snapshot generated correctly', () => {
  const tree = renderer
    .create(<Days currentDate={new Date()}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Header Snapshot generated correctly', () => {
  const tree = renderer
    .create(<Header />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});