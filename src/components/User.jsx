import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getUserAction,
    updateUserAction
} from '../actions/users';
import TextField from '@material-ui/core/TextField';


import {
    Container,
    Typography,
    Paper,
    CssBaseline,
    Grid,
    Button
} from '@material-ui/core';

const mapear = dispatch => ({
    getUserAction: (token) => dispatch(getUserAction(token)),
    updateUserAction: (token, update) => dispatch(updateUserAction(token, update))
});

const mapearEstado = state => ({
    userValues: state.userOptions
});

class User extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            surname: '',
            username: '',
            email: '',
            no_viajes: 0,
            fetchedData: false
        }
    }

    /*
    componentWillMount(){
        console.log('cwm');
        if(!this.state.fetchedData){
            this.setState({
                name: this.props.userValues.user.name,
                surname: this.props.userValues.user.surname,
                username: this.props.userValues.user.username,
                email: this.props.userValues.user.email,
                no_viajes: this.props.userValues.travells,
                fetchedData: true
            });
        }
    }
    */

    componentDidMount(){
        console.log('cdm');
        const token = localStorage.getItem('tv-token');
        this.props.getUserAction(token);
    }

    componentWillUpdate(){
        console.log('cwu');
        if(!this.state.fetchedData){
            this.setState({
                name: this.props.userValues.user.name,
                surname: this.props.userValues.user.surname,
                username: this.props.userValues.user.username,
                email: this.props.userValues.user.email,
                no_viajes: this.props.userValues.travells,
                fetchedData: true
            });
        }
    }

    editUser = (event) => {
        event.preventDefault();
        this.props.updateUserAction(localStorage.getItem('tv-token'), {name: this.state.name, surname: this.state.surname, username: this.state.username});
        this.props.getUserAction(localStorage.getItem('tv-token'));
    }


    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container fixed>
                    <Paper>
                        <Typography variant="h1" style={{ textAlign: 'center' }}>Usuario</Typography>
                        <div>
                            <img src={require('../img/profile.png')} style={{ width: '10%', marginLeft: '45%' }} />
                        </div>

                        <Paper style={{marginBottom: '15px'}}>
                            <Typography variant="h5">Nombre</Typography>
                            <TextField
                              autoFocus
                              margin="dense"
                              id="name"
                              type="text"
                              value={this.state.name}
                              onChange={(event) => {this.setState({ name: event.target.value})}}
                              fullWidth
                            />
                        </Paper>

                        <Paper style={{marginBottom: '15px'}}>
                            <Typography variant="h5">Apellidos</Typography>
                            <TextField
                              autoFocus
                              margin="dense"
                              id="surname"
                              type="text"
                              value={this.state.surname}
                              onChange={(event) => {this.setState({ surname: event.target.value})}}
                              fullWidth
                            />
                        </Paper>

                        <Paper style={{marginBottom: '15px'}}>
                            <Typography variant="h5">Nombre de Usuario</Typography>
                            <TextField
                              autoFocus
                              margin="dense"
                              id="username"
                              type="text"
                              value={this.state.username}
                              onChange={(event) => {this.setState({ username: event.target.value})}}
                              fullWidth
                            />
                        </Paper>

                        <Paper style={{marginBottom: '15px'}}>
                            <Typography variant="h5">Email</Typography>
                            <Typography variant="p">{this.state.email}</Typography>
                        </Paper>

                        <Paper style={{marginBottom: '15px'}}>
                        <Typography variant="h5">Viajes realizados</Typography>
                        <Typography variant="p">{this.state.no_viajes}</Typography>
                        </Paper>

                        <Grid container alignItems="flex-start" spacing={2}>
                            <Grid item style={{ marginTop: 16 }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.editUser}
                                >
                                    Editar
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </React.Fragment>
        )
    }
}

export default connect(mapearEstado, mapear)(User);