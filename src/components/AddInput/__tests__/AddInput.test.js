import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddInput from '../AddInput';

const mockedSetTodos = jest.fn();

describe('AddInput', () => {
  it('should render input element', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it('should be able to type in input', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: 'Grocery Shopping' } });
    expect(inputElement.value).toBe('Grocery Shopping');
  });

  it('should have empty input when add button is clicked', () => {
    // arrange
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole('button');

    // act (fireEvent)
    // fireEvent.change(inputElement, { target: { value: 'Grocery Shopping' } });
    // fireEvent.click(buttonElement);

    // act (userEvent)
    userEvent.type(inputElement, 'Grocery Shopping');
    userEvent.click(buttonElement);

    // assert
    expect(inputElement.value).toBe('');
  });
});
