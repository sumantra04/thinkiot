import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Event from "./components/events/events";
import Teams from "./components/members/teams";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/events" element={<Event/>}/>
        <Route path="/members" element={<Teams/>}/>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
