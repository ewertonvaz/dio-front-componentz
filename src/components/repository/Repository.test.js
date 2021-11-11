import { render, screen } from '@testing-library/react';
import { Repository } from './Repository';

test('renders repository component', () => {
    render(<Repository />);
    const repos = screen.getByText(/Repositories/i);
    const stars = screen.getByText(/Starred/i);
    expect(repos).toBeInTheDocument();
    expect(stars).toBeInTheDocument();
});