import { render, screen, fireEvent } from '@testing-library/react';
import { Layout } from './Layout';

test('displays search text input and button', () => {
    render(<Layout />);
    const searchButton = screen.getByRole('button', { name: 'buscar' });
    const searchText = screen.getByRole('textbox', { name: 'username' }); //Input type=text
    expect(searchButton).toBeInTheDocument();
    expect(searchText).toBeInTheDocument();
  })

test('Activates call back on click', ()=> {
    const callback = jest.fn();
    render(<Layout onUpdate={callback} />);
    const buttonEl = screen.getByRole('button', { name: 'buscar' }); 
    fireEvent.click(buttonEl);
    expect(callback).toHaveBeenCalledTimes(1);
});