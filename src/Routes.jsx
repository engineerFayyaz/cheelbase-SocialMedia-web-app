import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./Pages/Home";
// import Home from "./Pages/Home";
// import NotFound from "./Pages/NotFound";

const Cheelzs =React.lazy(()=>import("./Pages/Cheelzs"));
const Gallery = React.lazy(()=>import("./Pages/Gallery"));
const HomePage =React.lazy(()=>import('./Pages/HomePage'))

const ProjectRoutes =()=>{
    return(
    <React.Suspense fallback={<>Loading...</>}>
        <Router>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Cheelzs" element={<Cheelzs/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        </Routes>
        </Router>
    </React.Suspense>
    );
}
export default ProjectRoutes;
