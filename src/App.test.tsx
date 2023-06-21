import React from 'react';
import {  render, screen } from '@testing-library/react';
import App from './App';
describe("User list test",()=>{test('test for invite user text', () => {
  render(<App />);
  const invite=screen.getByText('Invite users');
  expect(invite).toBeInTheDocument();
});
})

