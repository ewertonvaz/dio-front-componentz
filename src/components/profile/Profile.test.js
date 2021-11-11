import { render, screen } from '@testing-library/react';
import { Profile } from './Profile';
import { user as usuario} from '../../mock/data' ;

test('renders profile component', () => {
    render(<Profile user={usuario}/>);
    const imagem = screen.getByRole('img', { name: 'Github Avatar' });
    const name = screen.getByRole('heading', {name: 'Nome do Usuário'});
    const user = screen.getByRole('heading', {name: 'username'});
    const company = screen.getByRole('heading', {name: 'company'});
    const location = screen.getByRole('heading', {name: 'location'});
    const blog = screen.getByRole('heading', {name: 'blog'});
    const followers = screen.getByRole('heading', {name: 'followers'});
    const following = screen.getByRole('heading', {name: 'following'});
    const gists = screen.getByRole('heading', {name: 'gists'});
    const repos = screen.getByRole('heading', {name: 'repos'});
    expect(imagem).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(user).toBeInTheDocument();
    expect(company).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(blog).toBeInTheDocument();
    expect(followers).toBeInTheDocument();
    expect(following).toBeInTheDocument();
    expect(gists).toBeInTheDocument();
    expect(repos).toBeInTheDocument();
  });