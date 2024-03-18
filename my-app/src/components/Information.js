import React from 'react';

const Information = ({content}) => {
    return (
        <div className="w-[300px] h-[200px] absolute bg-gray-500/90 z-40 -mt-[50px] rounded-2xl flex items-center justify-center">
          <div>
            <h1 className='font-bold text-center text-white'>{content}</h1>
          </div>
        </div>
      );
    };

export default Information;