
import './App.css';
import Footer from './footer/Footer';
import './header/Main-header';
import MainNavBar from './header/Main-header';

import Team from './home/Home';





const App = () => {
  return (
    <div>
      <MainNavBar />
      {/* <SimpleSlider /> */}
      <Team />
      <Footer />
    </div>
  );
}

export default App;
