import { Route } from 'react-router-dom';
import './App.css';
import { Header, PizzaBlock } from './components';
import { Home, Cart } from './pages';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';





function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setItems(data.pizzas);
    })
    /* fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then(json => {
        setItems(json.pizzas);
      }); */


  }, []);



  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path='/' render={() => <Home items={items} />} />
        <Route exact path='/cart' component={Cart} />

      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  name: PropTypes.string.isRequired,
}

export default App;
