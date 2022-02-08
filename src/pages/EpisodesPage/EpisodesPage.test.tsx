import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EpisodesPage from './EpisodesPage';

describe('<EpisodesPage />', () => {
  test('it should mount', () => {
    render(<EpisodesPage />);
    
    const episodesPage = screen.getByTestId('EpisodesPage');

    expect(episodesPage).toBeInTheDocument();
  });
});