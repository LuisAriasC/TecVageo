import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableHeader from './TableHeader';
import StyledTableBody from './StyledTableBody';

class TravellHistory extends React.Component {

    constructor(props){
        super(props);
    }



  render(){
    return (
        <React.Fragment>
            <Typography variant="h1" style={{textAlign: 'center'}}>Historial</Typography>
            <CssBaseline/>
            <Container>
                <Paper style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                        overflow: 'hidden',
                }}>
                    <Table>
                        <TableHeader/>
                        <StyledTableBody/>
                    </Table>
                </Paper>
            </Container>
        </React.Fragment>
    );
  }
}

export default TravellHistory;