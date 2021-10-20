import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Details from './Pages/Home/Details/Details';
import AuthProvider from './Pages/AuthProvider/AuthProvider';
import Login from './Pages/Login/Login';
import Header from './Pages/Home/Header/Header';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Aboutus from './Pages/Home/Aboutus/Aboutus';
import Footer from './Pages/Home/Footer/Footer';
import HServiceDetail from './Pages/HServiceDetail/HServiceDetail';
import ArticleDetail from './Pages/ArticleDetail/ArticleDetail';
import Blogs from './Pages/Home/Blogs/Blogs';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/blogs">
              <Blogs></Blogs>
            </Route>

            <PrivateRoute path="/details/:ID">
              <Details></Details>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/aboutus">
              <Aboutus></Aboutus>
            </Route>
            <PrivateRoute path="/doorstepservices/:ID">
              <HServiceDetail></HServiceDetail>
            </PrivateRoute>
            <PrivateRoute path="/articledetails/:ID">
              <ArticleDetail></ArticleDetail>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
