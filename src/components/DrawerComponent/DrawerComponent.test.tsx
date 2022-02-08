import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DrawerComponent from './DrawerComponent';

describe('<DrawerComponent />', () => {
  test('it should mount', () => {
    render(<DrawerComponent />);
    
    const drawerComponent = screen.getByTestId('DrawerComponent');

    expect(drawerComponent).toBeInTheDocument();
  });
});