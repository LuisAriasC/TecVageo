import React from 'react';
import { connect } from 'react-redux';
import { action_get_travell_data } from '../actions/actions';

const mapear = dispatch => ({
  action_get_travell_data: () => dispatch(action_get_travell_data())
})

const mapearEstado = state => ({
  ...state.selectedOptions
});

class InitView extends React.Component {

  constructor(props){
    super(props);
    this.props.action_get_travell_data();
  }

  render(){
    return (
      <div>
          <p>{JSON.stringify(this.props)}</p>
      </div>
    );
  }
}

export default connect(mapearEstado, mapear)(InitView);