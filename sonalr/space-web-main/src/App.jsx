import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.jsx";
import HeroCard from "./components/HeroCard/HeroCard.jsx";
import BgVideo from "./assets/sat.mp4";
import wave from "./assets/wave Gif.gif";
import Rapidscat from "./components/Rapidscat/Rapidscat.jsx";
import Satelite from "./components/Satelite/Satelite.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Footer5 from "./components/Footer/Footer5.jsx";
import Cloud from "./components/Cloud/Cloud.jsx";
import TimedHomePage from "./components/TimedHomePage.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import PrivateRouter from "./PrivateRouter.jsx";
import NotFound from "./NotFound.jsx";
import Logout from "./Logout.jsx";
import Todo from "./Todo.jsx";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
  //  Home page
    <Routes>
    <Route path="/" element={<TimedHomePage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route element={<PrivateRouter/>}>
    <Route path="/logout" element={<Logout />} />
    <Route path="*" element={<NotFound />} />
    <Route path="/todo" element={<Todo />}/>

    </Route>
    </Routes>
  );
};

export default App;
