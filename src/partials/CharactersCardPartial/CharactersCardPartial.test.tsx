import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CharactersCardPartial from './CharactersCardPartial';

describe('<CharactersCardPartial />', () => {
  test('it should mount', () => {
    render(<CharactersCardPartial />);
    
    const LocationCardPartial = screen.getByTestId('CharactersCardPartial');

    expect(LocationCardPartial).toBeInTheDocument();
  });
});