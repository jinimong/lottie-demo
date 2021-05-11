import './App.css';
import ControlledLottie from './components/ControlledLottie';
import UncontrolledLottie from './components/UncontrolledLottie';

function App() {
  return (
    <div className="App">
      <h1>REACT LOTTIES</h1>
      <div className="lotties">
        <UncontrolledLottie />
        <ControlledLottie />
      </div>
    </div>
  );
}

export default App;
