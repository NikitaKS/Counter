import React from 'react';
import '../App.css';
import {connect} from "react-redux";

class Display extends React.Component {

    render = () => {
        let maxValueError = (this.props.state.value === this.props.state.maxValue) ? 'maxValue' : '';
        let displayTitle = this.props.state.inputError
            ? 'Invalid value'
            : !this.props.state.isDisable ?
                <div className='pressSet'>Please choose value and press "set"</div> :
                <div className={maxValueError}>{this.props.state.value}</div>;
        return (
            <div className="displayWrapper">
                {displayTitle}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
};
export default connect(mapStateToProps, null)(Display);

