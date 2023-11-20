import React from "react";

const Stories = () => {
  return (
    <>
      <div className="col-6 center-main">
        {/* /// stories main starts  */}
        <div className="container-fluid stories-main">
        <div className="stories"  style={{color:"white"}}> Your Stories Content Goes Here</div>
          <div className="stories-container">
            <div className="content" style={{margin:"5px"}}>
              <img src="/images/story.png" />
              <img src="/images/story.png" />
              <img src="/images/story.png" />
              <img src="/images/story.png" />
              <img src="/images/story.png" />


            </div>
            
          </div>
          <div className="stories-full-view">
            
 
            <div className="content">
              <div className="previous-btn">
                <img src="/images/story.png" />
              </div>
              <div className="story">
                <img src="/images/3.jpg" alt="" />
                <div className="author">Author</div>
              </div>
              <div className="next-btn">
                <img src="/images/story.png" />
              </div>
            </div>
          </div>
        </div>
        {/* stories main ends  */}
        {/* icons section start */}
        <div className="container-fluid  icon-section">
          <a href="#">
            {/* <i class="fa-regular fa-images"></i> */}
            <img src="/images/vibration.png" alt="" />
            <p>Cheels</p>
          </a>
          <a href="#">
            {" "}
            <img src="/images/video.png" alt="" />
            <p>Video</p>
          </a>
          <a href="#">
            {/* <i class="fa-regular fa-images"></i> */}
            <img src="/images/vibration.png" alt="" />
            <p>Gallery</p>
          </a>
          <a href="#">
            <img src="/images/burger.png" alt="" />
            <p>Resturants</p>
          </a>
          <a href="#">
            <img src="/images/shopping-cart.png" alt="" />
            <p>Shop</p>
          </a>
          <a href="#">
            <img src="/images/camping-tent.png" alt="" />
            <p>Properties</p>
          </a>
        </div>
        {/* icons section ends */}
        {/* channel section starts  */}
        <div className="container-fluid channels-section">
          <div className="container d-flex justify-content-between align-items-center find-Channels">
            <div className="h4 main-title">Find Channels</div>
            <button type="button" className="btn view-btn">
              View all
            </button>
          </div>
          <div className="row find-Channels-columns">
            <div className="col-sm-4 column1">
              <img
                src="/images/WhatsApp Image 2023-11-07 at 12.20.48 PM.jpeg"
                className="rounded-circle"
                alt="image"
              />
              <div className="separator">
                <p>1 millions View</p>
                <button className="btn  subscribe-btn">Subscribe</button>
              </div>
            </div>
            <div className="col-sm-4 column1">
              <img
                src="/images/WhatsApp Image 2023-11-07 at 12.20.48 PM.jpeg"
                className="rounded-circle"
                alt="image"
              />
              <div className="separator">
                <p>1 millions View</p>
                <button className="btn subscribe-btn">Subscribe</button>
              </div>
            </div>
            <div className="col-sm-4 column1">
              <img
                src="/images/WhatsApp Image 2023-11-07 at 12.20.48 PM.jpeg"
                className="rounded-circle"
                alt="image"
              />
              <div className="separator">
                <p>1 millions View</p>
                <button className="btn subscribe-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        {/* find-Channels ends */}
        {/* products section start */}
        <div className="container-fluid products section">
          <div className="container d-flex justify-content-end align-items-center ">
            <button type="button" className="btn view-btn">
              View all
            </button>
          </div>
          <div className="row products-cards-columns">
            <div className="col-md-4 product1">
              <div className="card  product-card">
                <img
                  src="/images/product.jpeg "
                  className="card-img-top"
                  alt="Product 1"
                />
                <div className="card-icons">
                  <i className="fab fa-whatsapp" />
                  <i className="fas fa-shopping-cart" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Product 1</h5>
                  <div className="d-flex justify-content-between">
                    <p className="card-text">$20.00</p>
                    <a href="#" className="view-more">
                      more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 product1">
              <div className="card  product-card">
                <img
                  src="/images/product.jpeg"
                  className="card-img-top"
                  alt="Product 2"
                />
                <div className="card-icons">
                  <i className="fab fa-whatsapp" />
                  <i className="fas fa-shopping-cart" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Product 1</h5>
                  <div className="d-flex justify-content-between">
                    <p className="card-text">$20.00</p>
                    <a href="#" className="view-more">
                      more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 product1">
              <div className="card  product-card">
                <img
                  src="/images/product.jpeg"
                  className="card-img-top"
                  alt="Product 3"
                />
                <div className="card-icons">
                  <i className="fab fa-whatsapp" />
                  <i className="fas fa-shopping-cart" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Product 3</h5>
                  <div className="d-flex justify-content-between">
                    <p className="card-text">$20.00</p>
                    <a href="#" className="view-more">
                      more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* product section end  */}
        {/* section ad start */}
        <div className="container-fluid   mainads " id="adsvideo">
          <div className="title d-flex justify-content-between">
            <div className="h1">Sponsored ad</div>
            <button
              type="button"
              onclick="document.getElementById('adsvideo').style.display='none'"
              className="btn"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          <div className="adsvideo">
            <iframe
              width="100%"
              height={320}
              src="https://www.youtube.com/embed/o1fWvomcXt8?si=Hhf6epxhwFAZu__y"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
            />
          </div>
        </div>
        {/* section ad ends  */}
        {/* section cheel starts */}
        <div className="container-fluid ">
          <div className="container d-flex justify-content-between topcheel">
            <div className="h4">Top Cheels</div>
            <a href="">
              <button type="button" className="btn">
                View all
              </button>
            </a>
          </div>
          <div className="row topcheel-columns">
            <div className="col-sm-3">
              <img src="/images/col1.jpg" className="rounded" alt="image" />
              <div className="p">Lorem ipsum, dolor</div>
              <p>4k View 2Months ago</p>
            </div>
            <div className="col-sm-3">
              <img src="/images/col2.jpg" className="rounded" alt="image" />
              <div className="p">Lorem ipsum, dolor</div>
              <p>1 millions View</p>
            </div>
            <div className="col-sm-3">
              <img src="/images/col3.jpg" className="rounded" alt="image" />
              <div className="p">Lorem ipsum, dolor</div>
              <p>1 millions View</p>
            </div>
            <div className="col-sm-3">
              <img src="/images/col4.jpg" className="rounded" alt="image" />
              <div className="p">Lorem ipsum, dolor</div>
              <p>1 millions View</p>
            </div>
          </div>
        </div>
        {/* section cheel end */}
        {/* section order start */}
        <div className="container-fluid ">
          <div className="container d-flex justify-content-between order">
            <div className="h4">Order Food</div>
            <a href="">
              <button type="button" className="btn1">
                View all
              </button>
            </a>
          </div>
          <div className="row order-columns">
            <div className="col-sm-4">
              <img
                src="/images/order food.jpg"
                width="110px"
                className="rounded-circle"
                alt="image"
              />
              <div className="d-flex justify-content-between">
                <p>
                  <b>$40.0</b>
                </p>
                <p>
                  <i className="fa-solid fa-star" />
                  <b>5.0</b>
                </p>
              </div>
              <div className="h4">Healty Salad</div>
              <a href="">
                <button type="button" className="btn">
                  Order Now <i className="fa-solid fa-arrow-right" />
                </button>
              </a>
            </div>
            <div className="col-sm-4">
              <img
                src="/images/order food.jpg"
                width="110px"
                className="rounded-circle"
                alt="image"
              />
              <div className="d-flex justify-content-between">
                <p>
                  <b>$40.0</b>
                </p>
                <p>
                  <i className="fa-solid fa-star" />
                  <b>5.0</b>
                </p>
              </div>
              <div className="h4">Healty Salad</div>
              <a href="">
                <button type="button" className="btn">
                  Order Now <i className="fa-solid fa-arrow-right" />
                </button>
              </a>
            </div>
            <div className="col-sm-4">
              <img
                src="/images/order food.jpg"
                width="110px"
                className="rounded-circle"
                alt="image"
              />
              <div className="d-flex justify-content-between">
                <p>
                  <b>$40.0</b>
                </p>
                <p>
                  <i className="fa-solid fa-star" />
                  <b>5.0</b>
                </p>
              </div>
              <div className="h4">Healty Salad</div>
              <a href="">
                <button type="button" className="btn">
                  Order Now <i className="fa-solid fa-arrow-right" />
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* section order end */}
      </div>
    </>
  );
};
export default Stories;
