import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {getUsers, petDecrement, petIncrement} from './action';
import {petCounter, users} from './reducer';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    dispatch(getUsers(), []);
  }, [])

  const petCounter = useSelector((state)=>state.petCounter);
  const dispatch = useDispatch();
  const users = useSelector((state)=>state.users.users);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to pet world</h1>
        <h3>Pet Counter {petCounter}</h3>
        <button onClick={()=>dispatch(petIncrement(1))}>Add pet</button>
        <button onClick={()=>dispatch(petDecrement(1))}>Remove pet</button>
        <h3>User data</h3>
        <div>
          {
            users.map(user=><h5>{user.name}</h5>)
          }
        </div>
      </header>
    </div>
  );
}

export default App;
