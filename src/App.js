import GlobalStyle from './components/GlobalStyle';
import Home from './components/pages/Home/Home';
import Theme from './components/Theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/pages/About/About';
import Navbar from './components/pages/Navbar/Navbar';

function App() {
  return (
    <Theme>
      <GlobalStyle />

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>

    </Theme>
  );
}

export default App;
