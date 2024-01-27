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
const VisitorProfile = React.lazy(()=>import('./Pages/VisitorProfile'))
const FullVideo = React.lazy(()=>import('./Pages/FullVideo'))
const Resturants = React.lazy(()=> import('./Pages/Resturants'))
const Products = React.lazy(()=>import('./Pages/Products'))
const Property = React.lazy(()=> import('./Pages/Property'))
const MarketPlace = React.lazy(()=>import('./Pages/MarketPlace'))
const MarketFood = React.lazy(()=>import('./Pages/MarketFood'))
const MarketProperties = React.lazy(()=>import('./Pages/MarketProperties'))


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
        <Route path="/VisitorProfile" element={<VisitorProfile/>}/>
        <Route path="/FullVideo" element={<FullVideo/>}/>
        <Route path="/Resturants" element={<Resturants/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Property" element={<Property/>}/>
        <Route path="/MarketPlace" element={<MarketPlace/>}/>
        <Route path="/MarketFood" element={<MarketFood/>}/>
        <Route path="/MarketProperties" element={<MarketProperties/>}/>
        </Routes>
        </Router>
    </React.Suspense>
    );
}
export default ProjectRoutes;
