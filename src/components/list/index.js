import React, {Component} from 'react';
import Item from '../item'

class ListCmp extends Component {
    render() {

        const lists = this.props.data.map( (item,i)=>{
            return (
                <Item onClick={this.props.cliccami} key={i} title={item.show_title} desc={item.summary} names={item.show_cast}/>
            )
        })

        return (
            <ul>
                {lists}
            </ul>
        );
    }
}

export default ListCmp;