import React from 'react';
import '../App.css';
import Button from "./Button";

class Buttons extends React.Component {
    render = () => {
        return (
            <div className="buttonWrapper">
                <Button title='INC'/>
                <Button title='RESET'/>
            </div>
        );
    }
}

export default Buttons;

