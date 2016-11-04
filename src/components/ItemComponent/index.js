import React, {PureComponent} from 'react';
import CastComponent from '../CastComponent';
import './style.scss'

class ItemComponent extends PureComponent {
    render() {
        const {title,desc,names} = this.props
        return (
            <li className="item">
                <h2>{title}</h2>
                <p>
                    {desc}
                </p>
                <div className="cast">
                    <CastComponent names={names} />
                </div>
            </li>
        );
    }
}

export default ItemComponent;