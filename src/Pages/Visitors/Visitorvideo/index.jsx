import React from "react";
import Header from "../../../Componenets/Header";
import'../Visitorvideo/Visitorvideo.css';

const Visitorvideo = () => {
    return(
        <>
        <Header/>
        <main className="max-width">
  <div className="container-fluid">
    {/* background images */}
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm height-main">
        <img
          className="vist-img"
          src="../images/Rectangle 1128.png"
          alt=""
        />
        <img
          className="vist-img-position"
          src="../images/Group 3465296.png"
          alt=""
        />
        <img className="vist-avtar" src="../images/Avatar.png" alt="" />
        <div className="btn-containter">
          <label className="btn-view" htmlFor="#">
            View more
          </label>
          <label className="btn-view" htmlFor="#">
            share
          </label>
        </div>
      </div>
    </div>
    {/* background image end  */}
    {/* portion  */}
    <div className="row width-row my-5">
      <div className="col-lg-2 icons-links">
        <a
          href="visitors-profile-cheels.html"
          className="d-flex flex-column align-items-center"
        >
          <img
            className="img-width"
            src="../images/amp_stories.png"
            alt=""
          />
          <label className="mt-2 " htmlFor="#">
            <b>Cheels</b>
          </label>
        </a>
      </div>
      <div className="col-lg-2  icons-links amp-stories">
        <a
          href="visitor-video.html"
          className="d-flex flex-column align-items-center"
        >
          <img
            className="img-width"
            src="../images/movie-video.png"
            alt=""
          />
          <label className="mt-2 text-light" htmlFor="#">
            <b>Videos</b>
          </label>
        </a>
      </div>
      <div className="col-lg-2  icons-links">
        <a
          href="visitor-gallery.html"
          className="d-flex flex-column align-items-center"
        >
          <img
            className="img-width"
            src="../images/gallery_thumbnail.png"
            alt=""
          />
          <label className="mt-2" htmlFor="">
            <b>Gallery</b>
          </label>
        </a>
      </div>
      <div className="col-lg-2 icons-links ">
        <a
          href="restaurant.html"
          className="d-flex flex-column align-items-center"
        >
          <img
            className="img-width"
            src="../images/lunch_dining.png"
            alt=""
          />
          <label className="mt-2" htmlFor="">
            <b>Foods</b>
          </label>
        </a>
      </div>
      <div className="col-lg-2  icons-links">
        <a
          href="product.html"
          className="d-flex flex-column align-items-center"
        >
          <img
            className="img-width"
            src="../images/shopping_basket.png"
            alt=""
          />
          <label className="mt-2" htmlFor="">
            <b>Products</b>
          </label>
        </a>
      </div>
      <div className="col-lg-2  icons-links">
        <a
          href="visitors-profile-cheels.html"
          className="d-flex flex-column align-items-center"
        >
          <img
            className="img-width"
            src="../images/real_estate_agent.png"
            alt=""
          />
          <label className="mt-2" htmlFor="">
            <b>Properties</b>
          </label>
        </a>
      </div>
    </div>
    {/* portion end */}
    <div className="container mt-3">
      <div className="input-group  search-icon-bottom">
        <button
          className="btn btn-outline-secondary btn-icon-search"
          type="button"
          id="search-icon"
        >
          <i className="fas fa-search" />
        </button>
        <input
          type="text"
          className="form-control  btn-icon-search1"
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="search-icon"
        />
      </div>
    </div>
    {/* video section  */}
    {/* first line */}
    <div className="row main-video-width d-flex mt-3">
      <div className="col-lg-3 video-width ">
        <img src="../images/Group 18849.png" width="300px" alt="" />
      </div>
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <a className="under-line-bar" href="video-search-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
      <div className="col-lg-3 video-width">
        {" "}
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <a className="under-line-bar" href="video-search-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
      <div className="col-lg-3 video-width">
        {" "}
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <a className="under-line-bar" href="video-search-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
    </div>
    {/* first end */}
    {/* 2nd start */}
    <div className="row main-video-width d-flex mt-3">
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <a className="under-line-bar" href="video-search-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <a className="under-line-bar" href="video-search-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <a className="under-line-bar" href="video-search-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <a className="under-line-bar" href="video-search-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
    </div>
    {/* 2nd end */}
    {/* 3rd start */}
    <div className="row main-video-width d-flex mt-3">
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <img src="../images/Ellipse 367.png" alt="" />
          <h6>
            This is my entire video for the next shouti ng of all time. hsnsn
            snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
          </h6>
          <label htmlFor="">Cheelbase</label>
          <p>709m view . 17 minutes ago</p>
        </div>
      </div>
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <img src="../images/Ellipse 367.png" alt="" />
          <h6>
            This is my entire video for the next shouti ng of all time. hsnsn
            snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
          </h6>
          <label htmlFor="">Cheelbase</label>
          <p>709m view . 17 minutes ago</p>
        </div>
      </div>
      <div className="col-lg-3 video-width ">
        <img src="../images/Group 18484 (1).png" width="300px" alt="" />
      </div>
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <img src="../images/Ellipse 367.png" alt="" />
          <h6>
            This is my entire video for the next shouti ng of all time. hsnsn
            snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
          </h6>
          <label htmlFor="">Cheelbase</label>
          <p>709m view . 17 minutes ago</p>
        </div>
      </div>
    </div>
    {/* 3rd end */}
    {/* 4th start */}
    <div className="row main-video-width d-flex mt-3">
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <img src="../images/Ellipse 367.png" alt="" />
          <h6>
            This is my entire video for the next shouti ng of all time. hsnsn
            snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
          </h6>
          <label htmlFor="">Cheelbase</label>
          <p>709m view . 17 minutes ago</p>
        </div>
      </div>
      <div className="col-lg-3 video-width ">
        <img src="../images/Group 18484 (1).png" width="300px" alt="" />
      </div>
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <img src="../images/Ellipse 367.png" alt="" />
          <h6>
            This is my entire video for the next shouti ng of all time. hsnsn
            snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
          </h6>
          <label htmlFor="">Cheelbase</label>
          <p>709m view . 17 minutes ago</p>
        </div>
      </div>
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <img src="../images/Ellipse 367.png" alt="" />
          <h6>
            This is my entire video for the next shouti ng of all time. hsnsn
            snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
          </h6>
          <label htmlFor="">Cheelbase</label>
          <p>709m view . 17 minutes ago</p>
        </div>
      </div>
    </div>
    {/* 4th end */}
    {/* 5th start */}
    <div className="row main-video-width d-flex mt-3">
      <div className="col-lg-3 video-width ">
        <img src="../images/Group 1051.png" width="300px" alt="" />
      </div>
      <div className="col-lg-3 video-width ">
        <img src="../images/Group 1051.png" width="300px" alt="" />
      </div>
      <div className="col-lg-3 video-width ">
        <img src="../images/Group 1051.png" width="300px" alt="" />
      </div>
      <div className="col-lg-3 video-width ">
        <img src="../images/Group 1051.png" width="300px" alt="" />
      </div>
    </div>
    {/* 5th end  */}
    {/* 6th start */}
    <div className="row main-video-width d-flex mt-3">
      <div className="col-lg-3 video-width1 ">
        <img src="../images/Rectangle 4988.png" width="200px" alt="" />
      </div>
      <div className="col-lg-3 video-width1 ">
        <img src="../images/Rectangle 4991.png" width="200px" alt="" />
      </div>
      <div className="col-lg-3 video-width1 ">
        <img src="../images/Rectangle 4988.png" width="200px" alt="" />
      </div>
      <div className="col-lg-3 video-width1 ">
        <img src="../images/Rectangle 4988.png" width="200px" alt="" />
      </div>
      <div className="col-lg-3 video-width1 ">
        <img src="../images/Rectangle 4991.png" width="200px" alt="" />
      </div>
      <div className="col-lg-3 video-width1 ">
        <img src="../images/Rectangle 4988.png" width="200px" alt="" />
      </div>
    </div>
    {/* 6th end */}
    <label className="channels" htmlFor="#">
      {" "}
      Find Channels
    </label>
    {/* 7th start */}
    <div className="row main-video-width d-flex mt-3">
      <div className="col-lg-3 video-width1 ">
        <img src="../images/Group 18147 (1).png" width="200px" alt="" />
      </div>
      <div className="col-lg-3 video-width1 ">
        <img src="../images/Group 18147 (1).png" width="200px" alt="" />
      </div>
      <div className="col-lg-3 video-width1 ">
        <img src="../images/Group 18147 (1).png" width="200px" alt="" />
      </div>
      <div className="col-lg-3 video-width1 ">
        <img src="../images/Group 18147 (1).png" width="200px" alt="" />
      </div>
      <div className="col-lg-3 video-width1 ">
        <img src="../images/Group 18147 (1).png" width="200px" alt="" />
      </div>
      <div className="col-lg-3 video-width1 ">
        <img src="../images/Group 18147 (1).png" width="200px" alt="" />
      </div>
    </div>
    {/* 7th end */}
    <div className="btn-next text-center">
        <a href="/Videosearch">
        <button className="btn btn-primary">
        Continue to Next
      </button>
     </a>
      </div>
  </div>
</main>

        </>
    )
}

export default Visitorvideo;