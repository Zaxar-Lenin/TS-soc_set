import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {  } from '.';
import { addMasseng, addUsers, state, updateValueMasseng, updateValueText } from './Redux/state';

test('renders learn react link', () => {
  render(<App state = {state} addUsers = {addUsers} updateValueText = { updateValueText} addMasseng ={addMasseng}  updateValueMasseng = {updateValueMasseng}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
