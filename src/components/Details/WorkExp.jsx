import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  addExperience,
  deleteExperience,
  updateExperience,
} from "../../redux/workExperienceSlice";

function WorkExp({ setActive, active }) {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.workExperience);

  const handleAddExperience = () => {
    dispatch(addExperience({ title: "", orgName: "", start: "", end: "" }));
  };

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperience = { ...experiences[index], [name]: value };
    dispatch(updateExperience({ index, updatedExperience }));
  };

  const handleDeleteExperience = (index) => {
    dispatch(deleteExperience(index));
  };

  return (
    <div className="w-full flex flex-col gap-2 lg:p-5 md:p-5 sm:p-1 lg:px-10 md:px-5 sm:px-1 ">
      <div className="mb-3">
        <p className="text-2xl font-semibold">Work Experience</p>
      </div>

      {experiences.map((experience, index) => (
        <div key={index} className=" mt-3">
          <div className="flex justify-between items-center">
            <p className="text-md font-semibold">Experience {index + 1}</p>
            <RiDeleteBinLine
              className="text-black cursor-pointer"
              onClick={() => handleDeleteExperience(index)}
            />
          </div>
          <div className="w-full h-[1px] bg-black opacity-30 mb-5"></div>
          <div className="flex lg:flex-row md:flex-row flex-col justify-between mt-2">
            <div className="flex flex-col gap-2 lg:w-[45%] md:w-[45%]">
              <label
                htmlFor={`title${index}`}
                className="text-slate-600 text-opacity-80 cursor-pointer"
              >
                Job Title
              </label>
              <input
                type="text"
                id={`title${index}`}
                name="title"
                value={experience.title}
                onChange={(e) => handleInputChange(index, e)}
                className="p-2 border rounded-md max-md:w-full"
                placeholder="Enter Title"
              />
            </div>
            <div className="flex flex-col gap-2 lg:w-[45%] md:w-[45%]">
              <label
                htmlFor={`orgName${index}`}
                className="text-slate-600 text-opacity-80 cursor-pointer"
              >
                Organization Name
              </label>
              <input
                type="text"
                id={`orgName${index}`}
                name="orgName"
                value={experience.orgName}
                onChange={(e) => handleInputChange(index, e)}
                className="p-2 border rounded-md max-md:w-full"
                placeholder="Enter Company Name"
              />
            </div>
          </div>
          <div className="flex lg:flex-row md:flex-row flex-col justify-between mt-2">
            <div className="flex flex-col gap-2 lg:w-[45%] md:w-[45%]">
              <label
                htmlFor={`start${index}`}
                className="text-slate-600 text-opacity-80 cursor-pointer"
              >
                Start Year
              </label>
              <input
                type="text"
                id={`start${index}`}
                name="start"
                value={experience.start}
                onChange={(e) => handleInputChange(index, e)}
                className="p-2 border rounded-md max-md:w-full"
                placeholder="Enter Year"
              />
            </div>
            <div className="flex flex-col gap-2 lg:w-[45%] md:w-[45%]">
              <label
                htmlFor={`end${index}`}
                className="text-slate-600 text-opacity-80 cursor-pointer"
              >
                End Year
              </label>
              <input
                type="text"
                id={`end${index}`}
                name="end"
                value={experience.end}
                onChange={(e) => handleInputChange(index, e)}
                className="p-2 border rounded-md max-md:w-full"
                placeholder="Enter Year"
              />
            </div>
          </div>
        </div>
      ))}

      <div
        className="mt-5 mx-auto text-blue-600 text-sm font-semibold cursor-pointer"
        onClick={handleAddExperience}
      >
        <p>Add New</p>
      </div>

      <div className="w-full h-[1px] bg-black opacity-30"></div>

      <div className="flex gap-7 p-2 place-content-end">
        <button
          className="py-3 px-5 font-semibold bg-white rounded-md border-[2px] border-blue-400 border-opacity-50 shadow-md"
          onClick={() => setActive(active - 1)}
        >
          Back
        </button>
        <button
          className="py-3 px-5 font-semibold bg-blue-200 rounded-md border-[1px] border-black border-opacity-30 shadow-md"
          onClick={() => setActive(active + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default WorkExp;
