import React, {PureComponent} from 'react';

class Cast extends PureComponent {
    render() {
        const {names} = this.props
        const namesView = names.split(',').map( (e,i) => <li key={i}>{e}</li>)
        const style = { border:'0px solid gray',padding:10 }
        return (
            <ul style={style}>
                {namesView}
            </ul>
        );
    }
}

export default Cast;