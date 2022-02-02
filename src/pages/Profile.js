import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// material
import { Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {useSelector} from 'react-redux';
import Axios from 'axios';
import { createUseStyles } from 'react-jss';
// ----------------------------------------------------------------------




const useStyles = createUseStyles({
   


profilebutton: {
    background: 'rgb(99, 39, 120)',
    boxShadow: 'none',
    border: 'none'
}
  })




export default function Profile() {
    const classes = useStyles();

    const auth=useSelector(state=>state.auth);
    const token=useSelector(state=>state.token)
    // eslint-disable-next-line 
    const {user}=auth;
    const [ppic,setppic]=useState('');
    useEffect(()=>{
        Axios.get('/user/infor',{
            headers:{Authorization:token}
        }).then((response) => {
          setguardian(response.data);
          setprofilepic(response.data.profilepic);
          setppic(' http://localhost:5000//'+response.data.profilepic)
          //console.log(response.data)
        });
        },[token]);


        const [guardian, setguardian] = useState([]);
        const [gname, setgName] = useState("");
        const [gnumber, setgNumber] = useState("");
        const [gaddress, setgAddress] = useState("");
        const [ggender, setGGender] = useState("");
        const [gage, setGAge] = useState("");
        const [gcountry, setgCountry] = useState("");
        const [gcity, setgCity] = useState("");
        // eslint-disable-next-line
        const [profilepic,setprofilepic]=useState("");
        //const [profilepic, setprofilepic] = useState();

        const [gpassword, setgPassword] = useState("");
        const [newpassword, setnewPassword] = useState("");



        const [message, setmessage] = useState("");
  

        const [pimage,setpimage]=useState('');
        const sendImage=(event)=>{
    const data=new FormData();
    data.append("myImage",pimage)
    console.log(data)
    Axios.post('/guardian/updateprofileimage',data,
    
    {
        headers:{Authorization:token}
    }
    )
    .then(res=>{console.log(res.data.filepath);
    
        Axios.get('/user/infor',{
            headers:{Authorization:token}
        }).then(res=>{setguardian(res.data)
        
            setppic(' http://localhost:5000//'+res.data.profilepic)
        
        }
        

        
        )
        .catch(err=>console.log(err))
    
    
    
    }
    
    )
    .catch(err=>console.log(err))
    
        }











        const updateGuardian = () =>{
            var obj = {}; 
            obj.id = guardian._id;
            if(gname !== ""){
                obj.name = gname;   
                setgName("");
            }
            if(gnumber !== ""){
                obj.phonenumber = gnumber;
                setgNumber("");
            }
            if(gaddress !== ""){
                obj.address = gaddress;
                setgAddress("");
            }
            if(ggender !== ""){
                obj.gender = ggender; 
                setGGender("");
            }
            
            if(gcountry !== ""){
                obj.country = gcountry;
                setgCountry("");
            }
            if(gage !== ""){
                obj.age = gage;
                setGAge("");
            }
            if(gcity !== ""){
                obj.city = gcity;
                setgCity("");
            }
            Axios.patch("/guardian/updateGuardian", obj, {
                headers:{Authorization:token}
            }).then((response) => {
                setmessage("Updated");
                setguardian(response.data.data.updatedguardian)
            });
        };


        const updatePassword = () =>{
            
            
                if(gpassword!=='' && newpassword!==''){
                var obj = {}; 
                obj.id = guardian._id;
                obj.password = newpassword;
                obj.oldpassword=gpassword;
                Axios.post("/guardian/reset",obj,  {
                    headers:{Authorization:token}
                }).then((response) => {
                    setmessage(" Password Updated");
                    console.log(response.data)
                    //console.log(response.data)
                }
                
                
                );

            
        }
        }
    











  return (
    <Page title="Dashboard: Profile | Minimal-UI">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Welcome! {guardian.name}
        </Typography>

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
                <img src={ppic} alt="Maxwell Admin"
                className='mx-auto'
                style={{ width: '200px',
                    height: '200px',
                borderRadius:'100px'}}
                
                />
              </div>






              
              <h5 className="user-name"
              style={{margin: '0 0 0.5rem 0'}}
              
              >{guardian.name}</h5>
              <h6 className="user-email"
              style={{ margin: '0',
                fontSize: '0.8rem',
                fontWeight: '400',
                color: '#9fa8b9'}}
              >{guardian.email}</h6>
            </div>

<div className='text-center'>


            <input type="file" name="profilepic"  className=''
            
            
            onChange={event =>{
                const file=event.target.files[0];
                setpimage(file);
            }}
            />
            </div>
                        <div className="mt-2 text-center"><button  className={['btn','btn-primary' ,'btn-primary' ,'profile-button',classes.profilebutton].join(' ')} type="button"
            
            
            onClick={sendImage}
            
            >Update Profile picture</button></div>




            <div className="about"
            
            style={{  margin: '2rem 0 0 0',
                textAlign: 'center'}}
            >
              <h5 style={{ margin: '0 0 15px 0',
    color: '#007ae1'}}>About</h5>
              <p style={{fontSize: '0.825rem'}}>I'm {guardian.name} and my email id is {guardian.email}. You can contact me on my email</p>
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
                <input type="text" className="form-control mt-2" id="fullName"
                    onChange= {(event) => {setgName(event.target.value)}}            placeholder= {guardian.name}
                    value={gname}
                
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
                <input type="text" className="form-control mt-2" id="phone" 
                placeholder={guardian.phonenumber} value={gnumber}
                
                 onChange= {(event) => {setgNumber(event.target.value)}}

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
                <label htmlFor="website" className='mt-2'>Age</label>
                <input type="text" className="form-control mt-2" id="website"
                placeholder={guardian.age} value={gage} 
                onChange= {(event) => {setGAge(event.target.value)}}
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
                <label htmlFor="gender" className='mt-2'>Gender</label>
                <input type="text" className="form-control mt-2" id="gender" 
                placeholder={guardian.gender} value={ggender} 
                onChange= {(event) => {setGGender(event.target.value)}} 
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
                <label htmlFor="Street" className='mt-2'>Adress</label>
                <input type="text" className="form-control mt-2" id="Street" 
                onChange= {(event) => {setgAddress(event.target.value)}}
                placeholder={guardian.address} value={gaddress}

                
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
                <input type="name" className="form-control mt-2" id="ciTy"
                onChange= {(event) => {setgCity(event.target.value)}}
                placeholder={guardian.city} value={gcity}
                
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
                <label htmlFor="sTate" className='mt-2'>Country</label>
                <input type="text" className="form-control mt-2" id="sTate" 
                 onChange= {(event) => {setgCountry(event.target.value)}}
                placeholder= {guardian.country} value={gcountry}

                
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

                <button type="button" id="submit" name="submit" className="btn btn-primary"
                onClick={() => updateGuardian()} 
                
                
                >Update</button>
              </div>
            </div>
          </div>
          <div className="mt-5 text-center"><p>{message}</p></div>
          <div className="row gutters">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="oldpass" className='mt-2'>Old Password</label>
                <input type="text" className="form-control mt-2" id="oldpass" 
                placeholder="Old password" 
                onChange= {(event) => {setgPassword(event.target.value)}}

                
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
                <label htmlFor="newpass" className='mt-2'>New Password</label>
                <input type="password" className="form-control mt-2" id="newpass" 
                placeholder="New password" 
                onChange= {(event) => {setnewPassword(event.target.value)}}
                
              style={{border: '1px solid #cfd1d8',
              borderRadius: '2px',
              fontSize: '.825rem',
              background: '#ffffff',
              color: '#2e323c'}}
                
                
                
                />
              </div>

              <div className="mt-5 text-center"><p >{message}</p></div>

            </div>




          </div>


          <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="text-right mt-4">

                <button type="button" id="updatepassword" name="submit" className="btn btn-primary"
                onClick={() => updatePassword()}
                
                >Update Password</button>
              </div>
            </div>


          </div>


        </div>
      </div>
    </div>
  </div>
</div>


      </Container>
    </Page>
  );
}
