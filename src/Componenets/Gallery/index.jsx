import React from "react";

const Gallery = () => {
  return (
    <>
      <div class="container-fluid  mt-2">
                        <div class="container d-flex justify-content-between gallery">
                            <div class="h4">Gallery</div>
                            <a href="">
                                <button type="button" class="btn">View all</button>

                            </a>
                        </div>
                        <div class="row gallery2">
                            <div class="col-sm-3">
                                <img src="/images/g1.jpg" alt=""/>
                            </div>
                            <div class="col-sm-3">
                                <img src="/images/g2.jpg" alt=""/>
                            </div>
                            <div class="col-sm-3">
                                <img src="/images/g3.jpg" alt=""/>
                            </div>
                            <div class="col-sm-3">
                                <img src="/images/g4.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
    </>
  );
};
export default Gallery;