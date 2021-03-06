
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
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';

function App() {
  return (

      <AuthProvider>
       <BrowserRouter>
       <div id="content">
       <Header></Header>
        <div id="main-content">
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
        <Route path="/about">
        <Testimonial></Testimonial>
        </Route>
        <Route path="/contact">
        <Contact></Contact>
        </Route>
        <Route to="*">
          <NotFound></NotFound>
        </Route>
       </Switch>
        </div>
        <Footer></Footer>
       </div>
     </BrowserRouter>
    </AuthProvider>
   
  );
}

export default App;
