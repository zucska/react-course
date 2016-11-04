import React, {Component} from 'react';
import ItemComponent from '../ItemComponent'
import './style.scss'

class ListComponent extends Component {
    render() {

        const lists = this.props.data.map( (item,i)=>{
            return (
                <ItemComponent 
                    key={i} 
                    title={item.greeting} 
                    desc={item.about} 
                    names={item.tags} 
                    picture={item.picture}
                    />
            )
        })

        return (
            <div className="lista">
                <ul>
                    {lists}
                </ul>
            </div>
        );
    }
}

export default ListComponent;