import React, {Component} from "react";
import './CharComponent.css'

class CharComponent extends Component {
    render() {
        return <div onClick={this.props.onClick}
                    className={'CharComponent'}>{this.props.character}</div>;
    }
}

export default CharComponent;
