import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Hello from '../Hello';

describe('Hello component', () => {
  test('renders the correct greeting', () => {
    render(<Hello name="World" />);
    const greetingElement = screen.getByText(/Hello, World!/i);
    expect(greetingElement).toBeInTheDocument();
  });
});
