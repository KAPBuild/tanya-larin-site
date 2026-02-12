import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout.tsx'
import Home from './pages/Home.tsx'
import Portfolio from './pages/Portfolio.tsx'
import About from './pages/About.tsx'
import Commissions from './pages/Commissions.tsx'
import Teaching from './pages/Teaching.tsx'
import Contact from './pages/Contact.tsx'
import CheckoutSuccess from './pages/CheckoutSuccess.tsx'
import CheckoutCancel from './pages/CheckoutCancel.tsx'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/portfolio', element: <Portfolio /> },
      { path: '/about', element: <About /> },
      { path: '/commissions', element: <Commissions /> },
      { path: '/teaching', element: <Teaching /> },
      { path: '/contact', element: <Contact /> },
      { path: '/checkout/success', element: <CheckoutSuccess /> },
      { path: '/checkout/cancel', element: <CheckoutCancel /> },
    ],
  },
])
