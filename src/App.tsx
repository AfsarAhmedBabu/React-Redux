import React from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';




function BtnComponent() {

  const account = useSelector( (state:any) => state.account);
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

  return ( 
    <>
      <h1>{account}</h1>
      <Button variant="contained" onClick={()=> depositMoney(1000)}>Deposit Money</Button> 
      <Button variant="contained" onClick={()=> withdrawMoney(1000)}>Withdraw Money</Button> 
    </>
  );
}

export default BtnComponent;