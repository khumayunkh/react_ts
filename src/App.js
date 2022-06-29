import './App.css';
import Header from './components/header/header';
import Products from './components/products/products';

function App() {
  return (
    <div className="App">
      <Header/>
      <Products/>
      <Router></Router>
    </div>
  );
}

export default App;
