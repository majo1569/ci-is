import React from 'react';
import { render,screen } from '@testing-library/react';
import {Form} from '../components/Form';

describe('Comprobacion de formulario', () => {
    it('Podria existir un submit button', () => {
        render(<Form/>)
        expect(
            screen.getByRole('button', {name: /Submit/i}), ).toBeInTheDocument();
        
    })
}
)