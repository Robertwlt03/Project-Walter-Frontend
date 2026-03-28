import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import App from './App';

describe('App Komponente', () => {
  test('sollte das Projekt korrekt initialisieren', () => {
    render(<App />);

    const heading = screen.getByText('Get started');
    expect(heading).toBeInTheDocument();
  });
});
