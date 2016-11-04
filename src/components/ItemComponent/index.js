import React, {PureComponent} from 'react';
import CastComponent from '../CastComponent';
import './style.scss'

class ItemComponent extends PureComponent {
    render() {
        const {title,desc,names,picture} = this.props
        return (
            <li className="item">
                <h2>{title}</h2>
                <p>
                    {desc}
                </p>
                <img src={picture} role="presentation" />
                <div className="cast">
                    <CastComponent names={names} />
                </div>
            </li>
        );
    }
}

export default ItemComponent;