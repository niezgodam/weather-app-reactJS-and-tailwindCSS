import React from 'react';
import { useEffect, useState } from 'react';
import { FiWind } from 'react-icons/fi';
import { WiHumidity } from 'react-icons/wi';
import { BsFillSunriseFill,BsFillSunsetFill } from 'react-icons/bs';
import allWeather from './WeatherIcons';



const MainWeather = ({ data }) => {

    
    const KELVINT_TO_CELSIUS = -272.15;
    const [adjustedTime, setAdjustedTime] = useState(() => new Date());
    const [time, setTime] = useState(new Date());
    const [newTime, setNewTime] = useState(new Date());
    const [isLoading, setIsLoading] = useState(false);


    function calculateAdjustedTime(time) {
        if (data && typeof data.timezone === 'number') {
            const current = (data?.timezone) * 1000 + time;
            return new Date(current);
        } else{
            console.error("Invalid or missing timezone information");
        }
      }

    function timeToMiliseconds(time){
        const timeInMiliseconds = Date.parse(time);
        const current = ((data?.timezone || 0) * 1000) + timeInMiliseconds;
        const currentTIME = new Date(current);
        const currentTimeOverall = currentTIME.toUTCString();
        return currentTimeOverall;
    }
    

    useEffect(() => {
        const id = setInterval(() => {
            setNewTime(timeToMiliseconds((new Date).toUTCString()));
        }, 1000);
        return () => clearInterval(id);
    }, [data]);


    function timeNow(){
        if(newTime?.toString().split(14,20) !== 'Invalid Date'){
            return newTime?.toString().slice(16,25);
        } 
        return '';
    }

    if (typeof data == 'object') {
        //setIsLoading(true);
        return (
            <div className="w-full h-full md:max-w-[400px] bg-gradient-to-r from-blue-500/80 to-blue-400/50 rounded-xl p-4  shadow-black shadow-lg mx-auto max-w-[300px]">
                <h1 className="text-2xl font-bold text-white">Current weather</h1>
                <h1 className="text-white">{timeNow()}</h1>
                <div className="flex">
                    <img className="ml-[-2rem] scale-75 w-[256px] h-[256px] contrast-150" src={allWeather[data?.weather?.[0]?.main]} />
                    <h1 className="flex items-center justify-center w-full my-8 mr-4 -ml-8 text-3xl font-bold text-white md:-ml-8 md:text-5xl lg:text-6xl whitespace-nowrap">{(parseFloat(JSON.stringify(data?.main?.temp))+KELVINT_TO_CELSIUS).toFixed(1)} <span className="mb-12 text-2xl md:-ml-4">°C</span></h1>
                </div>
                <div className="grid grid-cols-4 -mt-8" >
                    <div className="items-center justify-center block py-4">
                        <FiWind className='flex items-center mx-auto' size={35} color='white' />
                        <h1 className="flex items-center justify-center font-bold text-white">{data?.wind?.speed} m/s</h1>
                    </div>
                    <div className="items-center justify-center block py-4">
                        <WiHumidity className='flex items-center mx-auto' size={35} color='white' />
                        <h1 className="flex items-center justify-center font-bold text-white">{data?.main?.humidity} %</h1>
                    </div>
                    <div className="items-center justify-center block py-4">
                        <BsFillSunriseFill className='flex items-center mx-auto' size={35} color='white' />
                        <h1 className="flex items-center justify-center font-bold text-white">{calculateAdjustedTime((data?.sys?.sunrise)*1000)?.toUTCString().slice(17,22)} </h1>
                    </div>
                    <div className="items-center justify-center block py-4">
                        <BsFillSunsetFill className='flex items-center mx-auto' size={35} color='white' />
                        <h1 className="flex items-center justify-center font-bold text-white">{calculateAdjustedTime((data?.sys?.sunset)*1000)?.toUTCString().slice(17,22)}</h1>
                    </div>
                </div>
            </div>
        );
    }else{
        return null;
    }

    
}

export default MainWeather;