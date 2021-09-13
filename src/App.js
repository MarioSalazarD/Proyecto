import './App.css';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Inicio} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
