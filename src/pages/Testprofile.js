import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Testprofile  () {
    return (
<div className="container-fluid" style={{background: '#f5f6fa'}}>
  <div className="row gutters">
    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
      <div className="card h-100"
      
      style={{ background: '#ffffff',

        borderRadius: '5px',
        border: '0',
        marginBottom:'1rem' }}
      >
        <div className="card-body">
          <div className="account-settings">
            <div className="user-profile" style={{

margin: '0 0 1rem 0',
paddingBottom: '1rem',
textAlign: 'center'

            }}>
              <div className="user-avatar text-center ml-auto mr-auto" style={{margin: '0 0 1rem 0'}}>
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin"
                className='mx-auto'
                
                />
              </div>
              <h5 className="user-name"
              style={{margin: '0 0 0.5rem 0'}}
              
              >Yuki Hayashi</h5>
              <h6 className="user-email"
              style={{ margin: '0',
                fontSize: '0.8rem',
                fontWeight: '400',
                color: '#9fa8b9'}}
              >yuki@Maxwell.com</h6>
            </div>
            <div className="about"
            
            style={{  margin: '2rem 0 0 0',
                textAlign: 'center'}}
            >
              <h5 style={{ margin: '0 0 15px 0',
    color: '#007ae1'}}>About</h5>
              <p style={{fontSize: '0.825rem'}}>I'm Yuki. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
      <div className="card h-100"
      
      
      style={{ background: '#ffffff',

        borderRadius: '5px',
        border: '0',
        marginBottom:'1rem' }}
      >
        <div className="card-body">
          <div className="row gutters mt-2">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h6 className="mb-2 text-primary">Personal Details</h6>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group"
              
              >
                <label htmlFor="fullName" className='mt-2'>Full Name</label>
                <input type="text" className="form-control mt-2" id="fullName" placeholder="Enter full name"
                
                
              style={{border: '1px solid #cfd1d8',
              borderRadius: '2px',
              fontSize: '.825rem',
              background: '#ffffff',
              color: '#2e323c'}}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="eMail" className='mt-2'>Email</label>
                <input type="email" className="form-control mt-2" id="eMail" placeholder="Enter email ID"
                
                
              style={{border: '1px solid #cfd1d8',
              borderRadius: '2px',
              fontSize: '.825rem',
              background: '#ffffff',
              color: '#2e323c'}}
                
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="phone" className='mt-2'>Phone</label>
                <input type="text" className="form-control mt-2" id="phone" placeholder="Enter phone number"
                
              style={{border: '1px solid #cfd1d8',
              borderRadius: '2px',
              fontSize: '.825rem',
              background: '#ffffff',
              color: '#2e323c'}}
                
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="website" className='mt-2'>Website URL</label>
                <input type="url" className="form-control mt-2" id="website" placeholder="Website url"
                
                
              style={{border: '1px solid #cfd1d8',
              borderRadius: '2px',
              fontSize: '.825rem',
              background: '#ffffff',
              color: '#2e323c'}}
                
                />
              </div>
            </div>
          </div>
          <div className="row gutters mt-4">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h6 className="mt-3 mb-2 text-primary">Address</h6>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="Street" className='mt-2'>Street</label>
                <input type="name" className="form-control mt-2" id="Street" placeholder="Enter Street" 
                
                
              style={{border: '1px solid #cfd1d8',
              borderRadius: '2px',
              fontSize: '.825rem',
              background: '#ffffff',
              color: '#2e323c'}}
                
                
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="ciTy" className='mt-2'>City</label>
                <input type="name" className="form-control mt-2" id="ciTy" placeholder="Enter City"
                
                
              style={{border: '1px solid #cfd1d8',
              borderRadius: '2px',
              fontSize: '.825rem',
              background: '#ffffff',
              color: '#2e323c'}}
                
                
                
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="sTate" className='mt-2'>State</label>
                <input type="text" className="form-control mt-2" id="sTate" placeholder="Enter State" 
                
                
              style={{border: '1px solid #cfd1d8',
              borderRadius: '2px',
              fontSize: '.825rem',
              background: '#ffffff',
              color: '#2e323c'}}
                
                
                
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="zIp" className='mt-2'>Zip Code</label>
                <input type="text" className="form-control mt-2" id="zIp" placeholder="Zip Code"
                
                
              style={{border: '1px solid #cfd1d8',
              borderRadius: '2px',
              fontSize: '.825rem',
              background: '#ffffff',
              color: '#2e323c'}}
                
                
                
                />
              </div>
            </div>
          </div>
          <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="text-right mt-4">
                <button type="button" id="submit" name="submit" className="btn btn-secondary">Cancel</button>
                &nbsp;  &nbsp;
                <button type="button" id="submit" name="submit" className="btn btn-primary">Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

