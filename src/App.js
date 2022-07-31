import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './Components/Posts/Post';
import Contact from './Components/Contact';
import About from './Components/About';
import { UilUser } from '@iconscout/react-unicons';
import Footer from './Components/Footer';
<<<<<<< HEAD
import Header from './Component/Header';
import Posts from './Component/Posts/Posts';

=======
import Header from './Components/Header';
import Calculator from './Components/Calculator';
import Pricing from './Components/Pricing';
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 90c6e120d0601702a61017270e777f61007d3ec3
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
          {/* <Route path='/Register' element={<Register />} /> */}
          {/* <Route path='/Login' element={<Login />} /> */}
          {/* <Route path='/:userid' element={<Home />} /> */}
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Pricing' element={<Pricing />} />
          <Route path='/Calculator' element={<Calculator />} />
          {/* <Route path='/MyAccount' element={<UserPro />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer/>
      </>
  );
}

export default App;
