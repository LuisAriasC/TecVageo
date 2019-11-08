import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { action_get_initial_values,
         action_set_travell_data
} from '../actions/actions';

import {
    Container,
    Typography,
    Paper,
    Link,
    Grid,
    Button,
    CssBaseline,
    RadioGroup,
    FormLabel,
    MenuItem,
    FormGroup,
    FormControl,
    FormControlLabel,
    TextField,
    InputLabel,
    Checkbox,
    Radio,
    Select,
    Input
} from '@material-ui/core';
import { Redirect } from "react-router-dom";



const mapear = dispatch => ({
    action_get_initial_values: () => dispatch(action_get_initial_values()),
    action_set_travell_data: (travellData) => dispatch(action_set_travell_data(travellData)),
})

const mapearEstado = state => ({
    initialValues: state.initialValues
});

class MainScreen extends React.Component {

    constructor(props){
        super(props);
        this.props.action_get_initial_values();
        this.state = {
            type:'',
            country: '',
            destination: '',
            redirect: false
        }
    }

    componentDidMount(){
        //this.props.action_get_initial_values();
    }

    componentDidUpdate(){
        console.log(this.props);
    }

    renderTravellTypes = () => {
        if(!_.isEmpty(this.props.initialValues)){
            return this.props.initialValues.travellTypes.map( travellType => {
                return(
                    <MenuItem key={travellType} value={travellType}>{travellType}</MenuItem>
                );
            });
        }
    }

    renderCountries = () => {
        if(!_.isEmpty(this.props.initialValues)){
            return this.props.initialValues.countries.map( country => {
                return(
                    <MenuItem key={country} value={country}>{country}</MenuItem>
                );
            });
        }
    }

    renderDestinations = () => {
        if(!_.isEmpty(this.props.initialValues)){
            return this.props.initialValues.destinations.map( destination => {
                return(
                    <MenuItem key={destination} value={destination}>{destination}</MenuItem>
                );
            });
        }
    }

    handleTravell = (event) => {
        this.setState({
            type: event.target.value
        })
    }

    handleCountry = (event) => {
        this.setState({
            country: event.target.value
        })
    }

    handleDestination = (event) => {
        this.setState({
            destination: event.target.value
        })
    }

    resetValues = (event) => {
        event.preventDefault();
        this.setState({
            type: '',
            country: '',
            destination: ''
        });
        //console.log(this.state);
        this.props.action_get_travell_data();
    }

    searchTravell = (event) => {
        event.preventDefault();
        //console.log(this.state);
        this.props.action_set_travell_data(this.state);
        this.setState({
            redirect: !this.state.redirect
        })
    }

    render(){
        
        return(
            
            <React.Fragment>
                {this.state.redirect && <Redirect to="/tecvago/select"/>}
                {
                    //<p>{JSON.stringify(this.props)}</p>
                }
                <CssBaseline />
                <Container fixed>
                    <Paper>
                        <Typography variant="h1" style={{textAlign: 'center'}}>TecVago</Typography>
                        <Typography variant="h3" style={{textAlign: 'center'}}>Dinos a donde, cuando, como y con que ...</Typography>
                        <Typography variant="h3" style={{textAlign: 'center'}}>Sabremos que recomendarte</Typography>
                    </Paper>
                    <Paper>
                        <form noValidate autoComplete="off">
                        
                          <Paper style={{ padding: 16 }}>
                            <Grid container alignItems="flex-start" spacing={2}>
                              
                                <FormControl style={{width: '100%'}}>
                                    <InputLabel id="demo-simple-select-label">Tipo de Destino</InputLabel>
                                    <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={this.state.type}
                                      onChange={this.handleTravell}
                                    >
                                    {this.renderTravellTypes()}
                                  </Select>
                                </FormControl>

                                <FormControl style={{width: '100%'}}>
                                    <InputLabel id="demo-simple-select-label">País</InputLabel>
                                    <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={this.state.country}
                                      onChange={this.handleCountry}
                                    >
                                    {this.renderCountries()}
                                  </Select>
                                </FormControl>
                                
                                <FormControl style={{width: '100%'}}>
                                    <InputLabel id="demo-simple-select-label">Destino</InputLabel>
                                    <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={this.state.destination}
                                      onChange={this.handleDestination}
                                    >
                                    {this.renderDestinations()}
                                  </Select>
                                </FormControl>
                                    
                              <Grid item style={{ marginTop: 16 }}>
                                <Button
                                  variant="contained"
                                  onClick={this.resetValues}
                                >
                                  Reset
                                </Button>
                              </Grid>
                              
                              <Grid item style={{ marginTop: 16 }}>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={this.searchTravell}
                                >
                                  Submit
                                </Button>
                              </Grid>
                            </Grid>
                          </Paper>
                        </form>
                    </Paper>
                </Container>
            </React.Fragment>
        );
    }
}
export default connect(mapearEstado, mapear)(MainScreen);