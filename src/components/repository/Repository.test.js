import { render, screen } from '@testing-library/react';
import { Repository } from './Repository';
import Providers from '../../providers';

test('renders repository component', () => {
    render(<Providers mockData={true}/>);
    const repos = screen.getByRole('tab', {name:'Repositories'});
    const stars = screen.getByRole('tab', {name:'Starred'});
    expect(repos).toBeInTheDocument();
    expect(stars).toBeInTheDocument();
});