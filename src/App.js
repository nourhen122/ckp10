import logo from './logo.svg';
import './App.css';
import Tasklist from './components/Tasklist';
import AddTask from './components/AddTask';
import Task from './components/Task';
import { useDispatch } from 'react-redux';
import { can, filter } from './azerty/action';

function App() {

  const dispatch = useDispatch()
  return (
    <div className="App">
      <AddTask />
      <Tasklist />
      <button onClick={()=> dispatch(filter())} > Filter/All </button>
     
    </div>
    
  );
}

export default App;
