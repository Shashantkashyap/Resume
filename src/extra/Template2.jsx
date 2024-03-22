import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaRegCircleDot } from "react-icons/fa6";

export default function Template2({
  profileInfo,
  workExp,
  education,
  skills,
  post
}) {
  return (
    <div className="container mx-auto px-2 py-8 flex flex-col gap-5">
      {/* Left Section */}
      <div className="lg:w-1/3 flex flex-col items-center">
        <div className="flex gap-60">
          {/* Profile Picture */}
          <div className="flex">
            <img
              src={profileInfo.profileImage}
              alt="Profile"
              className="rounded-full w-32 h-32 mb-4"
            />
          </div>
          {/* Name and Title */}
          <div className="flex flex-col gap-2">
            <div className="text-center mb-4">
              <p className="text-3xl font-bold">{`${profileInfo.firstName} ${profileInfo.lastName}`}</p>
              <p className="text-lg font-semibold">{post}</p>
            </div>
            {/* Contact Information */}
            <div className="text-sm text-center mb-4">
              <div className="flex items-center justify-center mb-2">
                <IoIosMail className="mr-2" />
                <p>{profileInfo.email}</p>
              </div>
              <div className="flex items-center justify-center">
                <FaPhoneVolume className="mr-2" />
                <p>{profileInfo.mobile}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-black"></div>

        {/* Objective */}
        <div className="text-sm text-center">
          <p className="font-semibold text-lg mt-2">Objective:</p>
          <p>{profileInfo.objective}</p>
        </div>
      </div>
      {/* Right Section */}
      <div className="lg:w-2/3 px-4">
        {/* Professional Experience */}
        <div className="mb-8">
          <p className="text-xl font-semibold mb-4">Professional Experience</p>
          {workExp.map((work) => (
            <div key={work.id} className="mb-4">
              <p className="font-semibold">
                {work.title}, {work.orgName}
              </p>
              <p>
                {work.start} - {work.end}
              </p>
            </div>
          ))}
        </div>
        {/* Education */}
        <p className="text-xl font-semibold mb-4">Education</p>
        {education.educationDetails.map((edu) => (
          <div key={edu.id} className="mb-8">
          
          <p className="font-semibold">{edu.degree}</p>
          <p>
            {edu.type}, {edu.university}
          </p>
          <p>
            {edu.startYear} -{" "}
            {edu.endYear}
          </p>
        </div>
        ))}
        
        {/* Skills */}
        <div>
          <p className="text-xl font-semibold mb-4">Skills</p>
          {skills.skills.map((skill, index) => (
            <div key={index} className="flex items-center mb-2">
              <FaRegCircleDot className="mr-2" fontSize={10} />
              <p>{skill.skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
