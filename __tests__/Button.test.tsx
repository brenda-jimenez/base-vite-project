import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Button } from '../src/components/Button';

describe('Button Component', () => {
  it('renders button', () => {
    render(<Button />);

    const button = screen.getByText('Hello 0');
    expect(button).toBeInTheDocument();
  });

  it('increments count on click', async () => {
    const user = userEvent.setup();
    render(<Button />);

    // Simulate a click event
    const button = screen.getByRole('button');
    await user.click(button);

    const counter = screen.getByText('Hello 1');
    expect(counter).toBeInTheDocument();
  });
});
