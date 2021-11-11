import { render, screen } from '@testing-library/react';
import { Repository } from './Repository';

test('renders repository component', () => {
    render(<Repository />);
    const repos = screen.getByRole('tab', {name:'Repositories'});
    const stars = screen.getByRole('tab', {name:'Starred'});
    expect(repos).toBeInTheDocument();
    expect(stars).toBeInTheDocument();
});