import React from "react";

function News() {
  return (
    <div className="news">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Top News for Today</h1>
            <p>
              This is the top news from today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;