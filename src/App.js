import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes, Link,HashRouter } from 'react-router-dom';
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
import 'bootstrap/dist/css/bootstrap.min.css';
import Subscribe from './Components/Subscribe';
import Menu from './Components/Menu';


function App() {
  return (      
    <> 
    <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/post' element={<Post />}>Post Page</Route>
          <Route path='/posts' element={<Posts />}>Post Page</Route>
          <Route path='/' element={<Home />}>Landing page</Route>
          <Route path='/Home' element={<Home />} />
          <Route path="/log" element={<Login />}/>
          <Route path="/reg" element={<Signup />}/>
          <Route path='/About' element={<About />} />
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Pricing' element={<Pricing />} />
          <Route path='/Calculator' element={<Calculator />} />
          <Route path='/Subscribe' element={<Subscribe />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
      </>
  );
}

export default App;
