import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renderiza um botão com um texto', () => {
    render(<Button>Teste</Button>);

    const buttonE1 = screen.getByText(/Test/i);

    expect(buttonE1).toBeInTheDocument
});