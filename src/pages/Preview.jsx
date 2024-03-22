// Preview.js
import React, { useCallback, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Template1 from "../extra/Template1";
import Template2 from "../extra/Template2";
import Template3 from "../extra/Template3";
import Template4 from "../extra/Template4";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Notification from '../components/Notification';

function Preview() {
  const selectedTemplate = useSelector((state) => state.template.selectedTemplate);
  const post = useSelector((state) => state.post.post)
  const profileInfo = useSelector((state) => state.personalInfo)
  const workExp = useSelector((state) => state.workExperience)
  const education = useSelector((state) => state.education)
  const skills = useSelector((state) => state.skills)
  const navigate = useNavigate();
  const contentRef = useRef(null);
  const [showNotification, setShowNotification] = useState(false);

  const handleSave = useCallback(() => {
    const contentElement = contentRef.current;

    html2canvas(contentElement, { scale: 3 }).then(canvas => { 
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); 
      const imgWidth = 210;
      const imgHeight = canvas.height * imgWidth / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      const resumeData = pdf.output('blob');
      const fileName = `resume-${Date.now()}.pdf`; 
      saveResumeToLocalStorage(resumeData, fileName); 

      // Trigger download
      const url = URL.createObjectURL(resumeData);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();

      setShowNotification(true);
    });
  }, [selectedTemplate, post, profileInfo, workExp, education, skills]);

  const saveResumeToLocalStorage = (resumeData, fileName) => {
    const resumeBlob = new Blob([resumeData], { type: 'application/pdf' });
    const resumeUrl = URL.createObjectURL(resumeBlob);
    localStorage.setItem(fileName, resumeUrl);
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  return (
    <div className='lg:w-11/12 mx-auto'>
      <div className='w-full lg:h-[30%] md:h-[20%] sm:h-[20%] shadow-md rounded-md'>
        <Navbar />
      </div>

      <div className=' p-10'>
        <p className='text-2xl font-semibold'>Resume Preview</p>
      </div>

      <div className='w-full lg:px-14 max-md:px-2 flex max-md:flex-col gap-36 '>
        <div className='lg:w-[50%] max-md:w-full shadow-md bg-white' ref={contentRef}>
          {/* Render selected template */}
          {selectedTemplate === "p1" && <Template1 post={post} profileInfo={profileInfo} workExp={workExp} education={education} skills={skills} />}
          {selectedTemplate === "p2" && <Template2 post={post} profileInfo={profileInfo} workExp={workExp} education={education} skills={skills} />}
          {selectedTemplate === "p3" && <Template3 post={post} profileInfo={profileInfo} workExp={workExp} education={education} skills={skills} />}
          {selectedTemplate === "p4" && <Template4 post={post} profileInfo={profileInfo} workExp={workExp} education={education} skills={skills} />}
        </div>

        <div className='flex flex-col gap-5 w-[40%] max-md:w-full'>
          <p className=' text-xl font-semibold text-slate-700 text-opacity-70'>Create File Name</p>
          <input id="fileName" type="text" className="p-2 border rounded-md max-md:w-full shadow-md" placeholder="Enter file name" />
          <div className="flex gap-7 p-2 place-content-end">
            <button
              className="py-3 px-5 font-semibold bg-white rounded-md border-[2px] border-blue-400 border-opacity-50 shadow-md"
              onClick={() => navigate("/")}
            >
              Back
            </button>
            <button
              className="py-3 px-5  font-semibold bg-blue-200 rounded-md border-[1px] border-black border-opacity-30 shadow-md"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
      {showNotification && <Notification message="Your File Downloaded Successfully" onClose={closeNotification} />}
    </div>
  );
}

export default Preview;
