import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';
import './index.css';

// This function is a functional component that helps us split the UI into distinct parts.
function App() {
  return (
    <div className='page-container'>
      <Header />
      <div className='content'><Outlet /></div>
      <Footer />
    </div>
  );
}

export default App

// WHEN I load the portfolio
// THEN I am presented with a page containing a header, a section for content, and a footer