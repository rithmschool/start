import { test, expect } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';

import App from './App.js';


test('renders counter button', function () {
  render(<App />);
  const buttonElement = screen.getByText(/Clicked: 0/i);
  expect(buttonElement).toBeInTheDocument();
});

test('count increases on button click', function () {
  render(<App />);
  const buttonElement = screen.getByText(/Clicked: 0/i);
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent(/Clicked: 1/i);
});

test('matches snapshot', function () {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
