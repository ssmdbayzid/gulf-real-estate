
import './App.css';
import Header from './component/Share/Header';
import { Routes, Route } from 'react-router-dom';
import { Home, About, Blog, BlogDetails, CarDetails, CarListing, LogIn, SignUp, NotFound } from './Pages';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/id' element={<BlogDetails />} />
        <Route path='/car/:id' element={<CarDetails />} />
        <Route path='/carList' element={<CarListing />} />
        <Route path='/log-in' element={<LogIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
