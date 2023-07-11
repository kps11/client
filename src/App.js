import { Switch ,Route , useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Login ,Dashboard ,Home ,Default,SignUp } from "./pages"
import { Header ,Footer } from './component'
import { useEffect, useState } from 'react'
import setAuthToken from './utils/setAuthToken'
import { loadUser , logoutUser} from "./action/loginAction"
import store from './store'
import './style/App.css'
import PrivateRoute from './component/route/PrivateRoute'



function App() {
  var history = useHistory() ;
  const dispatch = useDispatch();


  useEffect(() => {
    // check for token in LS when app first runs
    const token = localStorage.getItem('token')
    if (token) {
      // if there is a token set axios headers for all requests
      setAuthToken(token);
    store.dispatch(loadUser());

    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API

    // log user out from all tabs if they log out in one tab
    // window.addEventListener('storage', () => {
    //   if (!localStorage.token) store.dispatch({ type: LOGOUT });
    // });
  }, []);


  const onClickSignIn =() =>{
      history.push('/login')
  }

  const onClickSignUp =() =>{
    history.push('/signup')
  }

  const onClickLogout =() =>{
    history.push('/login')
    dispatch(logoutUser())


  }

  return (
    <>
      <Header onClickSignIn={onClickSignIn} onClickSignUp ={onClickSignUp} onClickLogout={onClickLogout}/>
      <div className='body-container'>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route  path='/login' component={Login}  />
          <Route path= '/signup' component = {SignUp} />
          <PrivateRoute path='/dashboard'>
              <Dashboard/>
            </PrivateRoute> 
          <Route path = '/logout' component ={Default} /> 
        </Switch>
      </div>
      <Footer/>
    </>
  );
}

export default App;
