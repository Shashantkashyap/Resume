import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import { addSkill, deleteSkill, updateSkill } from "../../redux/skillSlice";
import { useNavigate } from "react-router-dom";

function Skills({ setActive, active }) {
  const proficiencyLevels = ["Beginner", "Intermediate", "Expert"];
  const navigate = useNavigate();
  const skills = useSelector((state) => state.skills.skills);
  const dispatch = useDispatch();

  const handleAddSkill = () => {
    const newId = Math.max(...skills.map((skill) => skill.id)) + 1;
    dispatch(addSkill({ id: newId, skill: "", proficiency: "" }));
  };

  const handleInputChange = (id, e) => {
    const { name, value } = e.target;
    const updatedSkill = {
      ...skills.find((skill) => skill.id === id),
      [name]: value,
    };
    dispatch(updateSkill({ id, updatedSkill }));
  };

  const handleDeleteSkill = (id) => {
    dispatch(deleteSkill(id));
  };

  const setPreview = () => {
    navigate("/preview");
  };

  return (
    <div className="w-full flex flex-col gap-2 lg:p-5 md:p-5 sm:p-1 lg:px-10 md:px-5 sm:px-1 ">
      <div className=" mb-3">
        <p className="text-2xl font-semibold">Key Skills</p>
      </div>

      <div className="w-full h-[1px] bg-black opacity-30 mb-5"></div>

      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex lg:flex-row md:flex-row flex-col justify-between mt-2"
        >
          <div className="flex flex-col gap-2 lg:w-[45%] md:w-[45%]">
            <input
              type="text"
              name="skill"
              value={skill.skill}
              onChange={(e) => handleInputChange(skill.id, e)}
              className="p-2 border rounded-md max-md:w-full"
              placeholder="Key Skills"
            />
          </div>

          <div className="flex flex-col gap-2 lg:w-[45%] md:w-[45%]">
            <select
              name="proficiency"
              value={skill.proficiency}
              onChange={(e) => handleInputChange(skill.id, e)}
              className="p-2 border rounded-md max-md:w-full"
            >
              <option value="">Select Proficiency</option>
              {proficiencyLevels.map((level, idx) => (
                <option key={idx} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center">
            <RiDeleteBinLine
              className="text-red-500 cursor-pointer"
              onClick={() => handleDeleteSkill(skill.id)}
            />
          </div>
        </div>
      ))}

      <div
        className=" mt-5  text-blue-600 text-sm font-semibold cursor-pointer"
        onClick={handleAddSkill}
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
          onClick={setPreview}
        >
          Preview
        </button>
      </div>
    </div>
  );
}

export default Skills;
