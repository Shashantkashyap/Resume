import React from 'react';
import { data } from './Data';
import photo from '../assets/12345.jpg';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineBook, AiFillStar } from 'react-icons/ai';

export default function Template3({
  profileInfo,
  workExp,
  education,
  skills,
  post,
}) {
  return (
    <div className='resume px-8 py-4'>
      {/* Header Section */}
      <div className='flex items-center mb-8'>
        {/* Profile Picture */}
        <img src={profileInfo.profileImage} alt='Profile Picture' className='w-20 h-20 rounded-full mr-4' />
        {/* Name and Title */}
        <div>
          <h1 className='text-2xl font-bold'>{profileInfo.firstName} {profileInfo.last_name}</h1>
          <p className='text-gray-600 font-semibold'>{post}</p>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className='mb-8'>
        <h2 className='text-gray-800 font-semibold text-lg mb-2'>Contact Information</h2>
        <ul className='list-none text-gray-600 pl-4'>
          <li>
            <FaEnvelope className='inline mr-2' />
            {profileInfo.email}
          </li>
          <li>
            <FaPhoneAlt className='inline mr-2' />
            {profileInfo.mobile}
          </li>
          <li>
            <FaMapMarkerAlt className='inline mr-2' />
            {profileInfo.address}
          </li>
        </ul>
      </div>

      {/* Summary Section */}
      <div className='mb-8'>
        <h2 className='text-gray-800 font-semibold text-lg mb-2'>Summary</h2>
        <p className='text-gray-600'>{profileInfo.objective}</p>
      </div>

      {/* Experience Section */}
      <div className='mb-8'>
        <h2 className='text-gray-800 font-semibold text-lg mb-2'>Professional Experience</h2>
        {workExp.map((work) => (
          <div key={work.id} className='mb-4'>
            <h3 className='text-gray-800 font-medium mb-2'>
              {work.title} - {work.orgName}
            </h3>
            <p className='text-gray-600'>{work.start} - {work.end}</p>
            
          </div>
        ))}
      </div>

      {/* Education Section */}
      {education.educationDetails.map((edu) => (
          <div className='mb-8'>
          <h2 className='text-gray-800 font-semibold text-lg mb-2'>Education</h2>
          <div>
            <AiOutlineBook className='inline mr-2 text-gray-600' />
            <p className='inline text-gray-600'>
              {edu.degree} in {edu.type}, {edu.university} (
              {edu.startYear} - {edu.endYear})
            </p>
          </div>
        </div>
  
        ))}
      
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
  )}
