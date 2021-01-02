import React from "react";

function About() {
  return (
    <div className="about">
      <p>  </p>
      <h1 class="font-weight-light" align = "center" >All About Us!</h1>
      <div class="container">
        <div class="row align-items-center my-5
        ">
          <div class="col-sm-4">
            <h1 class="font-weight-light">Vaibhav</h1>
            <p>
              Hi! My name is Vaibhav and I go to UC Berkeley!
            </p>
          </div>
          <div class="col-sm-4">
            <h1 class="font-weight-light">Anoushka</h1>
            <p>
              Hi! My name is Anoushka and I go to UC Berkeley!
            </p>
          </div>
          <div class="col-sm-4">
            <h1 class="font-weight-light">Joshua</h1>
            <p>
              Hi! My name is Joshua and I go to UC Berkeley!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;


// WE can use a backend api and make our thing a json list of our names and descriptions 
// and out put it like ethat which would count as 3 endpointsinstead of hard coding it. 