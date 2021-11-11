import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main interface', () => {
  render(<App />);
  const layoutComponent = screen.getByRole('main', {name: 'layout'});
  const profileComponent = screen.getByRole('separator', {name : 'profile'});
  const reposComponent = screen.getByRole('separator', {name:'repository'});
  expect(layoutComponent).toBeInTheDocument();
  expect(profileComponent).toBeInTheDocument();
  expect(reposComponent).toBeInTheDocument();
});