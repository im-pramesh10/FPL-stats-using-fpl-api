import Home from "./pages/home";
import { Route, Routes  } from "react-router-dom";

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  );
}