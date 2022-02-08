import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroVideoComponent from './HeroVideoComponent';

describe('<HeroVideoComponent />', () => {
  test('it should mount', () => {
    render(<HeroVideoComponent />);
    
    const heroVideoComponent = screen.getByTestId('HeroVideoComponent');

    expect(heroVideoComponent).toBeInTheDocument();
  });
});