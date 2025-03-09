import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../../stories/Button';

describe('Button component', () => {
  test('renders correctly with default props', () => {
    render(<Button label="Button" />);
    const buttonElement = screen.getByText(/Button/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('applies primary class when primary prop is true', () => {
    render(<Button primary label="Button" />);
    const buttonElement = screen.getByText(/Button/i);
    expect(buttonElement).toHaveClass('storybook-button--primary');
  });

  test('applies secondary class when primary prop is false', () => {
    render(<Button label="Button" />);
    const buttonElement = screen.getByText(/Button/i);
    expect(buttonElement).toHaveClass('storybook-button--secondary');
  });

  test('applies correct size class', () => {
    render(<Button size="large" label="Button" />);
    const buttonElement = screen.getByText(/Button/i);
    expect(buttonElement).toHaveClass('storybook-button--large');
  });

  test('applies background color when provided', () => {
    render(<Button backgroundColor="red" label="Button" />);
    const buttonElement = screen.getByText(/Button/i);
    expect(buttonElement).toHaveStyle({ backgroundColor: 'red' });
  });

  test('calls onClick handler when clicked', () => {
    const onClick = jest.fn();
    render(<Button label="Button" onClick={onClick} />);
    const buttonElement = screen.getByText(/Button/i);
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
