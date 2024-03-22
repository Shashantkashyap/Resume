import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import PersonalInfo from "../components/Details/PersonalInfo"
import WorkExp from "../components/Details/WorkExp"
import Education from "../components/Details/Education"
import Skills from "../components/Details/Skills"

function DetailFilling() {
  const [active,setActive] = useState(1)
  return (
    <div className='lg:w-11/12 mx-auto'>
      <div className='w-full lg:h-[30%] md:h-[20%] sm:h-[20%] shadow-md rounded-md'>
        <Navbar/>
      </div>

      <div className='w-11/12 mx-auto flex lg:flex-row flex-col md:gap-10 sm:gap-10 gap-10 lg:p-5 md:p-5 sm:p-1 mt-10 justify-between'>

      {/* left section */}
      <div className='shadow-md lg:w-[25%] md:w-[50%] sm:w-[60%] md:mx-auto sm:mx-auto h-fit cursor-pointer bg-white '>

        <div onClick={()=> setActive(1)} className={`flex items-center p-2 border-b-2`}>
        <div className= {`w-[3px] h-[30px] bg-blue-500 ${active === 1 ?(" block") : (" hidden")}`}></div>
          <p className={` w-[90%] text-lg py-2 px-4 flex items-center justify-center ${active === 1 ? (" text-blue-500 font-semibold") : ("text-black")}`}>Personal Info</p>
          
        </div>

        <div onClick={()=> setActive(2)} className={`flex items-center p-2 border-b-2`}>
        <div className= {`w-[3px] h-[30px] bg-blue-500 ${active === 2 ?(" block") : (" hidden")}`}></div>
          <p className={` w-[90%] text-lg py-2 px-4 flex items-center justify-center ${active === 2 ? (" text-blue-500 font-semibold") : ("text-black")}`}>Work Experience</p>
          
        </div>

        <div onClick={()=> setActive(3)} className={`flex items-center p-2 border-b-2`}>
        <div className= {`w-[3px] h-[30px] bg-blue-500 ${active === 3 ?(" block") : (" hidden")}`}></div>
          <p className={` w-[90%] text-lg py-2 px-4 flex items-center justify-center ${active === 3 ? (" text-blue-500 font-semibold") : ("text-black")}`}>Education</p>
          
        </div>

        <div onClick={()=> setActive(4)} className={`flex items-center p-2`}>
        <div className= {`w-[3px] h-[30px] bg-blue-500 ${active === 4 ?(" block") : (" hidden")}`}></div>
          <p className={` w-[90%] text-lg py-2 px-4 flex items-center justify-center ${active === 4 ? (" text-blue-500 font-semibold") : ("text-black")}`}>Key Skills</p>
          
        </div>



      </div>



      {/*right Section */}
      <div className=' lg:w-[50%] md:w-[80%] sm:w-[95%] mx-auto shadow-md bg-white rounded-md'>

        <div className=' py-2 px-5'>
          {
            active === 1 ? (<PersonalInfo setActive={setActive} active={active}/>) : (<div></div>)
          }
        </div>

        <div className=' py-2 px-5'>
          {
            active === 2 ? (<WorkExp setActive={setActive} active={active}/>) : (<div></div>)
          }
        </div>

        <div>
          {
            active === 3 ? (<Education setActive={setActive} active={active}/>) : (<div></div>)
          }
        </div>

        <div>
          {
            active === 4 ? (<Skills setActive={setActive} active={active}/>) : (<div></div>)
          }
        </div>

      </div>

      </div>

    </div>
  )
}

export default DetailFilling
