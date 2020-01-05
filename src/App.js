import React from 'react';
import './App.css';
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import SettingsDisplay from "./components/SettingsDisplay";
import Button from "./components/Button";

class App extends React.Component {
    componentDidMount() {
        this.app = JSON.parse(localStorage.getItem('state'));
        if (localStorage.getItem('state')) {
            this.setState({
                value: this.app.value,
                startValue: this.app.startValue,
                maxValue: this.app.maxValue,
                isDisable: this.app.isDisable,
                inputError: this.app.inputError,
            })
        } else {
            this.setState({
                value: 0,
                startValue: 0,
                maxValue: 6,
                isDisable: true,
                inputError: false,
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('state', JSON.stringify(nextState));
    }

    state = {};
    incValue = () => {
        let inc = this.state.value;
        this.setState({
            value: ++inc,
        });
    };
    resetValue = () => {
        this.setState({
            value: this.state.startValue
        });
    };
    changeMaxValue = (value) => {
        this.valueError(value, this.state.startValue);
        this.setState({
            maxValue: value,
            value: this.state.startValue,
        });
    };
    changeMinValue = (value) => {
        this.valueError(value, this.state.maxValue);
        this.setState({
            startValue: value,
            value: value,

        });
    };
    setSettings = () => {
        this.setState({
            isDisable: true
        });
    };
    valueError = (value, stateValue) => {
        if (value < 0 || isNaN(value) || value === stateValue ||
            isNaN(stateValue) || stateValue === null || stateValue <= -1) {
            this.setState({
                inputError: true,
                isDisable: true
            })
        } else {
            this.setState({
                inputError: false,
                isDisable: false
            })
        }
    };
    // maxValueError = (value) => {
    //     if (value === 0 || isNaN(value) || value <= this.state.startValue ||
    //         isNaN(this.state.startValue) || this.state.startValue === null || this.state.startValue <= -1) {
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
    //     if (value < 0 || isNaN(value) || value === this.state.maxValue ||
    //         isNaN(this.state.maxValue) || this.state.maxValue === null) {
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
                    <Display maxValue={this.state.maxValue}
                             isDisable={this.state.isDisable}
                             currentValue={this.state.value}
                             inputError={this.state.inputError}
                    />
                    <Buttons startValue={this.state.startValue}
                             inputError={this.state.inputError}
                             isDisable={!this.state.isDisable}
                             value={this.state.value}
                             resetValue={this.resetValue}
                             incValue={this.incValue}
                             maxValue={this.state.maxValue}/>
                </div>
                <div className='settingsWrapper'>
                    <SettingsDisplay maxValue={this.state.maxValue}
                                     inputError={this.state.inputError}
                                     changeMaxValue={this.changeMaxValue}
                                     changeMinValue={this.changeMinValue}
                                     startValue={this.state.startValue}/>
                    <div className='buttonWrapper'>
                        <Button title='SET'
                                callback={this.setSettings}
                                disabled={this.state.isDisable}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

