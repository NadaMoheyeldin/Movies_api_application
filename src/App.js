import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import MyForm from './components/form/form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route path={"/"} component={Home} exact></Route>
            <Route path={"/login"} component={MyForm} exact></Route>
        
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
