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
  it('should render the first follower item', async () => {
    render(<MockedFollowersList />);
    const followerDivElement = await screen.findByTestId('follower-item-0');
    screen.debug();
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
