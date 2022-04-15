import './App.css';
import { GlobalButton } from "./components/globalButton";
import { Homes } from './page/home/home';

function App() {
  return (
  <>
    <GlobalButton names="test"></GlobalButton>
    <Homes/>
  </>  
  );
}

export default App;
