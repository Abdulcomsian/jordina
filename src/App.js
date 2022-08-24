import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from "react-router-dom";
import AppRoute from './routes/index';

function App() {
  return (
    <BrowserRouter basename='/Jordina'>
      <AppRoute/>
    </BrowserRouter>
  );
}

export default App;
