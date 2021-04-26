import logo from './logo.svg';
import './App.css';
import Routes from './Routes/routes';
import { ApexChart } from './components/charts/MasterCostChart';
import { ApiFetch } from './apiFetch';
function App() {
  return (
    <div className="App">
      <Routes/>
      {/* <ApexChart/> */}
      {/* <ApiFetch/> */}
    </div>
  );
}

export default App;
