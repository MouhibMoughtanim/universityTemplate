import { useParams } from "react-router-dom";

import Container from '../components/Container';
import Navbar from '../components/Navbar';
import React, { Component }  from 'react';
import CardGridService from '../components/CardGridService';
import UniversityServiceBills from '../components/UniversityServiceBills';

export default function UniversityServiceBillsPage() {
    const {university_id}= useParams();

  return (
   
    <>
    
      <Navbar/>
      <Container>
        
        <UniversityServiceBills university_id={university_id} key={university_id}/>

      </Container>
   


    </>
    
    
  );
}

