import React from 'react';
import '../App.css';
import Button from "./Button";

class Buttons extends React.Component {

    render = () => {
        return (
            <div className="buttonWrapper">
                <Button callback={this.props.incValue}
                        title='INC'
                        disabled={this.props.value === this.props.maxValue || this.props.isDisable || this.props.inputError}/>
                <Button callback={this.props.resetValue}
                        title='RESET'
                        disabled={this.props.value === this.props.startValue || this.props.isDisable || this.props.inputError}/>
            </div>
        );
    }
}

export default Buttons;

