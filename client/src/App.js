import React from 'react';
import 'materialize-css';
import { useRoute } from './routes';
import { BrowserRouter } from 'react-router-dom';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import {NavBar} from './components/navBar'


function App() {
  const { login, logout, token, userId } = useAuth()
  const isAuth = !!token
  const routes = useRoute(isAuth)
  return (
    <AuthContext.Provider value={{ login, logout, token, userId, isAuth }}>
      <BrowserRouter>
          { isAuth && <NavBar />}
          { routes }
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
