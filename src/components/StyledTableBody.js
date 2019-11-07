import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import StyledTableCell from './StyledTableCell';
import Button from '@material-ui/core/Button';
import { rows } from '../data/StatesData';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Redirect } from "react-router-dom";

import { connect } from 'react-redux';
import _ from 'lodash';
import { action_set_history_option } from '../actions/actions';

const mapear = dispatch => ({
  action_set_history_option: (option) => dispatch(action_set_history_option(option))
})

const mapearEstado = state => ({
  ...state
});

class StyledTableBody extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      redirect: false
  }
  }

  componentDidMount(){
  }

  selectOption(id){
    this.props.action_set_history_option(id);
    this.setState({
      redirect: true
    })
  }

  render(){
    return (
        <TableBody>
          {this.state.redirect && <Redirect to="/tecvago/history/details"/>}
            {rows.map((row,index) => (
                <TableRow key={row.id}>
                    <StyledTableCell case='destination' component="th" scope="row"> {row.destination} </StyledTableCell>
                    <StyledTableCell color='white' align="right">{row.dates}</StyledTableCell>
                    <StyledTableCell color='white' align="right">{row.cost}</StyledTableCell>
                    <StyledTableCell color='white' align="right">{row.rating}</StyledTableCell>
                    <StyledTableCell color='white' align="right">
                      <Button onClick={() => this.selectOption(row.id)}>
                        <VisibilityIcon/>
                      </Button>
                    </StyledTableCell>
                </TableRow>
            ))}
        </TableBody>
    );
  }
}
export default connect(mapearEstado, mapear)(StyledTableBody);