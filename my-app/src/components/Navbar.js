import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BsSearch } from 'react-icons/bs';


const Navbar = ({ onDataFromNavbar }) => {

    const [data,setData] = useState([]);
    const [city,setCity] = useState('');
    const [fetchURL,setFetchUrl] = useState('');
    const [error,setError] = useState(false);

    
    const handleClick = async (e) => {
        e.preventDefault();
        try {
          if (city.trim() !== '') {
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?q=${city}&exclude=daily,minutely,current,alerts&appid=${process.env.REACT_APP_API_WEATHER}`
            );
            setFetchUrl(
              `https://api.openweathermap.org/data/2.5/weather?q=${city}&exclude=hourly.temp,daily&appid=${process.env.REACT_APP_API_WEATHER}`
            );
            setError(false);
          }
        } catch (err) {
          console.error(err);
          setError(true);
        }
      };  

    

    useEffect(() => {
        axios.get(fetchURL)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setError(true);
        });
    },[fetchURL])


    onDataFromNavbar(data);
    
  return (
    <div>

        <div className="w-full max-w-[1200px] mx-auto rounded-2xl relative "> 
            <input className="flex w-full py-2 pl-10 text-white rounded outline-none bg-blue-600/60" type='text' placeholder="Enter city" onChange={(e) => setCity(e.target.value)}></input>
            <span className="absolute top-0 bottom-0 left-0 ml-2"><BsSearch className="mt-2 cursor-pointer" fill='white' size={25} onClick={handleClick}>Search</BsSearch></span>
            {error ?  <div className="flex justify-center p-4 mt-4 text-2xl font-bold text-white bg-red-600">
                    <p>Something went wrong</p>
                </div> : 
            null}

        </div>

    </div>
  )
}

export default Navbar;