import React, { Component }  from 'react';

export default function Container({children}){

  

  return(<div class="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
         {children}
       </div>
    </div>)  
}