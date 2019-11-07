import React, { Component } from 'react';
import {
    Container,
    Typography,
    Paper,
    CssBaseline,
    Grid,
    Button
} from '@material-ui/core';

class User extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "César Armando Valladares Martínez",
            id: "AA001",
            recom: [
                "Restaurantes",
                "Eventos",
            ],
            no_viajes: 10
        }
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
                            <Typography variant="p">{this.state.name}</Typography>
                        </Paper>
                        <Paper style={{marginBottom: '15px'}}>
                        <Typography variant="h5">ID</Typography>
                        <Typography variant="p">{this.state.id}</Typography>
                        </Paper>
                        <Paper style={{marginBottom: '15px'}}>
                        <Typography variant="h5">Viajes realizados</Typography>
                        <Typography variant="p">{this.state.no_viajes}</Typography>
                        </Paper>
                        <Paper style={{marginBottom: '15px'}}>
                        <Typography variant="h5">Recomentaciones Activas</Typography>
                        {this.state.recom.map(recomU => {
                            return (
                                <div>
                                    <Typography variant="h7">{recomU}</Typography>
                                </div>
                            );
                        })}
                        </Paper>
                        <Grid container alignItems="flex-start" spacing={2}>
                            <Grid item style={{ marginTop: 16 }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.searchTravell}
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

export default User;