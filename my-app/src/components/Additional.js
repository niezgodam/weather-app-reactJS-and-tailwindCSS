import {React,useState} from 'react';
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';
import { FaTemperatureHalf } from 'react-icons/fa6';
import { VscPerson } from 'react-icons/vsc';
import { MdVisibility } from 'react-icons/md';
import { BsCloudsFill } from 'react-icons/bs';
import Information from './Information';


//contains all additional weather 
//information,
//located to the right of the current weather window

const Additional = ({data}) => {

    const KELVINT_TO_CELSIUS = -272.15;
    const [hoverContent, setHoverContent] = useState(null);

    const handleInformation = (id,content) => {
        return hoverContent === id ? <Information content={content} /> : null;
    }
    
    
    if (typeof data == 'object') {
        return (
        <div className="grid w-full h-full grid-rows-5 p-4 mx-auto shadow-lg bg-gradient-to-r from-blue-500/80 to-blue-400/50 rounded-xl shadow-black max-w-[300px] md:max-w-[400px]">
                
            <div className="flex ">
                <span id="FaTemperatureHigh" className="my-auto ml-2 cursor-pointer hover:scale-125" onMouseLeave={() => {setHoverContent(null)}} onClick={() => {setHoverContent("FaTemperatureHigh")}}>
                {handleInformation("FaTemperatureHigh","This parameter shows the highest temperature")}
                <FaTemperatureHigh color='white' size={50}/></span>
                <span className="flex items-center justify-center w-full ml-2 text-3xl text-white">{((data?.main?.temp_max) + KELVINT_TO_CELSIUS).toFixed(1)}<span className="mb-8 text-lg">°C</span></span>
            </div>
            
            <div className="flex ">
                <span id="FaTemperatureHalf" className="flex my-auto ml-1 cursor-pointer hover:scale-125" onMouseLeave={() => {setHoverContent(null)}} onClick={() => {setHoverContent("FaTemperatureHalf")}}>
                {handleInformation("FaTemperatureHalf","This parameter shows the sensible temperature")}
                <FaTemperatureHalf className="-ml-2" color='white' size={50}/><VscPerson className="-ml-6" size={50} color='white'/></span>
                <span className="flex items-center justify-center w-full text-3xl text-white">{((data?.main?.feels_like) + KELVINT_TO_CELSIUS).toFixed(1)}<span className="mb-8 text-lg">°C</span></span>
            </div>
            
            <div className="flex ">
                <span id="FaTemperatureLow" className="my-auto ml-2 cursor-pointer hover:scale-125" onMouseLeave={() => {setHoverContent(null)}} onClick={() => {setHoverContent("FaTemperatureLow")}}>
                {handleInformation("FaTemperatureLow","This parameter shows the lowest temperature")}
                <FaTemperatureLow color='white' size={50}/></span>
                <span className="flex items-center justify-center w-full ml-2 text-3xl text-white">{((data?.main?.temp_min) + KELVINT_TO_CELSIUS).toFixed(1)}<span className="mb-8 text-lg">°C</span></span>
            </div>
            
            <div className="flex ">
                <span id="MdVisibility" className="my-auto ml-2 cursor-pointer hover:scale-125" onMouseLeave={() => {setHoverContent(null)}} onClick={() => {setHoverContent("MdVisibility")}}>
                {handleInformation("MdVisibility","This parameter shows the distance at which an object or light can be clearly seen")}
                <MdVisibility color='white' size={50}/></span>
                <span className="flex items-center justify-center w-full ml-2 text-3xl text-white">{(data?.visibility)/1000} km</span>
            </div>
            
            <div className="flex ">
                <span id="BsCloudsFill" className="my-auto ml-2 cursor-pointer hover:scale-125" onMouseLeave={() => {setHoverContent(null)}} onClick={() => {setHoverContent("BsCloudsFill")}}>
                {handleInformation("BsCloudsFill","This parameter shows the percentage occurrence of clouds")}
                <BsCloudsFill color='white' size={50}/></span>
                <span className="flex items-center justify-center w-full ml-2 text-3xl text-white">{(data?.clouds?.all)}%</span>
            </div>

        </div>);
    }else{
        return null;
    }
}

export default Additional;
