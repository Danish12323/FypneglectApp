import React,{useEffect} from 'react';
// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
import { useDispatch, useSelector } from 'react-redux';
import { dispatchLogin,fetchUser,dispatchGetUser } from './redux/actions/authAction';
import axios from 'axios';
// ----------------------------------------------------------------------

export default function App() {



  const dispatch=useDispatch();
  const token=useSelector(state=>state.token)
  const auth=useSelector(state=>state.auth)
  //const {user}=auth;
  
  useEffect(
    ()=>{

      const firstLogin=localStorage.getItem('firstLogin');
      if(firstLogin){
        const getToken=async()=>{
          const res=await axios.post('/user/refresh_token',null)
          
          dispatch({type:'GET_TOKEN', payload:res.data.access_token})
        }
        getToken()
      }


    },[auth.isLogged, dispatch]
    )
useEffect(
  ()=>{
            if(token){
              const getUser=()=>{
                    dispatch(dispatchLogin())
                    return fetchUser(token).then(res =>{
                      dispatch(dispatchGetUser(res))
                    })
              }
              getUser()
            }
  },[token, dispatch]
)




  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <Router />
    </ThemeConfig>
  );
}
