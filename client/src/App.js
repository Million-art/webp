import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Search from '@mui/icons-material/Search';
import Forget from './pages/Forget';
import Chat from './pages/Chat';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // handle login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className='container'>
      <Router>
        <div className='nav'>
          <div className='logo'>
            <h1>Betselot Pharmacy</h1>
          </div>
          <div className='menu'>
            <ul>
              <li>
                <NavLink exact="true" to='/'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" to='/products'>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" to='/about'>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" to='/contact'>
                  Contact
                </NavLink>
              </li>
              {isAuthenticated ? (
                <>
                  <li>
                    <NavLink exact="true" to='/chat'>
                      Chat
                    </NavLink>
                  </li>
                  <li>
                    <button onClick={handleLogout}style={{width:75,height:30,fontSize:18,backgroundColor:'red',color:'white'}}>Logout</button>
                  </li>
                </>
              ) : (
                <li>
                  <NavLink exact="true" to='/login'>
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>

          <div className='search_login'>
            <div className='searchBox'>
              <input type='text' placeholder='search....' />
              <Search className='search-btn' />
            </div>
          </div>
        </div>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/login' element={<Login onLogin={handleLogin} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forget' element={<Forget />} />
          <Route path='/chat' element={isAuthenticated ? <Chat /> : <Navigate to='/login' />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
