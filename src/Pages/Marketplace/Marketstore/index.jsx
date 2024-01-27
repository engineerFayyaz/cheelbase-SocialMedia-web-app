import React from "react";
import Header from "../../../Componenets/Header";
import '../Marketstore/Marketstore.css';

const Marketstore =() => {

    return (
        <>
        <Header/>
  <div className="search-bar ">
    <div className="search-inline justify-content-evenly align-items-center d-flex">
      <button className="market text-light ">Marketplace</button>
      <button className="all text-light">Store</button>
      <div className="dropdown-mark">
        <div
          className=" dropdown   text-light dropdown-toggle  "
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <ul
            className="dropdown-menu mb-3"
            aria-labelledby="dropdownMenuButton1"
          >
            <li className="d-flex">
              <img
                src="../images/icons/storefront.png"
                className="img-icon mt-2"
                alt=""
              />
              <a className="dropdown-item text-light" href="#">
                Store
              </a>
            </li>
            <li className="d-flex">
              <img
                src="../images/icons/lunch_dining (1).png"
                className="img-icon mt-2"
                alt=""
              />
              <a className="dropdown-item text-light" href="#">
                Food
              </a>
            </li>
            <li className="d-flex ">
              <img
                src="../images/icons/water_damage.png"
                className="img-icon mt-2"
                alt=""
              />
              <a className="dropdown-item text-light" href="#">
                Properties
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="main">
        {/* Another variation with a button */}
        <div className="input-group d-flex">
          <input
            type="text"
            className="form-control"
            placeholder="search items, categories others"
          />
          <div className="append ">
            <button
              className="btn btn-secondary d-flex search-icon "
              type="button"
            >
              <div className="faa-searchh ">
                <i className="fa fa-search " />
              </div>
              <p className="search ms-3">search</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="marketstore mt-2 d-flex">
    <div className="category">
      <div className="category-1 mt-4 ms-5">
        <button className="category-1 text-light">Category 1</button>
      </div>
      <div className="category-1  mt-1  ms-5">
        <button className="category-1 text-light">Category 1</button>
      </div>
      <div className="category-1  mt-1 ms-5">
        <button className="category-1 text-light">Category 1</button>
      </div>
      <div className="category-1 mt-1 ms-5">
        <button className="category-1 text-light">Category 1</button>
      </div>
      <div className="category-1 mt-1 ms-5">
        <button className="category-1 text-light">Category 1</button>
      </div>
      <div className="category-1 mt-1 ms-5">
        <button className="category-1 text-light">Category 1</button>
      </div>
      <div className="category-1 mt-1 ms-5">
        <button className="category-1 text-light">Category 1</button>
      </div>
      <div className="category-1  mt-1 ms-5">
        <button className="category-1 text-light">Category 1</button>
      </div>
      <div className="category-1 mt-1 ms-5">
        <button className="category-1 text-light">Category 1</button>
      </div>
      <div className="category-1  mt-1 ms-5">
        <button className="category-1 text-light">Category 1</button>
      </div>
    </div>
    <div className="sale ms-2">
      <img
        src="../images/Rectangle 5299 (1).png"
        className="img-sale"
        alt=""
      />
    </div>
  </div>
  <div className="cat-photos-1 d-flex justify-content-evenly align-items-center ">
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="card-body">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="card-body">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="card-body">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="card-body">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="card-body">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
  </div>
  <div className="cat-photos-2 d-flex justify-content-evenly align-items-center ">
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="card-body">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="card-body">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="card-body">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="card-body">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="card-body">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
  </div>
  <div className="cat-photos-3 d-flex justify-content-evenly align-items-center ">
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="card-body">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="card-body">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="card-body">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="card-body">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="card-body">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
  </div>
  <div className="cat-photos-4 d-flex justify-content-evenly align-items-center ">
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="card-body">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="card-body">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="card-body">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="card-body">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="card-body">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
  </div>
  <div className="cat-photos-5 d-flex justify-content-evenly align-items-center ">
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="card-body">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="card-body">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="card-body">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="card-body">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="card-body">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
  </div>
  <div className="abc text-center mt-5">
    <a href="/Marketfood">
      <button className="btn btn-primary">Continue to Next</button>
    </a>
  </div>


        </>
    );
}

export default Marketstore;