import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/Home/Home'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs'
import About from './components/About/About'
import LogIn from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import NotFound from './components/NotFound/NotFound'
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import Service from './components/HomePage/Service/Service';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/services/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/services/:name' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/services/:comment' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/services/:price' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route> 
      </Routes>
    
      <Footer></Footer>
    
    </div>
  );
}

export default App;
