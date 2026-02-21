import { GlobalStyles } from './GlobalStyles';
import { Header } from './components/header';
import Home from './components/Home';
//router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Movie from './components/Movie'; 


const App = () => (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyles />
    </Router>
  );

export default App;
