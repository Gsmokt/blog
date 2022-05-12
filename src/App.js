import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import Home from './components/Home';
import Login from './components/Login';
import Navigation from "./components/Navigation";
import Required from "./components/Required";


function App() {
  const [isLogged, setIsLogged] = useState(localStorage.getItem('isLogged'));

  return (
    <BrowserRouter>

    <Navigation setIsLogged={setIsLogged} isLogged={isLogged} />

      <Routes>
        <Route path='/' element={<Home isLogged={isLogged} />} />
        <Route path='/login' element={<Login setIsLogged={setIsLogged} />} />
        <Route path='/createpost' element={<Required isLogged={isLogged} ><CreatePost /></Required>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
