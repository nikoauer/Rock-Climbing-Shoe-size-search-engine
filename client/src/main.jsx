import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/SearchShoes';
import SavedShoes from './pages/SavedShoes';
import Error from './pages/Error';
import Faq from './pages/Faq';

import './stylesheet/SearchShoes.css';
import './stylesheet/faq.css'

import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/savedshoes',
        element: <SavedShoes />,
      },
      {
        path: '/faq',
        element: <Faq />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
