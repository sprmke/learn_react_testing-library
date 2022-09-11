import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe('TodoFooter', () => {
  it('should render the correct amount of incomplete tasks', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it('should render "task" when the number of incomplete tasks is one', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);

    // will pass if element is in the document
    expect(paragraphElement).toBeInTheDocument();

    // // will pass if value is not falsy value
    // expect(paragraphElement).toBeTruthy();

    // // will fail if element is hidden by css or js
    // expect(paragraphElement).toBeVisible();

    // // will check for HTML tags
    // expect(paragraphElement).toContainHTML('p');

    // // will check for text content
    // expect(paragraphElement).toHaveTextContent('1 task left');

    // // get the opposite of anything using .not
    // expect(paragraphElement).not.toBeFalsy();

    // // check element property value
    // expect(paragraphElement.textContent).toBe('1 task left');
  });
});
