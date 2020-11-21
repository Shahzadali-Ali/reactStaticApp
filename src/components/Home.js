import React from 'react';
 
const home = () => {
    return (
    	<>
 
<div id="demo" class="carousel slide" data-ride="carousel">

  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.w3schools.com/bootstrap4/la.jpg" alt="Los Angeles"/>
    </div>
    <div class="carousel-item">
      <img src="https://www.w3schools.com/bootstrap4/chicago.jpg" alt="Chicago"/>
    </div>
    <div class="carousel-item">
      <img src="https://www.w3schools.com/bootstrap4/ny.jpg" alt="New York"/>
    </div>
  </div>

 
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>

</div>

<section class="py-md-5 py-3">
<div class="container">
<div class="row">
<div class="col-lg-4">
<div class="card text-center shadow">
  <img class="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar1.png" alt="Card image"/>
  <div class="card-body">
    <h4 class="card-title">John Doe</h4>
    <p class="card-text">Some example text.</p>
    <a href="#" class="btn btn-primary">See Profile</a>
  </div>
</div>
</div>

<div class="col-lg-4">
<div class="card text-center shadow">
  <img class="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar1.png" alt="Card image"/>
  <div class="card-body">
    <h4 class="card-title">John Doe</h4>
    <p class="card-text">Some example text.</p>
    <a href="#" class="btn btn-primary">See Profile</a>
  </div>
</div>
</div>

<div class="col-lg-4">
<div class="card text-center shadow">
  <img class="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar1.png" alt="Card image"/>
  <div class="card-body">
    <h4 class="card-title">John Doe</h4>
    <p class="card-text">Some example text.</p>
    <a href="#" class="btn btn-primary">See Profile</a>
  </div>
  </div>
</div>
</div>
</div>

</section>
</>
    );
}
 
export default home;