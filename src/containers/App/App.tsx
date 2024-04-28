/**
 *
 * App
 *
 */

import React from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'

import 'preline/preline'
import { IStaticMethods } from 'preline/preline'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Theme from '../../components/Theme'
import Home from '../Home'
import NotFound from '../NotFound'
import Privacy from '../Privacy'
import Terms from '../Terms'
import Contact from '../Contact'
import About from '../About'
import Pricing from '../Pricing'
// import Navbar from '../../components/Navbar';
import FAQ from '../FAQ'
import CookiePolicy from '../CookiePolicy'
import Login from '../Login'
import Signup from '../SignUp'
// import Blog from '../Blog';
// import RestaurantPage from '../RestaurantPage';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}

const headerUrls = [{ name: 'Pricing', to: '/pricing' }]
const footerUrls = [
  {
    title: 'Product',
    links: [
      { name: 'Pricing', to: '/pricing' },
      { name: 'Changelog', to: '/changelog' },
      { name: 'Docs', to: '/docs' },
      { name: 'Download', to: '/download' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About us', to: '/about' },
      { name: 'Blog', to: '/blog' },
      { name: 'Contact', to: '/contact' },
      { name: 'Careers', to: '/careers', span: "— We're hiring" },
      { name: 'Newsroom', to: '/news' },
      { name: 'sitemap', to: '/sitemap' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Terms', to: '/terms' },
      { name: 'Privacy', to: '/privacy' },
      { name: 'Help & Support', to: '/support' },
      { name: 'FAQ', to: '/faq' },
      { name: "What's new", to: '/news' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { name: 'Api', to: '/api' },
      { name: 'Status', to: '/' },
      { name: 'Github', to: '/', span: '— New' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { name: 'Financial Services', to: '/' },
      { name: 'Education', to: '/' },
    ],
  },
]

function App() {
  // reinitializes the components every time when app is mounted or page was changed
  const location = useLocation()

  useEffect(() => {
    require('preline/preline')
  }, [])

  useEffect(() => {
    window.HSStaticMethods.autoInit()
  }, [location.pathname])

  // Check if the current route matches '/404'
  const isHeader =
    location.pathname === '/login' ||
    location.pathname === '/signup' ||
    location.pathname === '/not-found'

  return (
    <Theme className={'dark:bg-custom_dark'}>
      {/* Render the header only if it's not the 404 page */}
      {!isHeader && <Header links={headerUrls} />}
      {/* <Navbar links={headerUrls} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/cookie" element={<CookiePolicy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/:id/:content" element={RestaurantPage} exact /> */}
      </Routes>
      {/* Render the footer only if it's not the 404 page */}
      {!isHeader && <Footer links={footerUrls} />}
    </Theme>
  )
}

App.defaultProps = {}
App.propTypes = {}

export default App
