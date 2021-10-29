
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Services from './components/Services/Services';
import AuthProvider from './ContexApi/AuthProvider';
import Order from './components/Order/Order'
import MyOrder from './components/MyOrder/MyOrder';

import AddNewService from './components/Admin/AddNewService/AddNewService';
import ManageOrder from './components/Admin/ManageOrder/ManageOrder';

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
        <Route path="/services">
        <Services></Services>
        </Route>
        <PrivateRoute path="/addService">
          <AddNewService></AddNewService>
        </PrivateRoute>
        <PrivateRoute path="/order/:serviceId">
          <Order></Order>
        </PrivateRoute>
        <PrivateRoute path="/manageOrder">
          <ManageOrder></ManageOrder>
        </PrivateRoute>
        <PrivateRoute path="/myorder">
          <MyOrder></MyOrder>
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
