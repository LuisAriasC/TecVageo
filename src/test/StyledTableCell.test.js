import React from 'react';
import ReactDOM from 'react-dom';
import StyledTableCell from '@material-ui/core/TableCell';

it('Creates Table Cell', () => {
    const div = document.createElement('TableCell');
    ReactDOM.render(<StyledTableCell/>, div);
});