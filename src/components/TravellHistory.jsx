import React from 'react';
import { connect } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import Grid from '@material-ui/core/Grid';
import TableHeader from './TableHeader';
import StyledTableBody from './StyledTableBody';
import { rows } from '../data/StatesData';
import { RadialChart } from 'react-vis'
import {
    getTravelHistory
} from '../actions/travel';


const mapear = dispatch => ({
    getTravelHistory: () => dispatch(getTravelHistory())
})

const mapearEstado = state => ({
    ...state.travelOptions
});


class TravellHistory extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            renderData: false
        }
    }

    componentDidMount(){
        if(!this.state.renderData) {
            this.props.getTravelHistory();
            this.setState({
                renderData: true
            });
        }
    }



  render(){
      console.log('RENDER HISTORY: ', this.props);
      console.log('STATE IN RENDER ', this.state);
      var values;
      if(this.state.renderData){
          values = this.props.travels
      }
      console.log('Values ', values);
    /*
    var data = [];
    if(!this.props.travelValues){
        data.push({angle: 1, name: 'Playa', color: '#89DAC1'});
        data.push({angle: 1, name: 'Ciudad', color: '#F6D18A'});
        data.push({angle: 1, name: 'Pueblo', color: '#1E96BE'});
        data.push({angle: 1, name: 'Ecoturismo', color: '#F6D18A'});

    } else {
        const totalBeach = this.props.travelValues.travels.reduce((currentTotal, item) => {
            return item.type === 'Playa' ?  item.cost + currentTotal : 0 + currentTotal
        }, 0)
        const totalCity = this.props.travelValues.travels.reduce((currentTotal, item) => {
            return item.type === 'Ciudad' ?  item.cost + currentTotal : 0 + currentTotal
        }, 0)
        const totalTown = this.props.travelValues.travels.reduce((currentTotal, item) => {
            return item.type === 'Pueblo' ?  item.cost + currentTotal : 0 + currentTotal
        }, 0)
        const totalEco = this.props.travelValues.travels.reduce((currentTotal, item) => {
            return item.type === 'Ecoturismo' ?  item.cost + currentTotal : 0 + currentTotal
        }, 0)
        data = [{angle: totalBeach, name: 'Playa', color: '#89DAC1'}, {angle: totalCity, name: 'Ciudad', color: '#F6D18A'}, {angle: totalTown, name: 'Pueblo', color: '#1E96BE'}, {angle: totalEco, name: 'Ecoturismo', color: '#F6D18A'}];
    }
    */

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
                        <TableHeader headers={['Destino', 'Fechas', 'Precio', 'Rating', 'Ver Detalle']}/>
                        {this.state.renderData && <StyledTableBody/>}
                    </Table>
                </Paper>
                <Paper>
                    <Typography variant="h4" style={{textAlign: 'center'}}>Tu balance de gastos por tipo de destino</Typography>

{
//                    <Grid container justify = "center">
//                        <RadialChart
//                          colorType={'literal'}
//                          colorDomain={[0, 100]}
//                          colorRange={[0, 10]}
//                          margin={{top: 100}}
//                          getLabel={d => d.name}
//                          data={data}
//                          labelsRadiusMultiplier={1.1}
//                          labelsStyle={{fontSize: 16, fill: '#222'}}
//                          showLabels
//                          style={{stroke: '#fff', strokeWidth: 2}}
//                          width={400}
//                          height={300}
//                        />
//                    </Grid>
}                    
                </Paper>
            </Container>
        </React.Fragment>
    );
  }
}

export default connect(mapearEstado, mapear)(TravellHistory);