import React from 'react';
import {connect} from "react-redux";
import {resetValue, incValueAC, setSettings} from "../redux/reducer";

class Button extends React.Component {
    render = () => {
        {
            switch (this.props.title) {
                case 'SET': {
                    return <button
                        className='button'
                        onClick={this.props.setSettings}
                        disabled={this.props.isDisable}>
                        {this.props.title}
                    </button>
                }
                case 'INC': {
                    return <button
                        className='button'
                        onClick={() => this.props.incValueAC(this.props.state.value)}
                        disabled={this.props.state.value === this.props.state.maxValue
                        || !this.props.state.isDisable
                        || this.props.state.inputError}
                    >{this.props.title}</button>
                }
                case 'RESET': {
                    return <button
                        className='button'
                        onClick={this.props.resetValue}
                        disabled={this.props.state.value === this.props.state.startValue
                        || !this.props.state.isDisable
                        || this.props.state.inputError}
                    >{this.props.title}</button>
                }
            }
        }
    }
}

const mapStateToProps = (state) => {
    return {
        state: state,
        isDisable: state.isDisable
    }
};


export default connect(mapStateToProps, {setSettings, incValueAC, resetValue})(Button);
