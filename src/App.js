import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import store, { rrfProps } from './store/configureStore'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import {Provider} from 'react-redux'
import Client from './Components/Client/Client'
import GameOVer from './Components/GameOver/GameOVer'

const App = () => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps} >
        <Router>
          <Container>
            <Switch>
              <Route path='/' exact component={Client} />
              <Route path='/gameover' exact component={GameOVer} />
            </Switch>
          </Container>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  )
}

export default App


