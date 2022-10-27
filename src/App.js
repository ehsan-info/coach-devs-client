import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes'
import './App.css';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';

function App() {
  const [on, setOn] = useState(false);
  const handleTheme = event => {
    setOn(event.target.checked);
  }
  return (
    <div className="allContainer">
      <div className="containerToggle">
        {/* {label}{" "} */}
        <div className="toggle-switch">
          <input onClick={handleTheme} type="checkbox" className="checkbox"
            name='label' id='label' />
          <label className="label" htmlFor='label'>
            <span className="inner" />
            <span className="switch" />
          </label>
        </div>
      </div>
      <div className={`${!on ? 'bg-light' : 'bg-white'}`}>
        <RouterProvider router={routes}></RouterProvider>
        <Toaster></Toaster>
      </div>
    </div>
  );
}

export default App;
