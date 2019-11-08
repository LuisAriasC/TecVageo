import React from 'react';
import ReactDOM from 'react-dom';
import TableHeader from '../components/TableHeader';


it('Renders a TableHead', () => {
    const tableHead = document.createElement('TableHead');
    ReactDOM.render(<TableHeader/>, tableHead);
});

it('Renders a TableRow', () => {
    const tableRow = document.createElement('TableRow');
    ReactDOM.render(<TableHeader/>, tableRow);
});

it('Renders a StyledTableCell', () => {
    const styledTableCell = document.createElement('StyledTableCell');
    ReactDOM.render(<TableHeader/>, styledTableCell);
});