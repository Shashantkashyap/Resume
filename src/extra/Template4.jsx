import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineBook, AiFillStar } from 'react-icons/ai';

export default function Template4({
  profileInfo,
  workExp,
  education,
  skills,
  post,
}) {
  return (
    <div className='resume px-8 py-4 bg-white shadow-lg rounded-lg border-black border-[1px] m-2'>
      {/* Header Section */}
      <div className='flex items-center mb-8 p-2 bg-slate-400 rounded-md'>
        {/* Profile Picture */}
        <img src={profileInfo.profileImage} alt='Profile Picture' className=' w-24 h-28 rounded-md mr-4' />
        {/* Name and Title */}
        <div>
          <h1 className='text-2xl font-bold'>{profileInfo.firstName} {profileInfo.lastName}</h1>
          <p className='text-gray-600 font-medium'>{post}</p>
        </div>
      </div>
      <div className='h-[1px] bg-black w-full'></div>
        

      {/* Contact Information Section */}
      <div className='mb-8'>
        <h2 className='text-gray-800 font-medium mb-2'>Contact Information</h2>
        <ul className='list-none text-gray-600 pl-4'>
          <li className='flex items-center mb-2'>
            <FaEnvelope className='inline mr-2' />
            <span>{profileInfo.email}</span>
          </li>
          <li className='flex items-center mb-2'>
            <FaPhoneAlt className='inline mr-2' />
            <span>{profileInfo.mobile}</span>
          </li>
          <li className='flex items-center'>
            <FaMapMarkerAlt className='inline mr-2' />
            <span>{profileInfo.address}</span>
          </li>
        </ul>
      </div>
      <div className='h-[1px] bg-black w-full'></div>
        

      {/* Summary Section */}
      <div className='mb-8'>
        <h2 className='text-gray-800 font-semibold text-lg mb-2'>Summary</h2>
        <p className='text-gray-600'>{profileInfo.objective}</p>
      </div>
      <div className='h-[1px] bg-black w-full'></div>
        

      {/* Experience Section */}
      <div className='mb-8'>
        <h2 className='text-gray-800 font-semibold text-lg mb-2'>Professional Experience</h2>
        {workExp.map((work) => (
          <div key={work.id} className='mb-4'>
            <h3 className='text-gray-800 font-medium mb-1'>
              {work.title} - {work.orgName}
            </h3>
            <p className='text-gray-600'>{work.start} - {work.end}</p>
          </div>
        ))}
      </div>
      <div className='h-[1px] bg-black w-full'></div>
        

      {/* Education Section */}
      {education.educationDetails.map((edu) => (
         <div className='mb-8'>
         <h2 className='text-gray-800 font-semibold text-lg mb-2'>Education</h2>
         <div className='flex items-center text-gray-600'>
           <AiOutlineBook className='inline mr-2' />
           <p className='inline'>
             <span className='font-semibold'>{edu.degree}</span> in {edu.type}, {edu.university} (
             {edu.startYear} - {edu.endYear})
           </p>
         </div>
       </div>
        ))}

      
      <div className='h-[1px] bg-black w-full'></div>
        

      {/* Skills Section */}
      <div className='mb-8'>
        <h2 className='text-gray-800 font-semibold text-lg mb-2'>Skills</h2>
        <div className='flex flex-wrap gap-2'>
          {skills.skills.map((skill) => (
            <span
              key={skill.id}
              className='inline-block px-3 py-1 rounded-full bg-gray-200 text-gray-600 font-medium'
            >
              {skill.skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
