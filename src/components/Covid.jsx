import React from "react";

function Covid() {
  return (
    <div className="covid">
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
            <h1 class="font-weight-light">About</h1>
            <p>
              This will output covid stats.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Covid;