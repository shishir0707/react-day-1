import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import MainNav from './components/MainNav/MainNav';
import NotFound from './components/NotFound/NotFound';
import Blog from './Pages/Blog/Blog';



function App() {
  const [theme, setTheme] = React.useState('light');
  // const themeSwitch = () => {
  // if (theme === 'light') {
  //   setTheme('dark');
  // } else {
  //   setTheme('light');
  // };
  //   setTheme(theme === 'light' ? 'dark' : 'light');
  // };

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`${theme}`}>
      <MainNav />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
