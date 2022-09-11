import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockedTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole('button', { name: /Add/i });

  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe('Todo', () => {
  it('should display the input value to the list when add button is clicked', () => {
    // arrange
    render(<MockedTodo />);

    // act
    addTask(['Grocery Shopping']);

    // assert
    const divElement = screen.getByText(/Grocery Shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  it('should return the correct total list count', () => {
    // arrange
    render(<MockedTodo />);

    // const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    // const buttonElement = screen.getByRole('button', { name: /Add/i });

    // fireEvent.change(inputElement, { target: { value: 'Task 1' } });
    // fireEvent.click(buttonElement);

    // fireEvent.change(inputElement, { target: { value: 'Task 2' } });
    // fireEvent.click(buttonElement);

    // fireEvent.change(inputElement, { target: { value: 'Task 3' } });
    // fireEvent.click(buttonElement);

    // act
    addTask(['Task 1', 'Task 2', 'Task 3']);

    // assert
    const divElements = screen.getAllByTestId('todo-item');
    expect(divElements.length).toBe(3);
  });

  it('should not have completed class when initially added', () => {
    // arrange
    render(<MockedTodo />);

    // act
    addTask(['Task 1']);

    // assert
    const divElement = screen.getByText(/Task 1/i);
    expect(divElement).not.toHaveClass('todo-item-active');
  });

  it('should have completed class a task is clicked', () => {
    // arrange
    render(<MockedTodo />);

    // act
    addTask(['Task 1']);

    // assert
    const divElement = screen.getByText(/Task 1/i);
    expect(divElement).not.toHaveClass('todo-item-active');
    fireEvent.click(divElement);
    expect(divElement).toHaveClass('todo-item-active');
  });
});
