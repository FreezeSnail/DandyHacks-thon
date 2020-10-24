import './App.css';
import { DropDownComp } from './frontend/components/dropDownComp'
import { WeatherComp } from './frontend/components/weatherComp'
import './styles.sass';

function App() {
  return (
    <div className="body">
      <DropDownComp />
      <WeatherComp />

    </div>
  );
}

export default App;
