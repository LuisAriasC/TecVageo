import React from 'react';
import { connect } from 'react-redux';
import { action_get_travell_data } from '../actions/actions';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  loggedIn
} from '../actions/auth';


const mapear = dispatch => ({
  action_get_travell_data: () => dispatch(action_get_travell_data()),
  loggedIn: () => dispatch(loggedIn())
})

const mapearEstado = state => ({
  authValues: state.authOptions
});

class InitView extends React.Component {

  constructor(props) {
    super(props);
    
  }

  componentDidUpdate(){
    //console.log(this.props.authValues.isSignedIn);
  }
  render() {
    return (
      <div style={{display:'flex'}}>
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
        <div style={{ width: '40%', marginLeft: '5%', marginTop: '10%', display:'relative', textAlign:'center'}}>
          <h1>Arma tu paquete con TECVAGO</h1>
          <p>¡¡Aprovecha nuestro algoritmo para armar el mejor paquete que se adecue a tus gustos!!, Playa, Montaña, Pueblo mágico, lo que tu quieras
            encuentralo aqui
          </p>
            Tenemos opciones especiales sobre eventos temporales, por ejemplo, conciertos, exposiciones temporales, festividades locales y mucho mas
          <p>
            ¡Buscamos lugares de interes! Museos, Parques de diversiones, Plazas centrales, etc.
          </p>
          <p>
            No gastes tiempo buscando en que restaurante comer o en que hotel dormir, nosotros lo hacemos por ti
          </p>
        </div>
      </div>

    );
  }
}

export default connect(mapearEstado, mapear)(InitView);