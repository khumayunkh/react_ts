import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from './components/header/header';
import Products from './components/products/products';
import Profile from './components/profile/profile'

function App() {
  return (
    <div className="App">
      <Header/>
      <Products/>
      <Routes>
        <Route path='/profile/:id' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
