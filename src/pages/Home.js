import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bgimage from '../Images/showcase.svg'
import neglectimage from '../Images/Visual-neglect-015.jpg'
import communitypic from "../Images/community_small.jpg"
import { Link } from "react-router-dom";
import Navbar from './Navbar';
// import Homestyle from './Homepage.module.css'
// import Nav from '../Navbar/Nav'
function Home(){
    
    return(
    <div style={{overflowX:'hidden'}}>
<Navbar />
<div className="mt-3">
<section
      className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start mt-4"
    >
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>Platform for<span className="text-warning"> Spatial Neglect</span></h1>
            <p className="lead my-4">
              We provide a Platform for Spatial Neglect Patient and Doctor to detect and rehabilitate disorder
            </p>
            <Link
              className="btn btn-primary btn-lg"
              
              to='/login'
            >
              Lets Get Started
            </Link>
          </div>
          <img
            className="img-fluid w-50 d-none d-sm-block"
            src={bgimage}
            alt=""
          />
        </div>
      </div>
    </section>

    <section id="learn" className="p-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md">
            <img src={neglectimage} className="img-fluid" alt="" />
          </div>
          <div className="col-md p-5">
            <h2>You know what is Spatial Neglect?</h2>
            <p className="lead">
            Spatial neglect is a behavioral syndrome occurring after brain injury. Spatial neglect is defined as pathologically asymmetric spatial behavior, caused by a brain lesion and resulting in disability
            </p>
            <p style={{color: '#212529'}}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              reiciendis eius autem eveniet mollitia, at asperiores suscipit
              quae similique laboriosam iste minus placeat odit velit quos,
              nulla architecto amet voluptates?
            </p>
            <Link  className="btn btn-dark mt-3" to='/about'>
              <i className="bi bi-chevron-right"></i> Read More
            </Link>
          </div>
        </div>
      </div>
    </section>



    
    <section className="p-5">
      <div className="container">
        <div className="row text-center g-4">
        <h2 className="text-center mb-4">What we Offers?</h2>
          <div className="col-md">
            
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-laptop"></i>
                </div>
                <h3 className="card-title mb-3">Neglect Detector</h3>
                <p className="card-text">
                  Neglect Detector is Free tool for Spatial neglect detection. Guardians need to let patient to perform detection activity 
                </p>
                <Link className="btn btn-primary" to='/detector'>Lets Try</Link>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card bg-secondary text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-person-square"></i>
                </div>
                <h3 className="card-title mb-3">Neglect Rehabilitator</h3>
                <p className="card-text">
                  Neglect Rehabilitator is rehabilitation platform where performance and improvement of Patient will be measured
                </p>
                <a href="https://www.cricbuzz.com/" className="btn btn-dark">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-people"></i>
                </div>
                <h3 className="card-title mb-3">Graphical Analysis</h3>
                <p className="card-text">
                  Graphical analysis allows doctor to easily keep track of patient improvement and helps in Decision making.
                </p>
                <Link className="btn btn-primary" to='/detector'>Lets Try</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
<section>


  
</section>


    <section id="learn" className="p-5 bg-dark text-light">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md p-5">
            <h2>Need of Neglect Community? &#129300;</h2>
            <p className="lead">
              Neglect App is community builder for Spatial Neglect. It is providing detection and rehabilitation tools at one place for Doctors and Patients.
            </p>
            <p>
              Expert doctors are available here. Guardians just need to send request for rehabilitation after patient neglect detection. Appointment and rehabilitation process will continuously monitor patient and will make easy for doctor to keep track of improvements.
            </p>
            <a href="https://www.webmd.com/" className="btn btn-light mt-3">
              <i className="bi bi-chevron-right"></i> Read More
            </a>
          </div>
          <div className="col-md">
            <img src={communitypic} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section id="instructors" className="p-5 bg-primary">
      <div className="container">
        <h2 className="text-center text-white display-4">Top Reviews</h2>
        <p className="lead text-center text-white mb-5">
          We always try to provide best services to Doctors and patient and listen their queries.
        </p>
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/11.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                />
                <h3 className="card-title mb-3">John Doe</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                </p>
                <Link className='btn-secondary p-2 rounded-3 text-decoration-none' to='/review'>Read More</Link>
                
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/11.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                />
                <h3 className="card-title mb-3">Jane Doe</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                </p>
                <Link className='btn-secondary p-2 rounded-3 text-decoration-none' to='/review'>Read More</Link>
                
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                />
                <h3 className="card-title mb-3">Steve Smith</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                </p>
                <Link className='btn-secondary p-2 rounded-3 text-decoration-none' to='/review'>Read More</Link>
                
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/12.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                />
                <h3 className="card-title mb-3">Sara Smith</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                </p>
                <Link className='btn-secondary p-2 rounded-3 text-decoration-none' to='/review'>Read More</Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>











    <section id="questions" className="p-5">
      <div className="container">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <div className="accordion accordion-flush" id="questions">
          
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-one"
              >
                Where exactly are you located?
              </button>
            </h2>
            <div
              id="question-one"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                beatae fuga animi distinctio perspiciatis adipisci velit maiores
                totam tempora accusamus modi explicabo accusantium consequatur,
                praesentium rem quisquam molestias at quos vero. Officiis ad
                velit doloremque at. Dignissimos praesentium necessitatibus
                natus corrupti cum consequatur aliquam! Minima molestias iure
                quam distinctio velit.
              </div>
            </div>
          </div>
          
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-two"
              >
                How much does it cost to attend?
              </button>
            </h2>
            <div
              id="question-two"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                beatae fuga animi distinctio perspiciatis adipisci velit maiores
                totam tempora accusamus modi explicabo accusantium consequatur,
                praesentium rem quisquam molestias at quos vero. Officiis ad
                velit doloremque at. Dignissimos praesentium necessitatibus
                natus corrupti cum consequatur aliquam! Minima molestias iure
                quam distinctio velit.
              </div>
            </div>
          </div>
          
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-three"
              >
                What do I need to Know?
              </button>
            </h2>
            <div
              id="question-three"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                beatae fuga animi distinctio perspiciatis adipisci velit maiores
                totam tempora accusamus modi explicabo accusantium consequatur,
                praesentium rem quisquam molestias at quos vero. Officiis ad
                velit doloremque at. Dignissimos praesentium necessitatibus
                natus corrupti cum consequatur aliquam! Minima molestias iure
                quam distinctio velit.
              </div>
            </div>
          </div>
          
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-four"
              >
                How Do I sign up?
              </button>
            </h2>
            <div
              id="question-four"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                beatae fuga animi distinctio perspiciatis adipisci velit maiores
                totam tempora accusamus modi explicabo accusantium consequatur,
                praesentium rem quisquam molestias at quos vero. Officiis ad
                velit doloremque at. Dignissimos praesentium necessitatibus
                natus corrupti cum consequatur aliquam! Minima molestias iure
                quam distinctio velit.
              </div>
            </div>
          </div>
          
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-five"
              >
                Do you help me find a job?
              </button>
            </h2>
            <div
              id="question-five"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                beatae fuga animi distinctio perspiciatis adipisci velit maiores
                totam tempora accusamus modi explicabo accusantium consequatur,
                praesentium rem quisquam molestias at quos vero. Officiis ad
                velit doloremque at. Dignissimos praesentium necessitatibus
                natus corrupti cum consequatur aliquam! Minima molestias iure
                quam distinctio velit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <div className="d-flex flex-column h-100" style={{background: '#212529'}}>



<footer className="w-100 py-4 flex-shrink-0">
    <div className="container py-4">
        <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
                <h5 className="h1 text-white">FB.</h5>
                <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a className="text-primary" href="https://www.cricbuzz.com/">NeglectApp.com</a></p>
            </div>
            <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3">Quick links</h5>
                <ul className="list-unstyled text-muted">
                    <li><Link to='/' className="text-decoration-none">Home</Link></li>
                    <li><Link to='/about' className="text-decoration-none">About</Link></li>
                    <li><Link to='/login' className="text-decoration-none">Get started</Link></li>
                    <li><Link to='/' className="text-decoration-none">FAQ</Link></li>
                </ul>
            </div>
            <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3">Quick links</h5>
                <ul className="list-unstyled text-muted">
                <li><Link to='/' className="text-decoration-none">Home</Link></li>
                    <li><Link to='/about' className="text-decoration-none">About</Link></li>
                    <li><Link to='/login' className="text-decoration-none">Get started</Link></li>
                    <li><Link to='/' className="text-decoration-none">FAQ</Link></li>
                </ul>
            </div>
            <div className="col-lg-4 col-md-6">
                <h5 className="text-white mb-3">Newsletter</h5>
                <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                <form >
                    <div className="input-group mb-3">
                        <input className="form-control" type="text" placeholder="Recipient's username" />
                        <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i></button>
                    </div>
                    
                </form>
            </div>
        </div>
        
    </div>
</footer>
</div>















</div>



    </div>);
  }
  export default Home