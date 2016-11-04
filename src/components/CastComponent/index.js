import React, {PureComponent} from 'react';

class CastComponent extends PureComponent {
    render() {
        const {names} = this.props
        const namesView = names.map( (e,i) => <li key={i}>{e}</li>)
        const style = { border:'0px solid gray',padding:10 }
        return (
            <ul style={style}>
                {namesView}
            </ul>
        );
    }
}

export default CastComponent;