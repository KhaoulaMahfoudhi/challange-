import React, {useState} from 'react'
import './App.css';
import NavBare from "./components/Navbare";
import {Switch, Route} from 'react-router-dom';
import UserList from './reducers/UserList';
import Home from './components/Home';
import Admin from './components/Admin';
import PrivateRoute from './components/Privateroute';
import UserPost from './reducers/UserPost';
import UserComment from './reducers/UserComment';
function App() {
  const [isAuth, setIsAuth] = useState(false)
  const login = () => setIsAuth(true)
  const logout = () => setIsAuth(false)
  return (
    <div className="App">
      <NavBare isAuth={isAuth} login={login} logout={logout} />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/userList" component={UserList} />
  <Route path="/userpost/:id" component={UserPost} />
  <Route path="/usercomment/:id" component={UserComment} /> 
  <PrivateRoute path="/admin" component={Admin} isAuth={isAuth} message="@copyright, khaoula Mahfoudhi"/>
      </Switch>
    </div>
  );
}

export default App;
