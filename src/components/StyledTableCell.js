import React from 'react';
import TableCell from '@material-ui/core/TableCell';
//import { rgbToHex } from '@material-ui/core/styles';

class StyledTableCell extends React.Component {

    componentToHex = (c) => {
        let hex;
        if(c){
            hex = c.toString(16);
        } else {
            hex = '0';
        }
        //let hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    rgbToHex = (r, g, b) => {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }

    render(){
        const cellStyles =  {
            head: {
                backgroundColor : 'black',
                color: 'white'
            },
            body: {
                backgroundColor : this.rgbToHex(255, this.props.color, this.props.color),
                fontSize: 14
            },
            entidad: {
                fontSize: 14
            }
        };
        return (
            <TableCell style={this.props.case === 'head' ? cellStyles.head : this.props.case === 'entidad' ? cellStyles.entidad : cellStyles.body}>{this.props.children}</TableCell>
        );
    }
}

export default StyledTableCell;