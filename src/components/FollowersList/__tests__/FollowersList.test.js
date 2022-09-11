import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockedFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe('FollowersList', () => {
  beforeEach(() => {
    console.log('Running before each test');
  });

  beforeAll(() => {
    console.log('Running once before all tests');
  });

  afterEach(() => {
    console.log('Running after each test');
  });

  afterAll(() => {
    console.log('Running once after all tests');
  });

  it('should render the first follower item', async () => {
    render(<MockedFollowersList />);
    const followerDivElement = await screen.findByTestId('follower-item-0');
    expect(followerDivElement).toBeInTheDocument();
  });

  it('should render the first follower item (2)', async () => {
    render(<MockedFollowersList />);
    const followerDivElement = await screen.findByTestId('follower-item-0');
    expect(followerDivElement).toBeInTheDocument();
  });

  it('should render the first follower item (3)', async () => {
    render(<MockedFollowersList />);
    const followerDivElement = await screen.findByTestId('follower-item-0');
    expect(followerDivElement).toBeInTheDocument();
  });

  // it('should render multiple follower items', async () => {
  //   render(<MockedFollowersList />);
  //   const followerDivElements = await waitFor(
  //     () => screen.findAllByTestId(/follower-item/i),
  //     { timeout: 5000 }
  //   );
  //   expect(followerDivElements.length).toBe(5);
  // });
});
