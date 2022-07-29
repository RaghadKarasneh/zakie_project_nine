import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import Post from './Component/Posts/Post';
import Header from './Component/Posts/Header';
import Contact from './Components/Contact';
import About from './Components/About';
import { UilUser } from '@iconscout/react-unicons';
import Footer from './Components/Footer';

function App() {
  return (      
    <>
    <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/post' element={<Post />}>Post Page</Route>
          <Route path='/' element={<Home />}>Landing page</Route>
          <Route path='/Home' element={<Home />} />
          {/* <Route path='/Register' element={<Register />} /> */}
          {/* <Route path='/Login' element={<Login />} /> */}
          {/* <Route path='/:userid' element={<Home />} /> */}
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          {/* <Route path='/MyAccount' element={<UserPro />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer/>
      </>
  );
}

export default App;
