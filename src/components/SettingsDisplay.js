import React from 'react';
import '../App.css';

class SettingsDisplay extends React.Component {
    changeMaxValue = (e) => {
        let value = parseInt(e.currentTarget.value);
        if (!(value < this.props.startValue)){
            this.props.changeMaxValue(value);
        }
    };
    changeMinValue = (e) => {
        let value = parseInt(e.currentTarget.value);
        if (!(value > this.props.maxValue || value < -1)){
            this.props.changeMinValue(value);
        }
    };
    render = () => {
        let errorMinValue = this.props.inputError ? 'errorMinValue' : '';
        let errorMaxValue = this.props.inputError ? 'errorMaxValue' : '';
        return (
            <div className="settingsIn">
                {
                    (Object.keys(this.props).length === 0 && this.props.constructor === Object) ?
                        <div>1</div> :
                        <div className='settings'>
                            <div className='maxValueBlock'>
                                <span>Max Value</span>
                                <input onChange={this.changeMaxValue}
                                       className={errorMaxValue}
                                       value={this.props.maxValue}
                                       type="number"/>
                            </div>
                            <div className='minValueBlock'>
                                <span>Min Value</span>
                                <input value={this.props.startValue}
                                       className={errorMinValue}
                                       onChange={this.changeMinValue}
                                       type="number"/>
                            </div>
                        </div>
                }
            </div>
        );
    }
}

export default SettingsDisplay;

