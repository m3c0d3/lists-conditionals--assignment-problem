import React, {Component} from 'react';

class ValidationComponent extends Component {
    render() {
        return this.props.text.length < 5 ? <p>"Text too short"</p> :
            <p>"Text long enough"</p>;
    }
}

export default ValidationComponent;
