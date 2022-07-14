import React from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';

function BtnComponent() {

  const account = useSelector( (state:any) => state.account);
  //const georeducer = useSelector( (state:any) => state.georeducer);
  const lat = useSelector( (state:any) => state.georeducer.lat);
  const lng = useSelector( (state:any) => state.georeducer.lng);
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, getGeoLocation } = bindActionCreators(actionCreators, dispatch);

  return ( 
    <>
      <h1>Balance: </h1>
      <h4>{account}</h4>
      <Button variant="contained" onClick={()=> depositMoney(1000)}>Deposit Money</Button> 
      <Button variant="contained" onClick={()=> withdrawMoney(1000)}>Withdraw Money</Button> 
      
      <h1>Get Coordinates: </h1>
      <p>{lat}</p>
      <p>{lng}</p>
      <Button variant="contained" onClick={()=> getGeoLocation({lat:37.4267861, lng:-122.0806032})}>Your Coordinates</Button>
     
      <p>    
        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=37.4267861,-122.0806032&zoom=14&size=400x300&sensor=false&key=wdwdwdwdw45fdf&callback=initMap`} alt='maps' />
      </p>  
      
    </>
  );
}

export default BtnComponent;