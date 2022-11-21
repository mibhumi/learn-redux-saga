import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {petDecrement, petIncrement} from './action';
import {petCounter} from './reducer';

function App() {

  const petCounter = useSelector((state)=>state.petCounter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to pet world</h1>
        <h3>Pet Counter {petCounter}</h3>
        <button onClick={()=>dispatch(petIncrement(1))}>Add pet</button>
        <button onClick={()=>dispatch(petDecrement(1))}>Remove pet</button>
      </header>
    </div>
  );
}

export default App;
