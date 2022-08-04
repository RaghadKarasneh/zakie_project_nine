import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './Components/Posts/Post';
import Contact from './Components/Contact';
import About from './Components/About';

import Footer from './Components/Footer';
import Posts from './Components/Posts/Posts';
import Header from './Components/Header';
import Calculator from './Components/Calculator';
import Pricing from './Components/Pricing';
import Signup from "./signup";
import Login from "./login";

import Subscribe from './Components/Subscribe';
import Menu from './Components/Menu';
import AdminLogin from './Components/admin/AdminLogin';
import Dashboard from './Components/admin/Dash';
import Auction from './Components/admin/Auction';
function App() {
  return (      
    <> 
    <Header />

   
      <BrowserRouter>
        <Routes>
          <Route path='/post' element={<Post />}>Post Page</Route>
          <Route path='/admin' element={<AdminLogin />}>Post Page</Route>
          <Route path='/dashboard' element={<Dashboard />}>Post Page</Route>
          <Route path='/auction' element={<Auction />}>Post Page</Route>
          <Route path='/posts' element={<Posts />}>Post Page</Route>
          <Route path='/' element={<Home />}>Landing page</Route>
          <Route path='/Home' element={<Home />} />
          <Route path="/log" element={<Login />}/>
          <Route path="/reg" element={<Signup />}/>
          {/* <Route path='/:userid' element={<Home />} /> */}
          <Route path='/About' element={<About />} />
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Pricing' element={<Pricing />} />
          <Route path='/Calculator' element={<Calculator />} />
          <Route path='/Subscribe' element={<Subscribe />} />
          {/* <Route path='/MyAccount' element={<UserPro />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer/>
      </>
  );
}

export default App;
