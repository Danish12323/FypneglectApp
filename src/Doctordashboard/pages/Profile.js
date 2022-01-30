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
    const {user}=auth;
    
    useEffect(()=>{
        Axios.get('/user/infor',{
            headers:{Authorization:token}
        }).then((response) => {
          setguardian(response.data);
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
        const [gqualification, setGqualification] = useState("");
        const [gcity, setgCity] = useState("");
        //const [profilepic, setprofilepic] = useState();

        const [gpassword, setgPassword] = useState("");
        const [newpassword, setnewPassword] = useState("");



        const [message, setmessage] = useState("");
  

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

            if(gqualification !== ""){
                obj.qualification = gqualification;
                setGqualification("");
            }



            Axios.patch("/doctor/updateDoctor", obj, {
                headers:{Authorization:token}
            }).then((response) => {
                setmessage("Updated");
                setguardian(response.data.data.updatedDoctor)
            });
        };


        const updatePassword = () =>{
            
            
                if(gpassword!=='' && newpassword!==''){
                var obj = {}; 
                obj.id = guardian._id;
                obj.password = newpassword;
                obj.oldpassword=gpassword;
                Axios.post("/doctor/reset",obj,  {
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
        <div className="container-fluid">
      <div className="container rounded bg-white" >

          <div className="row">

          <div className="col-12">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img alt="hello img" className="rounded-circle mt-5" width="150px" src={user.profilepic} />
            <span className="font-weight-bold">{guardian.name}</span>
            <span className="text-black-50">{user.email}</span><span> </span>
            <input type="file" name="profilepic"  />
            <div className="mt-2"><button  className="btn btn-primary profile-button" type="button">Update Profile picture</button></div>
            </div>

        </div>

          </div>
    <div className="row">
        
      <div className="col-md-6 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                    
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">Name</label><input  type="text" onChange= {(event) => {setgName(event.target.value)}}            placeholder= {guardian.name}  className="form-control" value={gname}/></div>
                    <div className="col-md-12"><label className="labels">Mobile Number</label><input  type="text" onChange= {(event) => {setgNumber(event.target.value)}}   className="form-control" placeholder={guardian.phonenumber} value={gnumber} /></div>
                    <div className="col-md-12"><label className="labels">Address</label><input  type="text" onChange= {(event) => {setgAddress(event.target.value)}}  className="form-control" placeholder={guardian.address} value={gaddress} /></div>
                   
                </div>
                <div className="row mt-3">
                    <div className="col-md-6"><label className="labels">Country</label><input type="text" onChange= {(event) => {setgCountry(event.target.value)}} className="form-control" placeholder= {guardian.country} value={gcountry}/></div>
                    <div className="col-md-6"><label className="labels">City</label><input  type="text" onChange= {(event) => {setgCity(event.target.value)}}  className="form-control" placeholder={guardian.city} value={gcity} /></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6"><label className="labels">Age</label><input  type="text" onChange= {(event) => {setGAge(event.target.value)}} className="form-control" placeholder={guardian.age} value={gage}  /></div>
                    <div className="col-md-6"><label className="labels">Gender</label><input  type="text" onChange= {(event) => {setGGender(event.target.value)}}   className="form-control" placeholder={guardian.gender} value={ggender}  /></div>
                </div>
                <div className="row mt-3">
                <div className="col-md-12"><label className="labels">Qualification</label><input  type="text" onChange= {(event) => {setGqualification(event.target.value)}}   className="form-control" placeholder={guardian.qualification} value={gqualification}  /></div>
                </div>
                <div className="mt-5 text-center"><button onClick={() => updateGuardian()}   className={['btn','btn-primary' ,'btn-primary' ,'profile-button',classes.profilebutton].join(' ')} type="button">Save Profile</button></div>
                <div className="mt-5 text-center"><p className="text-right">{message}</p></div>
            </div>
        </div>
        <div className="col-md-5">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center experience"><span>Reset Password</span></div><br />
                <div className="col-md-12"><label className="labels"> Old Password</label><input onChange= {(event) => {setgPassword(event.target.value)}}     type="text" className="form-control" placeholder="Old password" /></div> <br />
                <div className="col-md-12"><label className="labels"> New Password </label><input onChange= {(event) => {setnewPassword(event.target.value)}}  type="text" className="form-control" placeholder="New password" /></div>
            </div>
            <div className="mt-2"><button onClick={() => updatePassword()}  className={['btn','btn-primary' ,'btn-primary' ,'profile-button',classes.profilebutton].join(' ')} type="button">Update Password</button></div>
            <div className="mt-5 text-center"><p className="text-right"> </p></div>
        </div>
    </div>
</div>
</div>


        </Container>
    </Page>
  );
}
