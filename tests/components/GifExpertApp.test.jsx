import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
    const onAddCategory = jest.fn();
    const inputValue = 'SaitamaExpert';

    test('estado inicial', () => {
        render(<GifExpertApp />);
        expect(onAddCategory).toHaveBeenCalledTimes(0);
    });

    test('verificando que se agrega la categoria', () => {
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(screen.getByText(inputValue)).toBeTruthy();
        screen.debug();
    });
});
