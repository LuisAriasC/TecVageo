import React from 'react';
import { connect } from 'react-redux';
import { action_get_travell_data } from '../actions/actions';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const mapear = dispatch => ({
  action_get_travell_data: () => dispatch(action_get_travell_data())
})

const mapearEstado = state => ({
  ...state.selectedOptions
});

class InitView extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <React.Fragment>
        <div style={{ width: '40%', marginLeft: '5%', marginTop: '5%', display:'relative'}}>
          <Carousel>
            <div>
              <img src={require('../img/vacaciones1.jpg')} />
            </div>
            <div>
              <img src={require('../img/vacaciones2.jpg')} />
            </div>
            <div>
              <img src={require('../img/vacaciones3.jpg')} />
            </div>
            <div>
              <img src={require('../img/vacaciones4.jpg')} />
            </div>
            <div>
              <img src={require('../img/vacaciones5.jpg')} />
            </div>
          </Carousel>
        </div>
        <div style={{ width: '40%', marginLeft: '5%', marginTop: '5%', display:'relative'}}>
          <Carousel>
            <div>
              <img src={require('../img/vacaciones1.jpg')} />
            </div>
            <div>
              <img src={require('../img/vacaciones2.jpg')} />
            </div>
            <div>
              <img src={require('../img/vacaciones3.jpg')} />
            </div>
            <div>
              <img src={require('../img/vacaciones4.jpg')} />
            </div>
            <div>
              <img src={require('../img/vacaciones5.jpg')} />
            </div>
          </Carousel>
        </div>
      </React.Fragment>

    );
  }
}

export default connect(mapearEstado, mapear)(InitView);