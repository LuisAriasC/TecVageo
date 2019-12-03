import React from 'react';
import { connect } from 'react-redux';
import {
  action_get_travell_data,
  action_add_option,
  action_get_options
} from '../actions/actions';
import { CssBaseline } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const mapear = dispatch => ({
  action_get_travell_data: (selectedTravell) => dispatch(action_get_travell_data(selectedTravell)),
  action_add_option: (option) => dispatch(action_add_option(option)),
  action_get_options: () => dispatch(action_get_options())
})

const mapearEstado = state => ({
  ...state.selectedOptions
});

class SelectView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
      renderList: false,
      reciebeOption: false
    }
  }

  componentDidMount() {
    console.log(this.props);
    const props = this.props.selectedTravell;
    this.props.action_get_travell_data(props);
    this.setState({
      renderList: true
    });
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  selectOption(id) {
    if (!this.props.opts)
      this.props.action_add_option(id);
    else
      this.props.action_add_option(id);
    this.setState({
      reciebeOption: true
    });
  }

  render() {
    return (
      <React.Fragment>
        {
          //<p>{JSON.stringify(this.props)}</p>
        }
        <Typography variant="h1" style={{ textAlign: 'center' }}>Destino</Typography>
        <CssBaseline />
        <Container>
          <Paper style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
          }}>
            <GridList cellHeight={250} style={{ width: '100%', height: 500 }}>
              {this.state.renderList && this.props.availableOptions.map(tile => (
                <GridListTile key={tile.id}>

                  <img src='https://www.entornoturistico.com/wp-content/uploads/2016/09/Productos-y-servicios-de-las-agencias-de-viajes-660x330.jpg' />
                  <GridListTileBar
                    title={tile.title}
                    subtitle={<span>
                      By: {tile.owner}
                      <br />
                      Cost: {tile.cost}
                    </span>
                    }
                    actionIcon={
                      <IconButton onClick={() => this.selectOption(tile.id)} aria-label={`info about ${tile.title}`} style={{ color: 'rgba(255, 255, 255, 0.54)' }}>
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </Paper>

          <Paper>
            <GridList style={{ flexWrap: 'nowrap', transform: 'translateZ(0)' }} cols={2.5}>
              {this.state.renderList && this.props.availableOptions.map(tile => (
                <GridListTile key={tile.img}>
                  <img src='https://image.freepik.com/vector-gratis/viajar-mundo_23-2147734014.jpg?3'/>
                  <GridListTileBar
                    title={tile.title}
                    classes={{
                      root: { background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)' },
                      title: { color: 'white' },
                    }}
                    actionIcon={
                      <IconButton aria-label={`star ${tile.title}`}>
                        <StarBorderIcon style={{ color: 'white' }} />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </Paper>
        </Container>
      </React.Fragment>
    );
  }
}

export default connect(mapearEstado, mapear)(SelectView);