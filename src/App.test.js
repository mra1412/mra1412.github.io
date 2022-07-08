import { render, screen } from '@testing-library/react';
import App from './main-component/App/App';

test('renders i am rehan link', () => {
  render(<App />);
  const linkElement = screen.getByText(/i am rehan/i);
  expect(linkElement).toBeInTheDocument();
});
