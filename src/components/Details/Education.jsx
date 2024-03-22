import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  addEducation,
  deleteEducation,
  updateEducation,
} from "../../redux/educationSlice";
import { v4 as uuidv4 } from "uuid";

function Education({ setActive, active }) {
  const dispatch = useDispatch();
  const educationDetails = useSelector(
    (state) => state.education.educationDetails
  );

  const handleAddNew = () => {
    dispatch(
      addEducation({
        id: uuidv4(),
        type: "",
        university: "",
        degree: "",
        startYear: "",
        endYear: "",
      })
    );
  };

  const handleDelete = (id) => {
    if (educationDetails.length === 1) {
      alert("At least one education detail is required.");
      return;
    }
    dispatch(deleteEducation(id));
  };

  const handleInputChange = (id, e) => {
    const { name, value } = e.target;
    const updatedEducation = {
      ...educationDetails.find((detail) => detail.id === id),
      [name]: value,
    };
    dispatch(updateEducation({ id, updatedEducation }));
  };

  return (
    <div className="w-full flex flex-col gap-2 lg:p-5 md:p-5 sm:p-1 lg:px-10 md:px-5 sm:px-1 ">
      <div className="mb-3">
        <p className="text-2xl font-semibold">Education Details</p>
      </div>

      <div className="w-full h-[1px] bg-black opacity-30 mb-5"></div>

      {educationDetails.map((education) => (
        <div key={education.id}>
          <div className="flex lg:flex-row md:flex-row flex-col justify-between mt-2">
            <div className="flex flex-col gap-2 lg:w-[45%] md:w-[45%]">
              <label
                htmlFor={`type-${education.id}`}
                className="text-slate-600 text-opacity-80 cursor-pointer"
              >
                Type
              </label>
              <select
                name="type"
                id={`type-${education.id}`}
                className="p-2 border rounded-md max-md:w-full"
                value={education.type}
                onChange={(e) => handleInputChange(education.id, e)}
              >
                <option value="">Select</option>
                <option value="PhD">PhD</option>
                <option value="Post Graduation">Post Graduation</option>
                <option value="Graduation">Graduation</option>
                <option value="Diploma">Diploma</option>
                <option value="School">School</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 lg:w-[45%] md:w-[45%]">
              <label
                htmlFor={`university-${education.id}`}
                className="text-slate-600 text-opacity-80 cursor-pointer"
              >
                University / School
              </label>
              <input
                type="text"
                name="university"
                id={`university-${education.id}`}
                className="p-2 border rounded-md max-md:w-full"
                placeholder="Enter University / School"
                value={education.university}
                onChange={(e) => handleInputChange(education.id, e)}
              />
            </div>
          </div>

          <div className="flex lg:flex-row md:flex-row flex-col justify-between mt-2">
            <div className="flex flex-col gap-2 lg:w-[45%] md:w-[45%]">
              <label
                htmlFor={`degree-${education.id}`}
                className="text-slate-600 text-opacity-80 cursor-pointer"
              >
                Certification
              </label>
              <input
                type="text"
                name="degree"
                id={`degree-${education.id}`}
                className="p-2 border rounded-md max-md:w-full"
                placeholder="Enter Certification"
                value={education.degree}
                onChange={(e) => handleInputChange(education.id, e)}
              />
            </div>

            <div className="flex flex-col gap-2 lg:w-[45%] md:w-[45%]">
              <label
                htmlFor={`startYear-${education.id}`}
                className="text-slate-600 text-opacity-80 cursor-pointer"
              >
                Start Year
              </label>
              <input
                type="text"
                name="startYear"
                id={`startYear-${education.id}`}
                className="p-2 border rounded-md max-md:w-full"
                placeholder="Enter Year"
                value={education.startYear}
                onChange={(e) => handleInputChange(education.id, e)}
              />
            </div>
          </div>

          <div className="flex lg:flex-row md:flex-row flex-col justify-between mt-2">
            <div className="flex flex-col gap-2 lg:w-[45%] md:w-[45%]">
              <label
                htmlFor={`endYear-${education.id}`}
                className="text-slate-600 text-opacity-80 cursor-pointer"
              >
                End Year
              </label>
              <input
                type="text"
                name="endYear"
                id={`endYear-${education.id}`}
                className="p-2 border rounded-md max-md:w-full"
                placeholder="Enter Year"
                value={education.endYear}
                onChange={(e) => handleInputChange(education.id, e)}
              />
            </div>
          </div>

          {educationDetails.length > 1 && (
            <div className="flex items-center gap-2 mt-2">
              <button
                onClick={() => handleDelete(education.id)}
                className="text-red-500 cursor-pointer"
              >
                <RiDeleteBinLine />
              </button>
            </div>
          )}
        </div>
      ))}

      <div
        className="mt-5 mx-auto text-blue-600 text-sm font-semibold cursor-pointer"
        onClick={handleAddNew}
      >
        <p>Add New</p>
      </div>

      <div className="w-full h-[1px] bg-black opacity-30 mt-5"></div>

      <div className="flex gap-7 p-2 place-content-end">
        <button
          className="py-3 px-5 font-semibold bg-white rounded-md border-[2px] border-blue-400 border-opacity-50 shadow-md"
          onClick={() => setActive(active - 1)}
        >
          Back
        </button>
        <button
          className="py-3 px-5 font-semibold bg-blue-200  rounded-md border-[1px] border-black border-opacity-30 shadow-md"
          onClick={() => setActive(active + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Education;
