import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { RiDeleteBinLine } from "react-icons/ri";

function MyResume() {
  const resumeKeys = Object.keys(localStorage).filter(key => key.startsWith('resume-')); 
  const [expandedResume, setExpandedResume] = useState(null);

  const handleExpandResume = (key) => {
    setExpandedResume(key === expandedResume ? null : key);
  };

  const handleDeleteResume = (key) => {
    localStorage.removeItem(key);
    
  };

  return (
    <div className='lg:w-11/12 mx-auto'>
       <div className='w-full lg:h-[30%] md:h-[20%] sm:h-[20%] shadow-md rounded-md'>
        <Navbar />
      </div>
      <div className='p-10'>
        <p className='text-2xl font-semibold'>My Resumes</p>
      </div>

      <div className='w-full lg:px-14 max-md:px-2'>
        {resumeKeys.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {resumeKeys.map(key => (
              <div key={key} className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-4">
                  <p className="text-lg font-semibold">Resume {key.split('-')[1]}</p>
                  <div className="flex justify-between items-center">
                    <button
                      className="px-4 py-2 text-sm font-semibold text-blue-600 hover:text-blue-800 focus:outline-none"
                      onClick={() => handleExpandResume(key)}
                    >
                      {expandedResume === key ? 'Collapse' : 'Expand'}
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700 focus:outline-none"
                      onClick={() => handleDeleteResume(key)}
                    >
                      <RiDeleteBinLine />
                    </button>
                  </div>
                </div>
                {expandedResume === key && (
                  <iframe
                    title={`Resume ${key}`}
                    src={localStorage.getItem(key)}
                    className="w-full h-96"
                  />
                )}
              </div>
            ))}
          </div>
        )}
        {resumeKeys.length === 0 && (
          <p className="text-xl">No resumes found.</p>
        )}
      </div>
    </div>
  );
}

export default MyResume;
