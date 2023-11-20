import React from "react";
import Header from "../../Componenets/Header";
import Sidebar from "../../Componenets/Sidebar";
import Stories from "../../Componenets/Stories";
import RightSideBar from "../../Componenets/RightSideBar";
import GalleryPageComp from "../../Componenets/GalleryPageComp";
import Gallery from "../../Componenets/Gallery";
import Properties from "../../Componenets/Properties";

const HomePage =()=>{
    return(
        <>
        <div className="container-fliud container-width">
        <div className="row">
        <Header/>
        <Sidebar/>
        <Stories/>
        <RightSideBar/>
        <Gallery/>
        <Properties/>
        </div>
        </div>
        </>
    )
}
export default HomePage;