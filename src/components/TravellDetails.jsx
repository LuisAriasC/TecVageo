import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { action_get_travell_details } from '../actions/actions';
import Table from '@material-ui/core/Table';
import {
    Container,
    Typography,
    Paper,
    CssBaseline
} from '@material-ui/core';
import { Redirect } from "react-router-dom";
import StyledTableCell from './StyledTableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { detailsColumns } from '../data/history';
import TableBody from '@material-ui/core/TableBody';



const mapear = dispatch => ({
    action_get_travell_details: (option) => dispatch(action_get_travell_details(option))
})

const mapearEstado = state => ({
    historyOptions: state.historyOptions
});

class TravellDetails extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            renderList: false
        }
    }

    componentDidMount(){
        //this.props.action_get_initial_values();
        console.log(this.props.historyOptions);
        this.props.action_get_travell_details(this.props.historyOptions.selectedHistory);
        this.setState({
            renderList: true
        });
    }



    render(){
        
        return(
            
            <React.Fragment>
                {
                    //<p>{JSON.stringify(this.props)}</p>
                }
                <CssBaseline />
                <Container fixed>
                    <Paper>
                        <Typography variant="h1" style={{textAlign: 'center'}}>Detalles</Typography>
                        <Table>
                            <TableHead>
                                <TableRow>
                                  {detailsColumns.map( column => (
                                      <StyledTableCell key={column} case='head' align='center'>{column}</StyledTableCell>
                                  ))}
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {this.state.renderList && this.props.historyOptions.travellDetails.map((row,index) => (
                                    <TableRow key={row.id}>
                                        <StyledTableCell case='detail' component="th" scope="row"> {row.placeEvent} </StyledTableCell>
                                        <StyledTableCell color='white' align="right">{row.date}</StyledTableCell>
                                        <StyledTableCell color='white' align="right">{row.cost}</StyledTableCell>
                                        <StyledTableCell color='white' align="right">{row.rank}</StyledTableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Container>
            </React.Fragment>
        );
    }
}
export default connect(mapearEstado, mapear)(TravellDetails);