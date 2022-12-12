import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }

  renderauthbutton = () => {}

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="container">
        <Welcome name="Shiva" greeting="Hello" />
        {/* {isLoggedIn ? <button>Logout</button> : <button>Login</button>} */}
        {isLoggedIn && <button>Logout</button>}
        {!isLoggedIn && <button>Login</button>}
      </div>
    )
  }
}

export default App
