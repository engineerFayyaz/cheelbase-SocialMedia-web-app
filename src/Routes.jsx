import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./Pages/Home";
// import Home from "./Pages/Home";
// import NotFound from "./Pages/NotFound";

const Cheelzs =React.lazy(()=>import("./Pages/Cheelzs"));
const Gallery = React.lazy(()=>import("./Pages/Gallery"));
const Home =React.lazy(()=>import('./Pages/Home'));
const Welcome = React.lazy(()=>import('./Pages/Welcome'));
const QrCode = React.lazy(()=>import('./Pages/QrCode'));
const LinkingDevice = React.lazy(()=>import('./Pages/LinkingDevice'));
const Profile= React.lazy(()=>import ('./Pages/Profile'));
const verificationProfileInformation = React.lazy(()=>import('./Pages/verificationProfileInformation'));
const ChannelMain = React.lazy(()=> import('./Pages/ChannelMain'))


const ProjectRoutes =()=>{
    return(
    <React.Suspense fallback={<>Loading...</>}>
        <Router>
        <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Cheelzs" element={<Cheelzs/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/QrCode" element={<QrCode/>}/>
        <Route path="/LinkingDevice" element={<LinkingDevice/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/verificationProfileInformation " element={<verificationProfileInformation/>}/>
        <Route path="/ChannelMain" element={<ChannelMain/>}/>
        </Routes>
        </Router>
    </React.Suspense>
    );
}
export default ProjectRoutes;
