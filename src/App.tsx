import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import store from './redux/store';
import { Provider } from 'react-redux';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
