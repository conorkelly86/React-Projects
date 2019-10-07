import React from 'react';
import './App.css';
import Heroes from './Heroes';
import heroData from './HeroesData';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      name: ""
    }
  }
  handleChange(event){
  this.setState({
    name: "Spiderman"
  })
  console.log("name")

}

  render(){
    const heroInfo = heroData.map (
      item => <Heroes heroes={item} key={item.id}/>
    )
    return (
      <div>
      {heroInfo}
      </div>
    )
  }
}

export default App