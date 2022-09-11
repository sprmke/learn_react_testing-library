import { render, screen } from '@testing-library/react';
import Header from '../Header';

// GET BY
it('should render same text passed into title prop (getByText)', () => {
  render(<Header title='My Header' />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// it('should render same text passed into title prop (getByRole)', () => {
//   render(<Header title='My Header' />);
//   const headingElement = screen.getByRole('heading', { name: 'My Header' });
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into title prop (getByTitle)', () => {
//   render(<Header title='My Header' />);
//   const headingElement = screen.getByTitle('Header');
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into title prop (getByTestId)', () => {
//   render(<Header title='My Header' />);
//   const headingElement = screen.getByTestId('header-1');
//   expect(headingElement).toBeInTheDocument();
// });

// // FIND BY
// it('should render same text passed into title prop (findBy)', async () => {
//   render(<Header title='My Header' />);
//   const headingElement = await screen.findByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// // QUERY BY
// it('should render same text passed into title prop (queryBy)', () => {
//   render(<Header title='My Header' />);
//   const headingElement = screen.queryByText(/dogs/i);
//   expect(headingElement).not.toBeInTheDocument();
// });

// // GET ALL BY
// it('should render same text passed into title prop (getAllBy)', () => {
//   render(<Header title='My Header' />);
//   const headingElements = screen.getAllByRole('heading');
//   expect(headingElements.length).toBe(2);
// });

// test
