import React from "react";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div className="lg:w-11/12 mx-auto">
      <div className="w-full lg:h-[30%] md:h-[20%] sm:h-[20%] shadow-md rounded-md">
        <Navbar />
      </div>

      <div className=" p-10">
        <div className=" lg:px-5 max-md:px-1 mt-6 mb-5 flex flex-col gap-2">
          <p className=" text-3xl font-bold text-slate-900 text-opacity-70">
            Resume
          </p>
          <p className=" text-3xl font-bold text-slate-900 text-opacity-70">
            Builder
          </p>
        </div>
        <div className="lg:w-[40%] max-md:w-[90%] h-[3px] bg-blue-600 rounded-md lg:ml-3 mb-5"></div>

        <div className="flex lg:flex-row max-md:flex-col gap-[20%]">
          <p className="  lg:w-[40%] max-md:w-[100%] lg:px-5 max-md:px-1 pt-5 text-sm text-slate-900 text-opacity-70 font-semibold ">
            " We understand the importance of creating a professional and
            impactful resume. We believe that a well-crafted resume can make a
            significant difference in your job search, helping you stand out
            from the competition and land your dream job.
            <br />
            <br />
            Our Resume Builder is designed to simplify the resume creation
            process, offering a user-friendly interface and a wide range of
            customizable templates. Whether you're a recent graduate, a seasoned
            professional, or making a career transition, our platform provides
            the tools and resources you need to create a compelling resume that
            highlights your skills, experience, and achievements. "
          </p>
          <div className=" w-[40%]">
            <img
              src="https://www.gifcen.com/wp-content/uploads/2021/05/minions-gif-7.gif"
              alt=""
            />
          </div>
        </div>

        <div>
          <p className="text-2xl font-semibold text-slate-800">
            Share with your friends
          </p>
        </div>
        <div className="flex  gap-3 items-center">
          <div className=" w-[40px] h-[40px]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
              alt=""
            />
          </div>
          <div className=" w-[70px] h-[70px] mt-9">
            <img
              src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw=w600-h300-pc0xffffff-pd"
              alt=""
            />
          </div>
          <div className=" w-[40px] h-[40px] mt-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/220px-Logo_of_Twitter.svg.png"
              alt=""
            />
          </div>
          <div className=" w-[50px] h-[50px]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
