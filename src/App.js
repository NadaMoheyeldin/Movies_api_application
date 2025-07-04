import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import MyForm from './components/form/form';
import NotFound from './components/NotFound/NotFound';
import MyNavbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListMovies from './components/Movies/ListMovies/listMovies';
import MovieDetails from '/home/nada/react/Routing/routing/src/components/Movies/movieDetails/movieDetails.js';
import Favourites from '/home/nada/react/Routing/routing/src/components/Movies/favourites/favourites.js';

function App() {
  return (
    <div className="App">
      

        {/* Define the routes for the application */}

        <BrowserRouter>
          <MyNavbar></MyNavbar>
          <Switch>
            <Route path={"/"} component={Home} exact></Route>
            <Route path={"/login"} component={MyForm} exact></Route>
            <Route path={"/list"} component={ListMovies} exact></Route>
            <Route path={"/movie/:id"} component={MovieDetails } />
            <Route path={"/favourites"} component={Favourites} exact />
            <Route path={"*"} component={NotFound} exact></Route>
        
          </Switch>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
