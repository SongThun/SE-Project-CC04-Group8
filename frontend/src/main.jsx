import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { GlobalProvider } from './contexts/GlobalContext.js';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx'

import router from './routers/router.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <GlobalProvider> */}
    <AuthProvider>

      <RouterProvider router={router} />
    {/* </GlobalProvider> */}
    </AuthProvider>
  </StrictMode>,
)