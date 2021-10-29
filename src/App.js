
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import './App.css';
import AddNewUser from './components/Admin/AddNewUser/AddNewUser';
import ManageUser from './components/Admin/ManageUsers/ManageUser';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Service from './components/Service/Service';
import AuthProvider from './ContexApi/AuthProvider';

function App() {
  return (
    <AuthProvider>
       <BrowserRouter>
       <Header></Header>
       <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/home">
        <Home></Home>
        </Route>
        <PrivateRoute path="/service">
        <Service></Service>
        </PrivateRoute>
        <PrivateRoute path="/adduser">
          <AddNewUser></AddNewUser>
        </PrivateRoute>
        <PrivateRoute path="/manageuser">
          <ManageUser></ManageUser>
        </PrivateRoute>
        <Route path="/login">
        <Login></Login>
        </Route>
       </Switch>
     </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
