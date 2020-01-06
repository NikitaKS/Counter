import React from 'react';
import './App.css';
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import SettingsDisplay from "./components/SettingsDisplay";
import Button from "./components/Button";

class App extends React.Component {
    render = () => {
        return (
            <div className="App">
                <div className="countWrapper">
                    <Display/>
                    <Buttons/>
                </div>
                <div className='settingsWrapper'>
                    <SettingsDisplay/>
                    <div className='buttonWrapper'>
                        <Button title='SET'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

