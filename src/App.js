
import './App.css';
import Navbar from './components/Navbar';
import './styles.css';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Home from './pages/Home';

function App() {
  let component
  switch (window.location.pathname) {
    case '/home' :
      component = <Home />
    break
    case '/pricing' :
      component = <Pricing />
      break
      case '/about' :
        component = <About />
        break

  }


  return (
    <div className="App">
      <Navbar />
       <div className ='container'>
        {component}
       </div>
    </div>
  );
}

export default App;
