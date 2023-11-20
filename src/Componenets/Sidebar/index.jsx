import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="col-md-3 left-sidebar-main ">
        <div className="searchbar d-flex align-items-center mt-0">
          <li className="dropdown">
            <i
              className="fa-solid fa-bars dropdown"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            />
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <a className="dropdown-item" href="#">
                <i className="fa-solid fa-gear" />
                Business Tool
              </a>
              <Link to="/Gallery" className="dropdown-item">
                <i className="fa-solid fa-photo-film" />
                Gallery
              </Link>
              <Link to="/Cheelzs" className="dropdown-item">
                <i className="fa-solid fa-photo-film" />
                Cheels
              </Link>
              <a className="dropdown-item" href="video.html">
                <i className="fa-solid fa-store" />
                Store
              </a>
              <a className="dropdown-item" href="resturants.html">
                <i className="fa-solid fa-utensils" />
                Resturants
              </a>
              <a className="dropdown-item" href="property.html">
                <i className="fa-solid fa-hand-holding-dollar" />
                Property Listing
              </a>
              <a className="dropdown-item" href="#">
                <i className="fa-solid fa-wallet" />
                Monitization
              </a>
            </div>
          </li>
          <i className="fa fa-search" />
          {/* <input class="form-control searchbar-input" type="search" placeholder="Search" aria-label="Search"> */}
          <input
            className="text-center"
            type="search"
            placeholder="Search user,groups,channels"
          />
        </div>
        {/* Sidebar */}
        <nav id="sidebar" className="d-md-block sidebar">
          <div>
            <ul className="nav flex-column">
              <li className="nav-item child">
                <h2>Recent Chats</h2>
                {/* Chat items */}
                <div className="parent">
                  <div>
                    <img
                      src="/images/hug shark  banner.jpeg"
                      alt="Chat 1"
                      className="chat-image"
                    />
                  </div>
                  <div>
                    <span className="profile-name">Matheus</span>
                    <p className="text-muted">Bora jogar aquele?</p>
                  </div>
                  <div className="tticon">
                    <span className="time">11:45 AM</span>
                    <i className="fa-solid fa-check-double" />
                  </div>
                </div>
                <div className="parent">
                  <div>
                    <img
                      src="/images/open thumb.jpg"
                      alt="Chat 1"
                      className="chat-image"
                    />
                  </div>
                  <div>
                    <span className="profile-name">Matheus</span>
                    <p className="text-muted">Bora jogar aquele?</p>
                  </div>
                  <div className="tticon">
                    <span className="time">11:45 AM</span>
                    <i className="fa-solid fa-check-double" />
                  </div>
                </div>
                <div className="parent">
                  <div>
                    <img
                      src="/images/life in two bannn.jpeg"
                      alt="Chat 1"
                      className="chat-image"
                    />
                  </div>
                  <div>
                    <span className="profile-name">Matheus</span>
                    <p className="text-muted">Bora jogar aquele?</p>
                  </div>
                  <div className="tticon">
                    <span className="time">11:45 AM</span>
                    <i className="fa-solid fa-check-double" />
                  </div>
                </div>
                <div className="parent">
                  <div>
                    <img
                      src="/images/lawless thumb.jpg"
                      alt="Chat 1"
                      className="chat-image"
                    />
                  </div>
                  <div>
                    <span className="profile-name">Matheus</span>
                    <p className="text-muted">Bora jogar aquele?</p>
                  </div>
                  <div className="tticon">
                    <span className="time">11:45 AM</span>
                    <i className="fa-solid fa-check-double" />
                  </div>
                </div>
                <div className="parent">
                  <div>
                    <img
                      src="/images/garage thumb.jpeg"
                      alt="Chat 1"
                      className="chat-image"
                    />
                  </div>
                  <div>
                    <span className="profile-name">Matheus</span>
                    <p className="text-muted">Bora jogar aquele?</p>
                  </div>
                  <div className="tticon">
                    <span className="time">11:45 AM</span>
                    <i className="fa-solid fa-check-double" />
                  </div>
                </div>
                {/* Add more chat items as needed */}
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <div className="channels-heading ">
              <h3>Channels</h3>
            </div>
            <ul className="nav flex-column">
              <li className="nav-item child">
                <h2>Recent Channels</h2>
                {/* Chat items */}
                <div className="parent">
                  <div>
                    <img
                      src="/images/hug shark  banner.jpeg"
                      alt="Chat 1"
                      className="chat-image"
                    />
                  </div>
                  <div>
                    <span className="profile-name">Matheus</span>
                    <p className="text-muted">Bora jogar aquele?</p>
                  </div>
                  <div className="tticon">
                    <span className="time">11:45 AM</span>
                    <i className="fa-solid fa-check-double" />
                  </div>
                </div>
                <div className="parent">
                  <div>
                    <img
                      src="/images/open thumb.jpg"
                      alt="Chat 1"
                      className="chat-image"
                    />
                  </div>
                  <div>
                    <span className="profile-name">Matheus</span>
                    <p className="text-muted">Bora jogar aquele?</p>
                  </div>
                  <div className="tticon">
                    <span className="time">11:45 AM</span>
                    <i className="fa-solid fa-check-double" />
                  </div>
                </div>
                <div className="parent">
                  <div>
                    <img
                      src="/images/life in two bannn.jpeg"
                      alt="Chat 1"
                      className="chat-image"
                    />
                  </div>
                  <div>
                    <span className="profile-name">Matheus</span>
                    <p className="text-muted">Bora jogar aquele?</p>
                  </div>
                  <div className="tticon">
                    <span className="time">11:45 AM</span>
                    <i className="fa-solid fa-check-double" />
                  </div>
                </div>
                <div className="parent">
                  <div>
                    <img
                      src="/images/lawless thumb.jpg"
                      alt="Chat 1"
                      className="chat-image"
                    />
                  </div>
                  <div>
                    <span className="profile-name">Matheus</span>
                    <p className="text-muted">Bora jogar aquele?</p>
                  </div>
                  <div className="tticon">
                    <span className="time">11:45 AM</span>
                    <i className="fa-solid fa-check-double" />
                  </div>
                </div>
                <div className="parent">
                  <div>
                    <img
                      src="/images/garage thumb.jpeg"
                      alt="Chat 1"
                      className="chat-image"
                    />
                  </div>
                  <div>
                    <span className="profile-name">Matheus</span>
                    <p className="text-muted">Bora jogar aquele?</p>
                  </div>
                  <div className="tticon">
                    <span className="time">11:45 AM</span>
                    <i className="fa-solid fa-check-double" />
                  </div>
                </div>
                {/* Add more chat items as needed */}
              </li>
            </ul>
          </div>
          <hr color="#D9D9D9" style={{ height: 3 }} />
          <div className="explore-more">
            <ul>
              <h5>Explore More</h5>
              <div className="help">
                <a href="#">
                  <i className="fa-regular fa-circle-question" />
                  help
                </a>
              </div>
            </ul>
          </div>
          <hr color="#D9D9D9" style={{ height: 3 }} />
          <div className="extra-links">
            <ul>
              <li>
                <a href="#">Refund Policy</a>
              </li>
              <li>
                <a href="#">Termss OF Use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Affiliates</a>
              </li>
              <li>
                <a href="#">Acceptabel use Policy</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
              <li>
                <a href="#">Language</a>
              </li>
              <li>
                <a href="#">Monitization</a>
              </li>
            </ul>
          </div>
        </nav>
        {/* sidebar ends */}
      </div>
    </>
  );
};
export default Sidebar;
