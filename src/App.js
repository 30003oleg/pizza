import { Route } from 'react-router-dom';
import './App.css';
import { Header, PizzaBlock } from './components';
import { Home, Cart } from './pages';
import React from 'react';
import PropTypes from 'prop-types';

// import store from './redux/store';

function App() {



  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path='/' component={Home} /* render={() => <Home items={items}  />}*/ />
        <Route exact path='/cart' component={Cart} />
      </div>
    </div>
  )
}




PizzaBlock.propTypes = {
  name: PropTypes.string.isRequired,
}

export default App;

/*function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
      Axios.get('http://localhost:3000/db.json').then(({ data }) => {
        setItems(data.pizzas);
      })
     fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then(json => {
      setItems(json.pizzas);
      });
  }, []);*/


/* class App extends React.Component {
      componentDidMount() {
      Axios.get('http://localhost:3000/db.json').then(({ data }) => {
        this.props.setPizzas(data.pizzas);
      });
    }

  render() {
    return (
      <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path='/' render={() => <Home items={this.props.items} />} />
        <Route exact path='/cart' component={Cart} />

      </div>
    </div>
    );
  }
}
 */

/*const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters,
  }
}
const mapDispatchToProps = (dispatch) => {
   return {
      setPizzas: (items) => dispatch(setPizzas(items)),
    dispatch,
  };
}
const mapDispatchToProps = {
  setPizzas,
}*/


// export default connect(mapStateToProps, mapDispatchToProps)(App);



/* export default connect(
  (state) => {
    return {
      items: state.pizzas.items,
      filters: state.filters,
    };
  },
  (dispatch) => {
    return {
      setPizzas: (items) => dispatch(setPizzas(items)),
    }
  },
)(App); */