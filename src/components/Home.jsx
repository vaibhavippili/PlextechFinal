import React from "react";

function Home() {
  return (
    //document.body.style.backgroundColor = "powderblue",
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7" >
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://plextech.berkeley.edu/images/PTlogo.png"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h2  >
              Hello, welcome to your personal dashboard!
            </h2 >
            <h2  class="font-weight-light">
              This is your space. We hope it makes your browser experience simpler.
            </h2>
            
          </div>
        </div>
      </div>
    </div>
  );
}


export default Home;