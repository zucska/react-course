import React, {Component} from 'react';
import ItemComponent from '../ItemComponent'

class ListComponent extends Component {
    render() {

        const lists = this.props.data.map( (item,i)=>{
            return (
                <ItemComponent 
                    key={i} 
                    title={item.greeting} 
                    desc={item.about} 
                    names={item.tags} />
            )
        })

        return (
            <ul>
                {lists}
            </ul>
        );
    }
}

export default ListComponent;