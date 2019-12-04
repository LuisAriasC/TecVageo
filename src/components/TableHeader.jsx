import React from 'react';
import StyledTableCell from './StyledTableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { columns } from '../data/history';

class TableHeader extends React.Component {

    render(){
        return (
            <TableHead>
                <TableRow>
                  {this.props.headers.map( column => (
                      <StyledTableCell key={column} case='head' align='center'>{column}</StyledTableCell>
                  ))}
                </TableRow>
            </TableHead>
        );
    }
}

export default TableHeader;
