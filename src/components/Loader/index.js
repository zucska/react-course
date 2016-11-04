import React, {PureComponent} from 'react';
import './style.scss'

class LoaderComponent extends PureComponent {
    render() {
        return (
            <div className="loader">
                LOADING ....
            </div>
        );
    }
}

export default LoaderComponent;