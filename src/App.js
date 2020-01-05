import React from 'react';
import './App.css';
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import SettingsDisplay from "./components/SettingsDisplay";
import Button from "./components/Button";
import {connect} from "react-redux";
import {incValueAC, resetValue, changeMaxValue, changeMinValue, setSettings, valueErrorAC} from "./redux/reducer";

class App extends React.Component {

    incValue = () => {
        let inc = this.props.state.value;
        this.props.incValue(inc);
    };
    resetValue = () => {
        this.props.resetValue();
    };
    onChangeMaxValue = (value) => {
        this.props.valueErrorAC(value, this.props.state.startValue);
        this.props.changeMaxValue(value);
    };
    onChangeMinValue = (value) => {
        this.props.valueErrorAC(value, this.props.state.maxValue);
        this.props.changeMinValue(value);
    };
    onSetSettings = () => {
        this.props.setSettings();
    };
    // valueError = (value, stateValue) => {
    //     if (value < 0 || isNaN(value) || value === stateValue ||
    //         isNaN(stateValue) || stateValue === null || stateValue <= -1) {
    //         this.setState({
    //             inputError: true,
    //             isDisable: true
    //         })
    //     } else {
    //         this.setState({
    //             inputError: false,
    //             isDisable: false
    //         })
    //     }
    // };
    // maxValueError = (value) => {
    //     if (value === 0 || isNaN(value) || value <= this.props.startValue ||
    //         isNaN(this.props.startValue) || this.props.startValue === null || this.props.startValue <= -1) {
    //         this.setState({
    //             inputError: true,
    //             isDisable: true
    //         })
    //     } else {
    //         this.setState({
    //             inputError: false,
    //             isDisable: false
    //         })
    //     }
    // };
    // minValueError = (value) => {
    //     if (value < 0 || isNaN(value) || value === this.props.maxValue ||
    //         isNaN(this.props.maxValue) || this.props.maxValue === null) {
    //         this.setState({
    //             inputError: true,
    //             isDisable: true
    //         })
    //     } else {
    //         this.setState({
    //             inputError: false,
    //             isDisable: false
    //         })
    //     }
    // };

    render = () => {
        return (
            <div className="App">
                <div className="countWrapper">
                    <Display maxValue={this.props.state.maxValue}
                             isDisable={this.props.state.isDisable}
                             currentValue={this.props.state.value}
                             inputError={this.props.state.inputError}
                    />
                    <Buttons startValue={this.props.state.startValue}
                             inputError={this.props.state.inputError}
                             isDisable={!this.props.state.isDisable}
                             value={this.props.state.value}
                             resetValue={this.resetValue}
                             incValue={this.incValue}
                             maxValue={this.props.state.maxValue}/>
                </div>
                <div className='settingsWrapper'>
                    <SettingsDisplay maxValue={this.props.state.maxValue}
                                     inputError={this.props.state.inputError}
                                     changeMaxValue={this.onChangeMaxValue}
                                     changeMinValue={this.onChangeMinValue}
                                     startValue={this.props.state.startValue}/>
                    <div className='buttonWrapper'>
                        <Button title='SET'
                                callback={this.onSetSettings}
                                disabled={this.props.state.isDisable}/>
                    </div>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        state: state
    }
};
export default connect(mapStateToProps, {
    incValue: incValueAC,
    resetValue,
    changeMaxValue,
    changeMinValue,
    setSettings,
    valueErrorAC,


})(App);

