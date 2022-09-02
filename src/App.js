import {
  BrowserRouter,
  Routes,
  Route,} from "react-router-dom";
import './App.css';
import { Homes } from './page/home/home';
import { Community } from './page/communityPage/community';
import { Dashboard } from './page/dashboard/dashboard';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="home" element={<Homes />} > 
       <Route path="dashboard" element={<Dashboard />} />
      </Route>
      <Route path="ad/" element={<Community />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
