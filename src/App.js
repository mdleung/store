import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import { Shop } from './components'






  

class App extends Component {

  constructor(props) {

    super(props)

    this.state = {

      input: '',
      storedName: '',
      hats: [{
        name: 'Top Hat',
        price: 15,
        type: 'hat'
      },
      {
        name: 'Medium Hat',
        price: 15,
        type: 'hat'
      },

      {
        name: 'Glory Hat',
        price: 15,
        type: 'hat'
      }
      ],
      shoes: [{
        name: 'High Top Sneaker',
        price: 15,
        type: 'shoe'
      },
      {
        name: 'Low Top Sneaker',
        price: 15,
        type: 'shoe'
      },

      {
        name: 'Nike Sneaker',
        price: 15,
        type: 'shoe'
      }
      ]


    }
  }

  submitName = (e) => {

    e.preventDefault();



    const nameJSON = localStorage.setItem('NAME', this.state.input)


    this.setState({
      storedName: nameJSON
    })




  }



  getInput = (e) => {

    this.setState({
      input: e.target.value

    })
  }

  componentDidMount = () => {




    this.setState({
      storedName: localStorage.getItem('NAME')
    })


  }

  render() {

    return (
      <Router>
        <div className="App">

          <NavBar />



          <Switch>

            <Route path='/' exact render={(routerProps) => <Home getInput={this.getInput} input={this.state.input} submitName={this.submitName} {...routerProps} />} />

            <Route path='/shop' render={(routerProps) => <Shop hats={this.state.hats} shoes={this.state.shoes} shoppingCard={this.state.shoppingCart} {...routerProps} storedName={this.state.storedName} />} />

          </Switch>



        </div>
      </Router>

    );
  }
}


class NavBar extends Component {
  render() {

    return (
      <div>
        <header className="topBar">
          <nav>
            <Link to='/'>Home</Link>
            |
            <Link to='/shop'>Shop</Link>

          </nav>
        </header>
      </div>
    )
  }

}

class Home extends Component {

  constructor() {

    super()

    this.state = {

    }

  }

  render() {
    return (

      <div>
        <h1>home</h1>

        <h2>Please enter your name</h2>

        <form>
          <input onChange={this.props.getInput} type="text"></input>
          <button onClick={this.props.submitName}>Enter</button>
        </form>

      </div>
    )
  }

}


export default App;
