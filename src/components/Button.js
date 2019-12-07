import React from 'react';

class Button extends React.Component {
    render = () => {
        let disableBtn = this.props.disabled;
        return (
            <div>
                <button
                    className='button'
                    onClick={this.props.callback}
                    disabled={disableBtn}
                >{this.props.title}</button>
            </div>
        );
    }
}

export default Button;
