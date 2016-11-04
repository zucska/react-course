import React, {PureComponent} from 'react';
import Cast from '../cast';
import './style.css'

class ItemCmp extends PureComponent {
    render() {
        const {title,desc,names,onClick} = this.props
        return (
            <li className="item" onClick={onClick}>
                <h2>{title}</h2>
                <p>
                    {desc}
                </p>
                <div className="cast">
                    <Cast names={names} />
                </div>
            </li>
        );
    }
}

export default ItemCmp;