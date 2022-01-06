import { render, screen } from '@testing-library/react';
import Home from '../';

describe('Home', () => {
  it('should render div containing "test"', () => {
    render(<Home />);
    const div = screen.getByText('Hello World!');

    // jest.setup.js에 선언했기 때문에 import하지 않아도 됨.
    expect(div).toBeInTheDocument();
  });
});
