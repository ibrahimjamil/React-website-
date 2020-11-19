import React from 'react'
import {NavLink} from 'react-router-dom';
import web from '../images/images.jpg'
const Service=()=>{
  return (
    <div>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-11 mx-auto center">
            <h1>Services</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-11 mx-auto">
          <div class="container">
          <div class="row">
            <div class="col-sm">
            <div class="card" style={{width:"25rem"}}>
            <img class="card-img-top" src={web} alt="Card cap"/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <NavLink to="#" class="btn btn-primary">Go somewhere</NavLink>
            </div>
          </div>
            </div>
            <div class="col-sm">
            <div class="card" style={{width:"25rem"}}>
            <img class="card-img-top" src={web} alt="Card cap"/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <NavLink to="#" class="btn btn-primary">Go somewhere</NavLink>
            </div>
          </div>
            </div>
            <div class="col-sm">
            <div class="card" style={{width:"25rem"}}>
            <img class="card-img-top" src={web} alt="Card cap"/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <NavLink to="#" class="btn btn-primary">Go somewhere</NavLink>
            </div>
          </div>
            </div>
          </div>
        </div>  
        <div class="container">
          <div class="row">
            <div class="col-sm">
            <div class="card" style={{width:"25rem"}}>
            <img class="card-img-top" src={web} alt="Card cap"/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <NavLink to="#" class="btn btn-primary">Go somewhere</NavLink>
            </div>
          </div>
            </div>
            <div class="col-sm">
            <div class="card" style={{width:"25rem"}}>
            <img class="card-img-top" src={web} alt="Card cap"/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <NavLink to="#" class="btn btn-primary">Go somewhere</NavLink>
            </div>
          </div>
            </div>
            <div class="col-sm">
            <div class="card" style={{width:"25rem"}}>
            <img class="card-img-top" src={web} alt="Card cap"/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <NavLink to="#" class="btn btn-primary">Go somewhere</NavLink>
            </div>
          </div>
            </div>
          </div>
        </div>  
          </div>
          </div>
        </div>
        <footer className="footer">
          <h4>copyright by APPA 2020&copy;</h4>
        </footer>
      </div>
  )
}

export default Service;
