/* Discription: Created message box component 
Author: Sujal Joshi
Date: 2-11-22*/
import React from 'react';

export default function MessageBox(props) {
  return (
    <div className={`alert alert-${props.variant || 'info'}`}>
      {props.children}
    </div>
  );
}
