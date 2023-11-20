import React from "react";
import Header from "../../Componenets/Header";
import Sidebar from "../../Componenets/Sidebar";
import Stories from "../../Componenets/Stories";
import RightSideBar from "../../Componenets/RightSideBar";

const HomePage =()=>{
    return(
        <>
        <div className="container-fliud container-width">
        <div className="row">
        <Header/>
        <Sidebar/>
        <Stories/>
        <RightSideBar/>
        </div>
        </div>
        </>
    )
}
export default HomePage;