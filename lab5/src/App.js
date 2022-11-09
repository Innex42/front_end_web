import './App.css';
import DisplayFoodItems from './components/DisplayFoodItems';
import { items } from './data/Data';

function App() {
  return (
    <DisplayFoodItems details={items}/>
  );
}

export default App;
