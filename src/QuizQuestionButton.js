import React, { Component } from 'react';

class QuizQuestionButton extends Component {


    constructor(props) {
        super(props);
        this.buttonText = props.button_text;
    }

    render() {
        return (
            <li>
                <button>
                    {this.buttonText}
                </button>
            </li>
        )
    }
}

export default QuizQuestionButton;
