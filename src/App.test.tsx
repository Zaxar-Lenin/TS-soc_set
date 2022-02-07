import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {  } from '.';
import store from './Redux/state';

test('renders learn react link', () => {
  render(<App state = {store.getState()} dispatсh={store.dispatсh.bind(store)}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
