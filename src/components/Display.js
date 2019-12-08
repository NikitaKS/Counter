import React from 'react';
import '../App.css';

class Display extends React.Component {

    render = () => {
        let maxValueError = (this.props.currentValue === this.props.maxValue) ? 'maxValue' : '';
        let displayTitle = this.props.inputError
            ? 'Invalid value'
            : !this.props.isDisable ?
                <div className='pressSet'>Please choose value and press "set"</div> :
                <div className={maxValueError}>{this.props.currentValue}</div>;
        return (
            <div className="displayWrapper">
                {displayTitle}
            </div>
        );
    }
}

export default Display;

