import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import Grid from '@material-ui/core/Grid';
import TableHeader from './TableHeader';
import StyledTableBody from './StyledTableBody';
import { rows } from '../data/StatesData';
import { GradientDefs, RadialChart, Hint } from 'react-vis'



class TravellHistory extends React.Component {

    state = {
        value: false
    };
    constructor(props){
        super(props)
        console.log(rows)
        const totalBeach = rows.reduce((currentTotal, item) => {
            return item.type === 'Playa' ?  item.cost + currentTotal : 0 + currentTotal
        }, 0)
        const totalCity = rows.reduce((currentTotal, item) => {
            return item.type === 'Ciudad' ?  item.cost + currentTotal : 0 + currentTotal
        }, 0)
        const totalTown = rows.reduce((currentTotal, item) => {
            return item.type === 'Pueblo' ?  item.cost + currentTotal : 0 + currentTotal
        }, 0)
        const totalEco = rows.reduce((currentTotal, item) => {
            return item.type === 'Ecoturismo' ?  item.cost + currentTotal : 0 + currentTotal
        }, 0)
        
        this.state = {
            data: [{angle: totalBeach, name: 'Playa', color: '#89DAC1'}, {angle: totalCity, name: 'Ciudad', color: '#F6D18A'}, {angle: totalTown, name: 'Pueblo', color: '#1E96BE'}, {angle: totalEco, name: 'Ecoturismo', color: '#F6D18A'}]
        }
        
    }



  render(){
    const {value} = this.state;
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
                        <TableHeader/>
                        <StyledTableBody/>
                    </Table>
                </Paper>
                <Paper>
                    <Typography variant="h4" style={{textAlign: 'center'}}>Tu balance de gastos por tipo de destino</Typography>

                    <Grid container justify = "center">
                        <RadialChart
                          colorType={'literal'}
                          colorDomain={[0, 100]}
                          colorRange={[0, 10]}
                          margin={{top: 100}}
                          getLabel={d => d.name}
                          data={this.state.data}
                          labelsRadiusMultiplier={1.1}
                          labelsStyle={{fontSize: 16, fill: '#222'}}
                          showLabels
                          style={{stroke: '#fff', strokeWidth: 2}}
                          width={400}
                          height={300}
                        />
                    </Grid>
                    
                </Paper>
            </Container>
        </React.Fragment>
    );
  }
}

export default TravellHistory;