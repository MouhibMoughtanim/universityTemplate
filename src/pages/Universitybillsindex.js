import Aside from '../components/Aside';
import Cardgrid from '../components/Cardgrid';
import Form from '../components/Universityform';
import Container from '../components/Container';
import Cardgridbills from '../components/Cardgridbills';
import React, { Component }  from 'react';

function Universitybillsindex() {
  return (
   
    <>
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
      <Aside/>
      <Container>
        
        <Cardgridbills/>

      </Container>
    </div>
    </div>


    </>
    
    
  );
}

export default Universitybillsindex;
