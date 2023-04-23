import logo from './logo.svg';
import './App.css';
import UserPrompts from './components/UserPrompts/UserPrompts';
import Response from './components/Response/Response';

function App() {
  return (
    <div className="App">
      <Response/>
      <UserPrompts/>
    </div>
  );
}

export default App;
