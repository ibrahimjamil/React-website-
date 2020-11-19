import React from 'react'
import web from '../images/images.jpg'
const  Common=(props)=> {
  return (
    <div>
    <section id="header" className="info header-pic">
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-11 mx-auto">
          <div className="row">
            <div className="col-md-6 pt-lg-0 order-2 order-lg-1">
                <h1>{props.name}</h1>
                <h1><strong className="brand_name">IBRAHIM</strong></h1>
                <h5 className="my-3">we will cover your all printing demands</h5>
                <div className="mt-3 btnclass">
                  <a href="" className="place-order">{props.btn}</a>
                </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 header-img  img">
                <img src={web} className="image-fluid animated" alt="home img"/>
            </div>
          </div>
        </div>
    </div>
  </div>
</section>
<footer className="footer">
  <h4>copyright by APPA 2020&copy;</h4>
</footer>
    </div>
  )
}

export default Common
