import './App.css';
import Navbar from './Components/Navbar';
import NavImage from './Components/NavImage';
import Register from './Components/Pages/Register';
import Footer from './Components/Footer';
// import Space from './Components/Space';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Pages/Dashboard';
import { Fragment } from 'react';
import AboutUs from './Components/Pages/AboutUs';
import ContactUS from './Components/Pages/ContactUS';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <Fragment>
                <NavImage />
              </Fragment>
            )}
          />
          <Route exact path='/about' render={() => <AboutUs />} />
          <Route exact path='/dash' render={() => <Dashboard />} />
          <Route exact path='/contact-us' render={() => <ContactUS />} />
          <Route exact path='/register' render={() => <Register />} />
        </Switch>
        {/* <Space /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
