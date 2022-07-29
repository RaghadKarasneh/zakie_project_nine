import logo from './logo.svg';
import './App.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import Post from './Component/Posts/Post';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/post' element={<Post />}>Post Page</Route>
      <Route path='/' element={<Home />}>Landing page</Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
