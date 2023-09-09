import { render, screen } from '@testing-library/react';
import App from './App';
/* Created By Mohamed Gamal - mohamed--gamal.vercel.app */
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
