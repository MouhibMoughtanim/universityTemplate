import { Route, Routes } from 'react-router-dom';
import './App.css';
import Universitybills from './pages/Universitybills';
import Universityindex from './pages/Universityindex';
import Universitybillsindex from './pages/Universitybillsindex';
import UniversityService from './pages/UniversityService';
import UniversityDashboard from './pages/UniversityDashboard';
import React, { Component }  from 'react';
import UniversityServiceBillsPage from './pages/UniversityServiceBillsPage';

function App() {
  return (
   
  
    <Routes>
             
             <Route index element={<Universityindex/>}/>
             <Route path='/admin/university/' element={<Universityindex/>}/>
             <Route path='/admin/university/dashboard' element={<UniversityDashboard/>}/>
             <Route path='/admin/universities/bills' element={<Universitybillsindex/>}/>
             <Route path='/universityService' element={<UniversityService/> }/>
             <Route path='/universityService-bills/:university_id' element={<UniversityServiceBillsPage/> }/>
             <Route path='/admin/university/:university_id/bills' element={<Universitybills/>}/>
 
    </Routes>
 
    
  );
}

export default App;
