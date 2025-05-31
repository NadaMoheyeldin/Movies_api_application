import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import MyForm from './components/form/form';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route path={"/"} component={Home} exact></Route>
            <Route path={"/login"} component={MyForm} exact></Route>
            <Route path={"*"} component={NotFound} exact></Route>
        
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
