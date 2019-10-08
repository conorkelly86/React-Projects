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
            cap: "",
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleCap = this.handleCap.bind(this)
    }
/*     handleClick() {
        this.setState(prevState => {
            return {
            message: !prevState.message
          }));
           // message: 'This is the story of Odinson',
    }
} */
    handleClick() {
    this.setState({message: !this.state.message})
}
    handleCap(){ 
        this.setState({
            cap: 'Soldier out of time',
        })
    }    

    onMouseOver() {
        this.setState({message: 'Is the God of Thunder!'})

      }    render() {
        
        let wordDisplay = (this.state.isLoggedIn === true) ? "in" : "out"
        let text = this.state.message
        let captext = this.state.cap
        
        return (
            <div>
                <h1>You are currently logged {wordDisplay}</h1>
            
            <img alt="" onMouseOver={() => {console.log(wordDisplay)}} src="https://static.tvtropes.org/pmwiki/pub/images/mcu_thor.png" onClick={this.handleClick}/>
            <p>{text}</p>
            <br />
            <img alt="" onMouseOver={() => {console.log(wordDisplay)}} src="https://images-na.ssl-images-amazon.com/images/I/517nJTS1NiL._SY300_QL70_.jpg" onClick={this.handleCap}/>

            <br />
            <p>{captext}</p>
            </div>
        )
    }
}

export default App