import React from 'react';
import { render, screen } from '@testing-library/react';
import {Login} from '../components/Login';

describe('Comprobar login', () => {
    it('Podría existir un submit button', () => {
        render( <Login/>)
        
        expect(
            screen.getByRole('button',{ name: /Submit/i}),
            ).toBeInTheDocument();
        })
})