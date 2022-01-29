import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { showErrorMessage,showSuccessMessage } from '../../../utils/Notification';
import "bootstrap/dist/css/bootstrap.min.css";
function ActivationEmail  () {
    const {activation_token}=useParams()
    const [err,setErr]=useState('');
    const [success,setSuccess]=useState('')
useEffect(
  ()=>{
    if(activation_token){
      const activationEmail=async()=>{
        try {
const res=await axios.post('/guardian/activation',{activation_token})
setSuccess(res.data.msg)
          
        } catch (err) {
          err.response.data.msg && setErr(err.response.data.msg)
        }
      }
      activationEmail()
      
    }
    
  },[activation_token]
)










  return (
    <div style={{marginTop:'200px'}}>  
      
 
      <div>
        {err && showErrorMessage(err)}
{success && showSuccessMessage(success)}
        
      </div>
    </div> 
  );
}

export default ActivationEmail;            