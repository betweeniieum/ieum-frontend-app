import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import MainPage from '@app/page';

test('Page', () => {
  render(<MainPage />);
  expect(screen.getByRole('heading', { level: 1, name: '메인페이지' })).toBeDefined();
});
