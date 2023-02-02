import Home from "./pages/home";
import Team from "./pages/team";
import { Route, Routes  } from "react-router-dom";
import NavBar from "./components/NavBar";
import './App.css';
import Footer from "./components/footer";

export default function App(){
  return (
<>
    <NavBar/>
   
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/team" element={<Team/>} />

    </Routes>

    <Footer/>
</>
  );
}