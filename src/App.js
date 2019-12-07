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
                isDisable: false,
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
            value: ++inc
        });
    };
    resetValue = () => {
        this.setState({
            value: this.state.startValue
        });
    };
    changeMaxValue = (value) => {
        this.inputError(value);
        this.setState({
            maxValue: value,
            value: this.state.startValue,
            isDisable: true
        });
    };
    changeMinValue = (value) => {
        this.inputError(value);
        this.setState({
            startValue: value,
            value: value,
            isDisable: true
        });
    };
    setSettings = () => {
        this.setState({
            isDisable: false
        });
    };
    inputError = (value) => {
        let a = value;
        debugger
        if (a === this.state.maxValue || a < 0 || a === this.state.startValue || isNaN(a) || this.state.startValue < 0) {
            this.setState({
                inputError: true
            })
        } else {
            this.setState({
                inputError: false
            })
        }
    };

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
                             isDisable={this.state.isDisable}
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
                                disabled={this.state.inputError}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

