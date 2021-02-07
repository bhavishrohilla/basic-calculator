import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return (
        <div className="button">
            {this.props.children}
        </div>
        );
    }
};

export default Button;