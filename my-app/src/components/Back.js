import React from 'react';
import Navbar from "./Navbar.js";
import MainWeather from './MainWeather.js';
import { useState } from 'react';
import Additional from './Additional.js';
import Maps from './Maps.js';


//This component holds all the other components

const Back = () => {
  
  const [dataFromNavbar, setDataFromNavbar] = useState(null);

  const handleDataFromNavbar = (data) => {
    setDataFromNavbar(data);
  }

  
  return (

    <div className="relative">
      
        <div className="w-full h-fit absolute bg-gradient-to-r from-blue-500/80 to-blue-400/50 max-w-[1200px] mx-auto left-0 right-0 rounded-2xl mt-[50px] p-12">          
            <div className="grid grid-cols-6 py-12 mx-auto">
              <div className="col-span-4 col-start-2 md:col-start-2 md:col-span-2">
                <Navbar onDataFromNavbar={handleDataFromNavbar}/>
              </div>
            </div>


            <div className="md:grid-cols-12 md:grid">
              <div className="col-span-4 col-start-3 h-[400px] mb-[50px] md:mb-0">
                <MainWeather data={dataFromNavbar}/>   
              </div>
              <div className="col-span-4 col-start-8 h-[400px]">
                <Additional data={dataFromNavbar}/>
    
              </div>
            </div>

            <div className="md:grid-cols-12 md:grid mt-[100px] h-[400px]">
              <div className="col-span-9 col-start-3 h-[400px] mb-[50px] md:mb-0">
                <Maps data={dataFromNavbar}/>
              </div>
            </div>

            
        </div>

    </div>
  )
}

export default Back;
