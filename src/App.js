import React, {Component} from 'react';
import './App.css';
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
    state = {textLength: 0, text: ""};
    changeHandler = (event) => {
        this.setState({
            textLength: event.target.value.length,
            text: event.target.value
        })
    };
    removeLetter = (index) => {
        let newText = this.state.text.slice(0, index)
            + this.state.text.slice(index + 1);
        this.setState({text: newText});
    };

    render() {
        const letters = this.state.text.split("");

        return (
            <div className="App">
                <ol>
                    <li>Create an input field (in App component) with a change
                        listener which outputs the length of the entered text
                        below it (e.g. in a paragraph).
                    </li>
                    <input type="text" onChange={this.changeHandler}/>
                    <ValidationComponent text={this.state.text}/>
                    <p>{this.state.textLength}</p>
                    <li>Create a new component (=> ValidationComponent) which
                        receives the text length as a prop
                    </li>
                    <li>Inside the ValidationComponent, either output "Text too
                        short" or "Text long enough" depending on the text
                        length (e.g. take 5 as a minimum length)
                    </li>
                    <li>Create another component (=> CharComponent) and style it
                        as an inline box (=> display: inline-block, padding:
                        16px, text-align: center, margin: 16px, border: 1px
                        solid black).
                    </li>
                    <li>Render a list of CharComponents where each CharComponent
                        receives a different letter of the entered text (in the
                        initial input field) as a prop.
                    </li>
                    <li>When you click a CharComponent, it should be removed
                        from the entered text.
                    </li>
                </ol>
                <p>Hint: Keep in mind that JavaScript strings are basically
                    arrays!</p>
                {letters.map((letter, index) => <CharComponent
                    key={index + letter}
                    character={letter}
                    onClick={() => this.removeLetter(index)}/>)}
            </div>
        );
    }

}

export default App;
