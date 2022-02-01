import React from 'react';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";



const Spinner =()=> {

  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  `;


  return(
    <ClipLoader css={override} size={100}/>
  )
}
export default Spinner;