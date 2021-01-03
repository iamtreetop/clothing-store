import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from "./components/header/header.component";
import Spinner from './components/spinner/spinner.component';

import { GlobalStyle } from './global.styles';
// import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from './redux/user/user.actions';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

// class App extends React.Component {
const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);

  // render() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
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
        </Suspense>
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