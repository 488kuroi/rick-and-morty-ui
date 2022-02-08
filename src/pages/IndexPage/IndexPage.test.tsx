import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IndexPage from './IndexPage';

describe('<IndexPage />', () => {
  test('it should mount', () => {
    render(<IndexPage />);
    
    const indexPage = screen.getByTestId('IndexPage');

    expect(indexPage).toBeInTheDocument();
  });
});