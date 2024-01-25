import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main><Outlet /></main>
      <Footer />
    </>
  );
}

export default App

// DONE
// WHEN I load the portfolio
// THEN I am presented with a page containing a header, a section for content, and a footer