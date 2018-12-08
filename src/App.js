import React, { Component } from 'react'

import Auth from './Auth/Auth'
import ToDo from './ToDo/ToDo'

class App extends Component {
  render() {
    return (
      <div>
        <Auth >
          <ToDo />
        </Auth>
      </div>
    )
  }
}

export default App
