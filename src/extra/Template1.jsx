import React from 'react';
import { IoIosMail } from 'react-icons/io';
import { FaPhoneVolume } from 'react-icons/fa6';
import { FaRegCircleDot } from 'react-icons/fa6';

export default function Template1({profileInfo ,workExp, education, skills, post}) {
  console.log(profileInfo)
  console.log(workExp)
  console.log(education)
  console.log(skills)
  console.log(post)
  return (
    <div className="flex flex-col md:flex-row md:gap-2 p-2 bg-gray-100">
      {/* Left section */}
      <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6">
        {/* Name */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">{`${profileInfo.firstName} ${profileInfo.last_name}`}</h1>
          <h2 className="text-xl font-semibold">{post}</h2>
        </div>
        
        {/* Image */}
        <div className="mx-auto mb-6">
          <img src={profileInfo.profileImage} alt="Profile" className="rounded-md w-34 h-32 object-contain mx-auto" />
        </div>

        {/* Personal info */}
        <div className="text-sm text-center mb-6">
          <div className="flex items-center justify-center mb-2">
            <IoIosMail className="mr-2" />
            <p className=' text-[10px]'>{profileInfo.email}</p>
          </div>
          <div className="flex items-center justify-center">
            <FaPhoneVolume className="mr-2" />
            <p>{profileInfo.mobile}</p>
          </div>
          <p className="mt-2">{`${profileInfo.address}, ${profileInfo.city}, ${profileInfo.state}, ${profileInfo.postal_code}`}</p>
        </div>

        {/* Description */}
        <div className="mb-6">
          <p className="font-semibold mb-1">Description:</p>
          <p className="text-sm">{profileInfo.objective}</p>
        </div>
      </div>

      {/* Right section */}
      <div className="w-full md:w-2/3 bg-white rounded-lg shadow-lg p-6">
        {/* Work experience */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Professional Experience</h3>
          {workExp.map((work) => (
            <div key={Date.now()} className="mb-4">
              <p className="text-lg font-semibold">{work.title}</p>
              <p className="text-sm font-medium">{`${work.orgName} | ${work.start} - ${work.end}`}</p>
            </div>
          ))}
        </div>

        {/* Education */}
        {
          education.educationDetails.map((edu)=>(
            <div key={edu.id} className="mb-6">
          <h3 className="text-xl font-semibold mb-2">{edu.type}</h3>
          <p className="font-semibold">{edu.degree}</p>
          <p className="text-sm">{`${edu.university}, ${edu.startYear} - ${edu.endYear}`}</p>
        </div>
          ))        
        }
        

        {/* Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Skills</h3>
          <div className="flex flex-wrap">
            {skills.skills.map((skill) => (
              <div key={skill.id} className="flex items-center mr-4 mb-2">
                <FaRegCircleDot className="mr-1" />
                <p>{skill.skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
