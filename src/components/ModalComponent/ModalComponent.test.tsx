import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModalComponent from './ModalComponent';

describe('<ModalComponent />', () => {
  test('it should mount', () => {
    render(<ModalComponent />);
    
    const modalComponent = screen.getByTestId('ModalComponent');

    expect(modalComponent).toBeInTheDocument();
  });
});