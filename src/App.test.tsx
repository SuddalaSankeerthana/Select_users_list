import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { users } from './Data';
import App from './App';
import { idText } from 'typescript';

test('renders learn react link', () => {
  render(<App />);
  const addButton=screen.getByLabelText('Add');
  const submitButton = screen.getByRole('button',{ name: /Submit/i });
  expect(addButton).toBeInTheDocument();
  fireEvent.click(addButton)
  expect(submitButton).toBeInTheDocument();

});

