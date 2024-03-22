import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setProfileImage,
  setFirstName,
  setLastName,
  setEmail,
  setMobile,
  setAddress,
  setCity,
  setState,
  setPostalCode,
  setObjective,
} from "../../redux/personalInfo.slice";

function PersonalInfo({ setActive, active }) {
  const dispatch = useDispatch();
  const {
    profileImage,
    firstName,
    lastName,
    email,
    mobile,
    address,
    city,
    state,
    postalCode,
    objective,
  } = useSelector((state) => state.personalInfo);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        dispatch(setFirstName(value));
        break;
      case "lastName":
        dispatch(setLastName(value));
        break;
      case "email":
        dispatch(setEmail(value));
        break;
      case "mobile":
        dispatch(setMobile(value));
        break;
      case "address":
        dispatch(setAddress(value));
        break;
      case "city":
        dispatch(setCity(value));
        break;
      case "state":
        dispatch(setState(value));
        break;
      case "postalCode":
        dispatch(setPostalCode(value));
        break;
      case "objective":
        dispatch(setObjective(value));
        break;
      default:
        break;
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      dispatch(setProfileImage(reader.result));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Validation function to check if all fields are filled
  const isFormValid = () => {
    return (
      firstName &&
      lastName &&
      email &&
      mobile &&
      address &&
      city &&
      state &&
      postalCode &&
      objective
    );
  };

  return (
    <div className="w-full flex flex-col gap-2 lg:p-5 md:p-5 sm:p-1 lg:px-10 md:px-5 sm:px-1 ">
      <div className="flex flex-col gap-3">
        <div className="w-[130px] h-[130px] bg-contain bg-center">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Photo"
              className="h-full w-full rounded-full"
            />
          ) : (
            <img
              src="https://pixlr.com/images/index/ai-image-generator-two.webp"
              alt="Default Photo"
              className="h-full w-full rounded-full"
            />
          )}
        </div>
        <label
          htmlFor="imageInput"
          className="text-blue-500 text-lg font-semibold cursor-pointer"
        >
          Change Profile Photo
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
      </div>

      {/* Input fields */}
      <div className="flex lg:flex-row md:flex-row flex-col justify-between">
        <div className=" flex flex-col gap-2 lg:w-[45%] md:w-[45%]">
          <label
            htmlFor="firstName"
            className=" text-slate-600 text-opacity-80 cursor-pointer"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
            className="p-2 border rounded-md max-md:w-full"
            placeholder="Enter Name"
          />
        </div>

        <div className=" flex flex-col gap-2 lg:w-[45%] md:w-[45%]">
          <label
            htmlFor="lastName"
            className=" text-slate-600 text-opacity-80 cursor-pointer"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
            className="p-2 border rounded-md max-md:w-full"
            placeholder="Enter Name"
          />
        </div>
      </div>

      {/* More input fields ... */}
      <div className="flex lg:flex-row md:flex-row flex-col justify-between">
        <div className=" flex flex-col gap-2 lg:w-[45%] md:w-[45%]">
          <label
            htmlFor="email"
            className=" text-slate-600 text-opacity-80 cursor-pointer"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            className="p-2 border rounded-md max-md:w-full"
            placeholder="Enter Email"
          />
        </div>

        <div className=" flex flex-col gap-2lg:w-[45%] md:w-[45%]">
          <label
            htmlFor="mobile"
            className=" text-slate-600 text-opacity-80 cursor-pointer"
          >
            Mobile
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={mobile}
            onChange={handleInputChange}
            className="p-2 border rounded-md max-md:w-full"
            placeholder="Enter Phone No."
          />
        </div>
      </div>

      <div className=" flex flex-col gap-2">
        <label
          htmlFor="address"
          className=" text-slate-600 text-opacity-80 cursor-pointer"
        >
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={address}
          onChange={handleInputChange}
          className="p-2 border rounded-md w-full"
          placeholder="Enter Address"
        />
      </div>

      <div className="flex lg:flex-row md:flex-row flex-col justify-between">
        <div className=" flex flex-col gap-2 lg:w-[45%] md:w-[45%]">
          <label
            htmlFor="city"
            className=" text-slate-600 text-opacity-80 cursor-pointer"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={handleInputChange}
            className="p-2 border rounded-md max-md:w-full"
            placeholder="Enter City"
          />
        </div>

        <div className=" flex flex-col gap-2 lg:w-[45%] md:w-[45%]">
          <label
            htmlFor="state"
            className=" text-slate-600 text-opacity-80 cursor-pointer"
          >
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={state}
            onChange={handleInputChange}
            className="p-2 border rounded-md max-md:w-full"
            placeholder="Enter State"
          />
        </div>
      </div>

      <div className=" flex flex-col gap-2 w-[45%]">
        <label
          htmlFor="postal"
          className=" text-slate-600 text-opacity-80 cursor-pointer"
        >
          Postal Code
        </label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={postalCode}
          onChange={handleInputChange}
          className="p-2 border rounded-md max-md:w-full"
          placeholder="Enter Pincode"
        />
      </div>

      <div>
        <label
          htmlFor="objective"
          className=" text-slate-600 text-opacity-80 cursor-pointer"
        >
          Objective
        </label>
        <textarea
          id="objective"
          name="objective"
          value={objective}
          onChange={handleInputChange}
          cols="30"
          rows="5"
          className="p-2 border rounded-md w-full mt-2"
          placeholder="Describe Yourself"
        ></textarea>
      </div>

      <div className=" w-full h-[0.5px] opacity-20 bg-black mt-10"></div>

      {/* "Next" button */}
      <div className="flex gap-7 p-2 place-content-end">
        <button
          className={`py-3 px-5 font-semibold bg-blue-200 rounded-md border-[1px] border-black border-opacity-30 shadow-md ${
            !isFormValid() && 'opacity-50 cursor-not-allowed'
          }`}
          onClick={() => isFormValid() && setActive(active + 1)}
          disabled={!isFormValid()}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PersonalInfo;
