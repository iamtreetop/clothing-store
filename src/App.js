import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from "./pages/checkout/checkout.component";

import Header from "./components/header/header.component";

// import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from './redux/user/user.actions';

// class App extends React.Component {
const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);

  // render() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route eaxt path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInAndSignUpPage />
            )
          }
        />
      </Switch>
    </div>
  );
  // }
};

const mapSTP = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDTP = (dispatch) => {
  return ({
    checkUserSession: () => dispatch(checkUserSession())
  })
}
// const mapSTP = (state) => {
//     return ({
//       currentUser: selectCurrentUser(state)
//     });
// };

// const mapDTP = (dispatch) => {
//     return ({
//       setCurrentUser: (user) => dispatch(setCurrentUser(user))
//     });
// };

export default connect(
  mapSTP, 
  mapDTP
)(App);