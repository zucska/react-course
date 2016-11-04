import React, {PureComponent} from 'react';
import './style.scss'

class UrlComponent extends PureComponent {
    render() {
        const {value,onChange} = this.props
        return (
            <div className="url">
                <input type="text" value={value} onChange={onChange} />
            </div>
        );
    }
}

export default UrlComponent;