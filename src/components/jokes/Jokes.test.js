import { render, screen, fireEvent } from '@testing-library/react';
import { Jokes } from './Jokes';

const joke = 'test joke';

test('renderiza a piada e o botão recebido', () => {
    render(<Jokes joke={joke} />);

    const jokeE1 = screen.getByText(/test joke/i);
    const buttonE1 = screen.getByRole('button');

    expect(jokeE1).toBeInTheDocument();
    expect(buttonE1).toBeInTheDocument();
});

test('chama uma callback quando o botão é pressionado', () => {
    const callback = jest.fn();
    
    render(<Jokes joke={joke} onUpdate={callback} />);

    const buttonE1 = screen.getByRole('button');
    
    fireEvent.click(buttonE1);
    expect(callback).toHaveBeenCalledTimes(1);
})