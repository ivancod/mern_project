import React from 'react';
import 'materialize-css';
import { useRoute } from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const routes = useRoute(false)
  return (
    <BrowserRouter>
      <div className="container ">
        { routes }
      </div>
    </BrowserRouter>
  );
}

export default App;
