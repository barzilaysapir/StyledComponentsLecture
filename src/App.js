import GlobalStyle from './components/GlobalStyle';
import Home from './components/pages/Home/Home';
import Theme from './components/Theme';
import { Switch, Route } from 'react-router-dom';
import About from './components/pages/About/About';
import Navbar from './components/pages/Navbar/Navbar';

function App() {
  return (
    <Theme>
      <GlobalStyle />

      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
      </Switch>

    </Theme>
  );
}

export default App;
