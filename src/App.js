import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment} from './components/counterSlice';

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.count)

  return (
    <div className="App">
      <button onClick={() => dispatch(increment())} >+</button>
      <button onClick={() => count > 0 ? dispatch(decrement()) : false} >-</button>
      <div>{count}</div>
    </div>
  );
}

export default App;
