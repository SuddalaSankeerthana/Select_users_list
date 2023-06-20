import React from 'react';
import { render, screen } from '@testing-library/react';
import { users } from './Data';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const submitButton = screen.getByRole('button', {name: /Submit/i });
  const addButton=screen.getByLabelText('Add');

});

