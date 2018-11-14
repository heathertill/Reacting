import React, { Component} from 'react';
import '../bootstrap.css'

// #1-3
// const App = (props) => {
//     return(
//     <h1> {props.message}! </h1>
//     )
// };

// #4
// class App extends Component{
//     constructor(props) {
//         super(props);
//         this.message = 'Hello World'
//     }

//     render() {
//         return (
//             <h1> {this.message}! </h1>
//         )
//     }
// }



class App extends Component{
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.state = {
            text: '',
            placeholder: 'Your message here!',
            hasLoaded: false
        }
        this.message = 'some message '
    }

        handleInputChange = (event) => {
        this.setState({ text: event.target.value })
        }

        handleButtonClick = () => {
        this.setState({ hasLoaded: !this.state.hasLoaded })
        }
        
        componentDidMount = () => {
            console.log('mounted')
        this.setState({ hasLoaded: true })
        }

    render() {
        
            if (this.state.hasLoaded) {
                return (
                <React.Fragment>
                <h1> Your message will display here:  { this.state.text } </h1>
                <div>
                    <input
                    placeholder={ this.state.placeholder }
                    value={ this.state.text }
                    onChange={ (event) => this.handleInputChange(event) }
                    />
                    <button 
                    type='submit'
                    onClick={ (event) => this.handleButtonClick(event)}>Click to Load</button>
                </div>
              
            </React.Fragment>
            )
            } else {
                return (
                <React.Fragment>
                <h1>Loading...</h1>
                <button 
                type='submit'
                onClick={ (event) => this.handleButtonClick(event.target.inputMessage)}>Click to Load</button>
                </React.Fragment>
                )}
    }
}

export default App;