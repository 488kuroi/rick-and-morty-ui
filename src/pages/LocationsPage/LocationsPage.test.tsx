import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LocationsPage from './LocationsPage';

describe('<LocationsPage />', () => {
  test('it should mount', () => {
    render(<LocationsPage />);
    
    const locationsPage = screen.getByTestId('LocationsPage');

    expect(locationsPage).toBeInTheDocument();
  });
});