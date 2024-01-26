import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BusinessVerification from "./Pages/Verificationsixth";
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
const Verification1 = React.lazy(()=>import('./Pages/Verification1'));
const Verificationsecond = React.lazy(()=>import('./Pages/Verificationsecond'));
const Verificationthird = React.lazy(()=>import('./Pages/Verificationthird'));
const Verificationfourth = React.lazy(()=>import('./Pages/Verificationfourth'));
const Verificationfifth = React.lazy(()=>import('./Pages/Verificationfifth'));
const Verificationbusiness = React.lazy(()=>import('./Pages/Verificationbusiness'));
const Verificationsixth = React.lazy(()=>import('./Pages/Verificationsixth'));
const Verificationid = React.lazy(()=>import('./Pages/Verificationid'));
const Verificationconfirmation = React.lazy(()=>import('./Pages/Verificationconfirmation'));
const Chattingpage1 = React.lazy(()=>import('./Pages/Chattingpages/Chattingpage1'));
const Searchcontactpage = React.lazy(()=>import('./Pages/Chattingpages/Searchcontactpage'));
const Chattingmessenger = React.lazy(()=>import('./Pages/Chattingpages/Chattingmessenger'));
const Groupcall = React.lazy(()=>import('./Pages/Chattingpages/Groupcall'));
const Groupcall2 = React.lazy(()=>import('./Pages/Chattingpages/Groupcall2'));

const Callingpage = React.lazy(()=>import('./Pages/Chattingpages/Callingpage'));
const Callingmarina = React.lazy(()=>import('./Pages/Chattingpages/Callingmarina'));
const Callingvideo = React.lazy(()=>import('./Pages/Chattingpages/Callingvideo'));
const Callingvideo2 = React.lazy(()=>import('./Pages/Chattingpages/Callingvideo2'));

const Sharedscreen = React.lazy(()=>import('./Pages/Chattingpages/Sharedscreen'));
const Groupchat = React.lazy(()=>import('./Pages/Chattingpages/Groupchat'));
const Groupchatsecond = React.lazy(()=>import('./Pages/Chattingpages/Groupchatsecond'));
const Groupvideosecond = React.lazy(()=>import('./Pages/Chattingpages/Groupvideosecond'));
const Businesshelp = React.lazy(()=>import('./Pages/Businessmanager/Businesshelp'));
const Supportchat = React.lazy(()=>import('./Pages/Businessmanager/Supportchat'));
const Businesssupport = React.lazy(()=>import('./Pages/Businessmanager/Businesssupport'));
const Businessleader = React.lazy(()=>import('./Pages/Businessmanager/Businessleader'));
const Marketplace = React.lazy(()=>import('./Pages/Marketplace/Marketplace'));
const Marketstore = React.lazy(()=>import('./Pages/Marketplace/Marketstore'));
const Marketfood = React.lazy(()=>import('./Pages/Marketplace/Marketfood'));
const Marketproperties = React.lazy(()=>import('./Pages/Marketplace/Marketproperties'));
const Billingplan1 = React.lazy(()=>import('./Pages/Billingplans/Billingplan1'));
const Billingplan2 = React.lazy(()=>import('./Pages/Billingplans/Billingplan2'));
const Analyticsdashboard = React.lazy(()=>import('./Pages/Analyticsdashboard'));


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
        <Route path="/Verification1" element={<Verification1/>}/>
        <Route path="/Verificationsecond" element={<Verificationsecond/>}/>
        <Route path="/Verificationthird" element={<Verificationthird/>}/>
        <Route path="/Verificationfourth" element={<Verificationfourth/>}/>
        <Route path="/Verificationfifth" element={<Verificationfifth/>}/>
        <Route path="/Verificationbusiness" element={<Verificationbusiness/>}/>
        <Route path="/Verificationsixth" element={<Verificationsixth/>}/>
        <Route path="/Verificationid" element={<Verificationid/>}/>
        <Route path="/Verificationconfirmation" element={<Verificationconfirmation/>}/>
        <Route path="/Chattingpage1" element={<Chattingpage1/>}/>
        <Route path="/Searchcontactpage" element={<Searchcontactpage/>}/>
        <Route path="/Chattingmessenger" element={<Chattingmessenger/>}/>
        <Route path="/Groupcall" element={<Groupcall/>}/>
        <Route path="/Groupcall2" element={<Groupcall2/>}/>
        
        <Route path="/Callingpage" element={<Callingpage/>}/>
        <Route path="/Callingmarina" element={<Callingmarina/>}/>
        <Route path="/Callingvideo" element={<Callingvideo/>}/>
        <Route path="/Callingvideo2" element={<Callingvideo2/>}/>
        
        <Route path="/Sharedscreen" element={<Sharedscreen/>}/>
        <Route path="/Groupchat" element={<Groupchat/>}/>
        <Route path="/Groupchatsecond" element={<Groupchatsecond/>}/>
        <Route path="/Groupvideosecond" element={<Groupvideosecond/>}/>
        <Route path="/Businesshelp" element={<Businesshelp/>}/>
        <Route path="/Supportchat" element={<Supportchat/>}/>
        <Route path="/Businesssupport" element={<Businesssupport/>}/>
        <Route path="/Businessleader" element={<Businessleader/>}/>
        <Route path="/Marketplace" element={<Marketplace/>}/>
        <Route path="/Marketstore" element={<Marketstore/>}/>
        <Route path="/Marketfood" element={<Marketfood/>}/>
        <Route path="/Marketproperties" element={<Marketproperties/>}/>
        <Route path="/Billingplan1" element={<Billingplan1/>}/>
        <Route path="/Billingplan2" element={<Billingplan2/>}/>
        <Route path="/Analyticsdashboard" element={<Analyticsdashboard/>}/>
                 

        </Routes>
        </Router>
    </React.Suspense>
    );
}
export default ProjectRoutes;
