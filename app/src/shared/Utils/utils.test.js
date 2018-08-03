import React from 'react';
import ReactDOM from 'react-dom';
import { getCurrencySymbol, getCondition } from './utils';

it('Shoud get $ as currency Simbol', () => {
    expect(getCurrencySymbol('ARS')).toBe('$');
    expect(getCurrencySymbol('')).toBe('$');
});

it('Shoud get spanish language condition', () => {
    expect(getCondition('used')).toBe('Usado');
    expect(getCondition('new')).toBe('Nuevo');
    expect(getCondition('')).toBe('');
});