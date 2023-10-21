import './App.css';
import { Outlet } from 'react-router-dom';

import NavbarApp from './components/Navbar'

function App() {
  return (
    <>
      <NavbarApp/>
      <Outlet />
    </>
  );
}

export default App
