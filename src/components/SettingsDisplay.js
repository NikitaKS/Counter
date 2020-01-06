import React from 'react';
import '../App.css';
import {connect} from "react-redux";
import {changeMaxValue, changeMinValue, valueErrorAC} from "../redux/reducer";

class SettingsDisplay extends React.Component {
    onChangeMaxValue = (e) => {
        let value = parseInt(e.currentTarget.value);
        if (!(value < this.props.state.startValue)) {
            this.props.changeMaxValue(value);
            this.props.valueErrorAC(value, this.props.state.startValue);
        }
    };
    onChangeMinValue = (e) => {
        let value = parseInt(e.currentTarget.value);
        if (!(value > this.props.state.maxValue || value < -1)) {
            this.props.changeMinValue(value);
            this.props.valueErrorAC(value, this.props.state.maxValue);
        }
    };
    render = () => {
        let errorMinValue = this.props.state.inputError ? 'errorMinValue' : '';
        let errorMaxValue = this.props.state.inputError ? 'errorMaxValue' : '';
        return (
            <div className="settingsIn">
                {
                    (Object.keys(this.props).length === 0 && this.props.constructor === Object) ?
                        <div>1</div> :
                        <div className='settings'>
                            <div className='maxValueBlock'>
                                <span>Max Value</span>
                                <input onChange={this.onChangeMaxValue}
                                       className={errorMaxValue}
                                       value={this.props.state.maxValue}
                                       type="number"/>
                            </div>
                            <div className='minValueBlock'>
                                <span>Min Value</span>
                                <input value={this.props.state.startValue}
                                       className={errorMinValue}
                                       onChange={this.onChangeMinValue}
                                       type="number"/>
                            </div>
                        </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
};

export default connect(mapStateToProps, {changeMaxValue, changeMinValue, valueErrorAC,})(SettingsDisplay);

