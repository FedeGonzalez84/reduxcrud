import React, { Fragment } from 'react';

// Components
import Header from './components/Header';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';

// Router
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Redux
import { Provider} from 'react-redux';
import store from './store';


function App() {
  return (
   <Provider store={store}>
      <Router>
          <Fragment>  
            <Header />

            <div className="container">
              <Switch>
                <Route exact path='/' component={Productos}/>
                <Route exact path='/productos/nuevo' component={NuevoProducto}/>
                <Route exact path='/productos/editar/:id' component={EditarProducto}/>
              </Switch>
            </div>

          </Fragment>
      </Router>
   </Provider>
  );
}

export default App;
