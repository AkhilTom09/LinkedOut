import { getUserAuth } from './actions';
import './App.css';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom"
import Login from  "./Components/Login"
import Header from './Components/Header';
import Home from './Components/Home';
import { useEffect } from 'react';
import { connect } from 'react-redux';
 
function App(props) {
  // useEffect(()=>{
  //   props.getUserAuth();
  // },[]);
  return (
    <>
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/'>
            <Login/>
          </Route>
          <Route exact path = '/home'>
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </Router>

    </div>
    </>
  );
}

// const mapStateToProps = (state) => {
//   return {};
// };
// const mapDispatchToProps = (dispatch) =>({
//   getUserAuth: () =>  dispatch(getUserAuth()),
// });
export default (App);
