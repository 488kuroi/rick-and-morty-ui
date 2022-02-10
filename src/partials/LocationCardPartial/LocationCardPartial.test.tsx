import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LocationCardPartial from './LocationCardPartial';

describe('<LocationCardPratial />', () => {
  test('it should mount', () => {
    render(<LocationCardPartial />);
    
    const locationCardPartial = screen.getByTestId('LocationCardPartial');

    expect(locationCardPartial).toBeInTheDocument();
  });
});