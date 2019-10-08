import React from "react"

// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false,
            message: "",
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({message: 'This is the story of Odinson'})
    }
    onMouseOver() {
        this.setState({message: 'Is the God of Thunder!'})

      }    render() {
        
        let wordDisplay = (this.state.isLoggedIn === true) ? "in" : "out"
        let text = this.state.message
        
        return (
            <div>
                <h1>You are currently logged {wordDisplay}</h1>
            
            <img alt="" onMouseOver={() => {console.log(wordDisplay)}} src="https://static.tvtropes.org/pmwiki/pub/images/mcu_thor.png" onClick={this.handleClick}/>
            <br />
            <br />
            <button onClick={this.handleClick}>Thor</button>
            <img alt="" src="thor.png" onClick={this.handClick}/>
            <p>{text}</p>
            </div>
        )
    }
}

export default App
