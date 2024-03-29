import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Maps = ({ data }) => {
  
  const [newData, setNewData] = useState([]);
  const [fetchURL,setFetchUrl] = useState('');
  const [zoom, setZoom] = useState('6');
  const [isLoading, setIsLoading] = useState(true);
  
  const apiKey = process.env.REACT_APP_API_MAP

  useEffect(() => {
    if (fetchURL) {
      setIsLoading(true);
      axios.get(fetchURL)
        .then((response) => {
          setNewData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching map data:', error);
        });
    }
  }, [fetchURL]);

  const handleClick = () => {
    setZoom((prevZoom) => (prevZoom === '6' ? '12' : '6'));
  }


  if (typeof data == 'object') {
    return (  

        <div className="flex w-full h-full">
          <iframe className="rounded-xl w-[1000px]" src={`https://api.maptiler.com/maps/5aee923c-5f1e-41cd-a0fe-4212521fed8c/?key=${apiKey}#${zoom}/${data?.coord?.lat}/${data?.coord?.lon}`} ></iframe>
          {zoom === '6' ? <button className="absolute p-2 text-white rounded-tl-xl bg-black/80 rounded-br-xl" onClick={handleClick}>Zoom In</button> : <button className="absolute p-2 text-white bg-black/80 rounded-br-xl rounded-tl-xl" onClick={handleClick}>Zoom Out</button>}
        </div>   
    );
  } else {
    return '';
  }
};

export default Maps;