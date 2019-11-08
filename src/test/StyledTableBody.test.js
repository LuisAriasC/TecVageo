import React from 'react';
import ReactDOM from 'react-dom';
import StyledTableBody from '../components/StyledTableBody';

it('renders a TableBody', () => {
    const div = document.createElement('TableBody');
    ReactDOM.render(<StyledTableBody/>, div);
});