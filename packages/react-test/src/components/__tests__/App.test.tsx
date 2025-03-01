import { render, screen } from '@testing-library/react';
import App from '../../App';

test('renders Header, MainContent, and Footer', () => {
  render(<App />);
  expect(screen.getByText('Header')).toBeInTheDocument();
  expect(screen.getByText('Main Content')).toBeInTheDocument();
  expect(screen.getByText('Footer')).toBeInTheDocument();
});
