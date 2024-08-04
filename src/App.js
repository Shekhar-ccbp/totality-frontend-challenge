import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PropertyList from './components/PropertyList'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={PropertyList} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
