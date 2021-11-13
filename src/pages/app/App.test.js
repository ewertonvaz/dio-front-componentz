import { render, screen } from '@testing-library/react';
import App from './App';
import Providers from '../../providers';

test('renders main interface', () => {
  render(<Providers />);
  const layoutComponent = screen.getByRole('main', {name: 'layout'});
  const profileComponent = screen.getByRole('separator', {name : 'profile'});
  const reposComponent = screen.getByRole('tablist', {name:'repository'});
  expect(layoutComponent).toBeInTheDocument();
  expect(profileComponent).toBeInTheDocument();
  expect(reposComponent).toBeInTheDocument();
});