import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homes } from './page/home/home';
import { Community } from './page/community/community';
import { Joke } from './page/joke/joke';

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="joke" element={<Joke />} />
        <Route path="courses/joke" element={<Homes />} />
        <Route path="home" element={<Homes />} />
        <Route path="community" element={<Community />} />
        <Route path="jokes3" element={<Community />} />
      </Routes>
    </BrowserRouter>
  </>  
  );
}

export default App;
