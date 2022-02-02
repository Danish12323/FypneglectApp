import React,{useEffect,useState} from 'react';
import { Container, Typography } from '@mui/material';
import {useSelector} from 'react-redux';
import moment from 'moment'
// components
import Page from '../components/Page';
import Axios from 'axios'
function Review() {
    const auth=useSelector(state=>state.auth);
    const token=useSelector(state=>state.token)
    const {user}=auth;

    const [subject,setsubject]=useState('');
    const [comment,setcomment]=useState('')

    const [message,setmessage]=useState('')
    const [reviews,setreviews]=useState([]);
    const [reply,setreply]=useState('');

    useEffect(()=>{
        var route=''
        if(user.role===1){
        route='/guardian/review'
        
        }   
        else if(user.role===2){
            route='/doctor/review'
        }
        Axios.get(route,{
                    headers:{Authorization:token}
                }).then((response) => {
                  setreviews(response.data.reviews);
                  //console.log(response.data.reviews[0]);
                  console.log(response.data.reviews)
        
                });
                },
                // eslint-disable-next-line 
                [token,user.role]);
        

        const handleReview=()=>{
            if(!user.role){
                setmessage('Login first');
                return
            }
            if(subject !=='' && comment!==''){
            //console.log('hello')
            var obj={}
            obj.userid=user._id;
            obj.usertype='';
            if(user.role===1){
            obj.usertype='guardian';
            }
            else{
                obj.usertype='doctor'
            }
            obj.name=user.name;
            obj.subject=subject;
            obj.comment=comment;
            //console.log(obj)
            
            
            
            var route='';
            if(user.role===1){
                route='/guardian/review'
            }
            else if(user.role===2){
                route='/doctor/review';
            }
            Axios.post(route,obj,{
                headers:{Authorization:token}
            }).then((response) => {
              //console.log(response.data);
              //console.log(response.data)
              setmessage('Review added')
              getAllreview();
            });
            
            }
            else{
                setmessage('fill all fields plz');
            }
            
            }
            




            const getAllreview=()=>{
                var route=''
            if(user.role===1){
            route='/guardian/review'
            
            }   
            else if(user.role===2){
                route='/doctor/review'
            }
            Axios.get(route,{
                        headers:{Authorization:token}
                    }).then((response) => {
                      setreviews(response.data.reviews);
                      //console.log(response.data.reviews[0]);
                      //console.log(response.data)
            
                    });
            
            }
            



            const handleReply=(...args)=>{
                console.log(args[0])
                    if(!user.role){
                        setmessage('Login first');
                        return
                    }
                    var obj={};
                    obj.reply=reply;
                    obj.usertype='';
                    if(user.role===1){
                        obj.usertype='guardian';
                    }
                    else if(user.role===2){
                        obj.usertype='doctor'
                    }
                    
                    
                var route='';
                
                if(user.role===1){
                route='/guardian/'+user._id+'/review/'+args[0]
                }
                else if(user.role===2){
                    route='/doctor/'+user._id+'/review/'+args[0]
                }
                
                
                Axios.patch(route,obj,{
                    headers:{Authorization:token}
                }).then((response) => {
                  //console.log(response.data);
                  //console.log(response.data)
                  //console.log(response.data)
                  setmessage('Reply added')
                  getAllreview();
                });
                
                }
                
const handleDeleteReply=(...args)=>{
    //console.log(args[0])
    
    
    var route='';
    if(user.role===1){
        route='/guardian/review/'+args[0]+'/reply/'+args[1];
    }
    else if(user.role===2){
        route='/doctor/review/'+args[0]+'/reply/'+args[1];
    }
    Axios.delete(route,{
        headers:{Authorization:token}
    }).then((response) => {
      //console.log(response.data);
      //console.log(response.data)
      //console.log(response.data)
      setmessage('Reply deleted')
      getAllreview();
    });
    }
    

    







    return (
        <Page title="Dashboard: Review | Minimal-UI">
        <Container >
          <Typography variant="h4" sx={{ mb: 5 }}>
            Welcome! {user.name}
          </Typography>


<div>
<div className="container-fluid ">

<div>
        <h5>Subject</h5> <input id="subject" className="form-control"
        type="text"
        onChange= {(event) => {setsubject(event.target.value)}} 
        />
        
    </div>
    <div className="card p-3">
        <h5>Add comments</h5> <input
        type="text"
        id="comment" className="form-control"
        
        onChange= {(event) => {setcomment(event.target.value)}}
        
    />
        <div className="mt-3 d-flex justify-content-between align-items-center"> <span id="count"></span> <button className="btn btn-sm btn-danger"
        
        onClick={handleReview}
                    
        >Post Review</button> </div>
        <div>
            {message}
        </div>
    </div>
</div>

</div>






<div>
  <div className="container-fluid mt-5">

{reviews.map((review,keyi)=>{
return(
    <div className="d-flex  row mt-4" key={keyi}>
      <div className="col-md-9">
        <div className="d-flex flex-column comment-section">
          <div className="bg-white p-2">
            <div className="d-flex flex-row user-info"><img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width={40} alt="yourimage"/>
              <div className="d-flex flex-column justify-content-start ml-2"><span className="d-block font-weight-bold name">{review.name}</span><span className="date text-black-50">Shared publicly- 
              {(moment(review.createdAt).format('dddd'))}-
              {(moment(review.createdAt).format('D'))}- 
              {(new Date(review.createdAt)).toLocaleString('en-us', { month: 'long' })}-
              {(moment(review.createdAt).format('Y'))}
            </span></div>
            </div>
            <div className="mt-2">
              <p className="comment-text">{review.comment}</p>
            </div>
          </div>
          <div className="bg-white">
            <div className="d-flex flex-row fs-12">
              <div className="like p-2 cursor"><i className="fa fa-thumbs-o-up" /><span className="ml-1">Like</span></div>
              <div className="like p-2 cursor"><i className="fa fa-commenting-o" /><span className="ml-1">Comment</span></div>
              <div className="like p-2 cursor"><i className="fa fa-share" /><span className="ml-1">Share</span></div>
            </div>
          </div>
          <div className="bg-light p-2">
            <div className="d-flex flex-row align-items-start"><img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width={40} alt="yourimage" 
            
            /><textarea className="form-control ml-1 shadow-none textarea"type="text"
            
            onChange= {(event) => {setreply(event.target.value)}} 

            /></div>
            <div className="mt-2 d-flex justify-content-end align-items-center"><button className="btn btn-outline-primary btn-sm ml-1 shadow-none btn-primary text-white" type="button"
            onClick={()=>handleReply(review._id)}
            >Post Reply</button></div>


          </div>



          {
review.replies.map((ans,ansk)=>{
    return(

<div key={ansk }className="bg-light p-2">

<div className="d-flex flex-row user-info"><img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width={40} alt="yourimage"/>
              <div className="d-flex flex-column justify-content-start ml-2"><span className="d-block font-weight-bold name"></span><span className="date text-black-50">Shared publicly from- 
              {ans.usertype}
            </span></div>
            </div>

            <div className="mt-2 ml-3">
              <p className="comment-text">{ans.reply}</p>
            </div>


{ans.userid===user._id ?
            <div className="mt-2 d-flex justify-content-end align-items-center"><button type='button'
            className='btn btn-danger'
            onClick={()=> handleDeleteReply(review._id, ans._id)}
            >Delete</button></div>:''
}







</div>

    )})

    }
        </div>
      </div>
    </div>)})}










    
  </div>
</div>
</Container>
</Page>

    );
}

export default Review;