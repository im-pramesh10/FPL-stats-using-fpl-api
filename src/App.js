import Home from "./pages/home";
import { Route, Routes  } from "react-router-dom";
import NavBar from "./components/NavBar";
import './App.css';

export default function App(){
  return (
<>
    <NavBar/>
   
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
</>
  );
}