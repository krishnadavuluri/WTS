
import './App.css';
import Routes from './Routes/routes';
import { ErrorHandler } from './ErrorHandler/ErrorHandler';
function App() {
  return (
    <div className="App">
      <ErrorHandler>
        <Routes/>
      </ErrorHandler>
    </div>
  );
}

export default App;
