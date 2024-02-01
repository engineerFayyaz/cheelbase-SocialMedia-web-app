import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="col-md-3 left-sidebar-main ">
  <div className="searchbar d-flex align-items-center mt-0">
    <li className="dropdown account-dropdown">
      <i
        className="fa-solid fa-bars dropdown"
        id="dropdownId"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      />
      <div
        className="dropdown-menu account-dropdown-menu"
        aria-labelledby="dropdownId"
      >
        <div className="accounts-title d-flex align-items-center justify-content-evenly">
          <h4>Account Manager</h4>
          <img
            src="images/user-account.png"
            className="c-pointer mt-[-2px]"
            alt="switch account"
            width={25}
          />
        </div>
        <a className="dropdown-item" href="/VisitorProfile">
          <img
            src="images/icons/user.png"
            alt=""
            width={25}
            className="mx-3"
          />{" "}
          Profile
        </a>
        <a className="dropdown-item" href="/ChannelMain">
          <img
            src="images/icons/shortcut-script-app.png"
            className="mx-3"
            alt=""
            width={25}
          />
          Cheels
        </a>
        <a className="dropdown-item" href="/FullVideo">
          <img
            src="images/icons/tv-monitor.png"
            alt=""
            className="mx-3"
            width={25}
          />
          Full Video
        </a>
        <a className="dropdown-item" href="/Gallery">
          <img
            src="images/icons/picture.png"
            alt=""
            className="mx-3"
            width={25}
          />
          Gallery
        </a>
        <a className="dropdown-item" href="/Resturants">
          <img
            src="images/icons/conveyor-belt.png"
            className="mx-3"
            alt=""
            width={25}
          />
          Resturants{" "}
        </a>
        <a className="dropdown-item" href="/Products">
          <img
            src="images/icons/user.png"
            alt=""
            className="mx-3"
            width={25}
          />
          Products
        </a>
        <a className="dropdown-item" href="/Property">
          <img
            src="images/icons/house.png"
            alt=""
            className="mx-3"
            width={25}
          />
          Properties
        </a>
        <hr className="dropdown-divider" />
        <a className="dropdown-item" href="#">
          <img
            src="images/icons/verified.png"
            alt=""
            width={25}
            className="mx-3"
          />{" "}
          Verification
        </a>
        <a className="dropdown-item" href="/Montization">
          <img
            src="images/icons/money.png"
            className="mx-3"
            alt=""
            width={25}
          />
          Monitization
        </a>
        <hr className="dropdown-divider" />
        <a className="dropdown-item" href="/MarketPlace">
          <img
            src="images/icons/convenience-store.png"
            alt=""
            width={25}
            className="mx-3"
          />{" "}
          Marketplace
        </a>
        <a className="dropdown-item" href="#">
          <img
            src="images/icons/smartphone-call.png"
            className="mx-3"
            alt=""
            width={25}
          />
          Device Setting
        </a>
        <a className="dropdown-item" href="#">
          <img
            src="images/icons/hotspot.png"
            className="mx-3"
            alt=""
            width={25}
          />
          Updates
        </a>
        <hr className="dropdown-divider mb-3" />
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
    <div className="row mb-3 buttons-group d-flex flex-row justify-content-evenly">
      <button href="#" className=" rounded-circle p-2">
        <img src="images/icons/home.png " width={18} alt="" />
      </button>
      <button href="#" className="rounded-circle p-2">
        All
      </button>
      <button href="#" className="rounded-5 p-2">
        Status <span>174</span>
      </button>
      <button href="#" className="rounded-5 p-2">
        channels <span>23</span>
      </button>
    </div>
    <div className="row buttons-group2 mb-4 d-flex flex-row justify-content-around">
      <button href="#" className="rounded-5 p-2">
        Favourites <span>12</span>
      </button>
      <button href="#" className="rounded-5 p-2">
        Status <span>174</span>
      </button>
      <button href="#" className="rounded-5 p-2">
        channels <span>23</span>
      </button>
    </div>
    <div>
      <ul className="nav flex-column">
        <li className="nav-item child">
          <h2>Recent Chats</h2>
          {/* Chat items */}
          <div className="parent">
            <div>
              {" "}
              <img
                src="images/thubnail.jpeg"
                alt="Chat 1"
                className="chat-image"
              />
            </div>
            <div>
              <span className="profile-name">Metal Exchange</span>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
            </div>
            <div className="tticon">
              <span className="time">10 min</span>
              {/* <i class="fa-solid fa-check-double"></i> */}
              <span className="number">2</span>
            </div>
          </div>
          <div className="parent">
            <div>
              {" "}
              <img
                src="images/thubnail.jpeg"
                alt="Chat 1"
                className="chat-image"
              />
            </div>
            <div>
              <span className="profile-name">Metal Exchange</span>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
            </div>
            <div className="tticon">
              <span className="time">10 min</span>
              {/* <i class="fa-solid fa-check-double"></i> */}
              <span className="number">2</span>
            </div>
          </div>
          <div className="parent">
            <div>
              {" "}
              <img
                src="images/thubnail.jpeg"
                alt="Chat 1"
                className="chat-image"
              />
            </div>
            <div>
              <span className="profile-name">Metal Exchange</span>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
            </div>
            <div className="tticon">
              <span className="time">10 min</span>
              {/* <i class="fa-solid fa-check-double"></i> */}
              <span className="number">2</span>
            </div>
          </div>
          <div className="parent">
            <div>
              {" "}
              <img
                src="images/thubnail.jpeg"
                alt="Chat 1"
                className="chat-image"
              />
            </div>
            <div>
              <span className="profile-name">Metal Exchange</span>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
            </div>
            <div className="tticon">
              <span className="time">10 min</span>
              {/* <i class="fa-solid fa-check-double"></i> */}
              <span className="number">2</span>
            </div>
          </div>
          <div className="parent">
            <div>
              {" "}
              <img
                src="images/thubnail.jpeg"
                alt="Chat 1"
                className="chat-image"
              />
            </div>
            <div>
              <span className="profile-name">Metal Exchange</span>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
            </div>
            <div className="tticon">
              <span className="time">10 min</span>
              {/* <i class="fa-solid fa-check-double"></i> */}
              <span className="number">2</span>
            </div>
          </div>
          <div className="parent">
            <div>
              {" "}
              <img
                src="images/thubnail.jpeg"
                alt="Chat 1"
                className="chat-image"
              />
            </div>
            <div>
              <span className="profile-name">Metal Exchange</span>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
            </div>
            <div className="tticon">
              <span className="time">10 min</span>
              {/* <i class="fa-solid fa-check-double"></i> */}
              <span className="number">2</span>
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
            help{" "}
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
