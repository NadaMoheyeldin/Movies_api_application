import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import MyForm from './components/form/form';
import NotFound from './components/NotFound/NotFound';
import ToDo from './components/todo/todo';
import MyNavbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListMovies from './components/Movies/ListMovies/listMovies';

function App() {
  return (
    <div className="App">
      

        {/* Define the routes for the application */}

        <BrowserRouter>
          <MyNavbar></MyNavbar>
          <Switch>
            <Route path={"/"} component={Home} exact></Route>
            <Route path={"/login"} component={MyForm} exact></Route>
            <Route path={"/todo"} component={ToDo}></Route>
            <Route path={"/list"} component={ListMovies} exact></Route>
            <Route path={"*"} component={NotFound} exact></Route>
        
          </Switch>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
