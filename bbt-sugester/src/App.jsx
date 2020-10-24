import './App.css';
import { DropDownComp } from './frontend/components/dropDownComp'
import { WeatherComp } from './frontend/components/weatherComp'
import { BBTComp } from './frontend/components/bbtComponent'
import './styles.sass';

function App() {
  return (
    <div className="body">
      <DropDownComp />
      <WeatherComp />
      <BBTComp />

    </div>
  );
}

export default App;
