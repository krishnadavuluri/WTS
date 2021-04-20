import logo from './logo.svg';
import './App.css';
import Routes from './Routes/routes';
import { ApexChart } from './components/charts/MasterCostChart';
function App() {
  return (
    <div className="App">
      <Routes/>
      {/* <ApexChart/> */}
    </div>
  );
}

export default App;
