import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTemplate } from '../redux/templateSlice';
import { selectPost } from '../redux/postSlice';
import Navbar from '../components/Navbar';
import HomeTemplate from '../components/HomeTemplate';
import TypingSpan from '../components/TypingSpan';
import p1 from '../assets/1.png';
import p2 from '../assets/2.png';
import p3 from '../assets/3.png';
import p4 from '../assets/4.png';
import { toast, Toaster } from 'react-hot-toast';

function Home() {
  const [post, setPost] = useState('');
  const selectedTemplate = useSelector((state) => state.template.selectedTemplate);
  const dispatch = useDispatch();

  const handleTemplateSelect = (template) => {
    dispatch(selectTemplate(template));
    toast.success('Template selected successfully!');
  };

  const handlePost = (post) => {
    dispatch(selectPost(post));
  };

  useEffect(() => {
    handlePost(post);
  }, [post, setPost]);

  const isPostValid = post.trim() !== ''; 

  const handleTemplateSelection = () => {
    if (!isPostValid) {
      toast.error('Please fill out the "Post Applied For" field before selecting a template.');
      return;
    }
    
    
  };

  return (
    <div className='lg:w-11/12 mx-auto relative home-container'>
      <Toaster />
      <div className='w-full lg:h-[30%] md:h-[20%] sm:h-[20%] shadow-md rounded-md z-100'>
        <Navbar />
      </div>
      <div className='text-3xl p-5'>
        <p>
          Create Your Resume To{' '}
          <span className='font-bold running-script ml-2'>
            <TypingSpan text='Explore The World . . .' />
          </span>
        </p>
      </div>

      <div className='lg:p-8 md:p-10 sm:p-2 flex flex-col'>
        <div className='p-2 mt-3 flex flex-col lg:gap-3 gap-1'>
          <div className='flex lg:flex-row max-md:flex-row max-sm:flex-col md:justify-between max-md:justify-between lg:justify-between'>
            <p className='lg:text-3xl md:text-3xl sm:text-2xl font-semibold z-10'>Templates</p>
            <div className='flex flex-col gap-3 w-[30%]'>
              <p className='text-xl font-semibold text-slate-700 text-opacity-70 mr-5 z-10'>Post Applied For :</p>
              <input type='text' className='p-2 border rounded-md max-md:w-full shadow-md z-10' onChange={(e) => setPost(e.target.value)} />
            </div>
          </div>
          <p className='text-lg font-medium z-10'>Select a template to get started</p>
        </div>
        
        {isPostValid ? (
          <div className='w-full h-full lg:flex lg:gap-10 lg:mt-7 md:mt-3 md:p-2 lg:p-5 p-3'>
            <div className='md:w-1/2 sm:w-[90%] lg:w-1/4 h-[20.5rem] flex items-center justify-center rounded-md'>
              <div className='lg:w-[94%] w-[100%] h-[20rem'>
                <HomeTemplate img={p1} onClick={() => handleTemplateSelect('p1')} selected={selectedTemplate === 'p1'} />
              </div>
            </div>
            <div className='md:w-1/2 sm:w-[90%] lg:w-1/4 h-[20.5rem] flex items-center justify-center rounded-md'>
              <div className='lg:w-[94%] w-[100%] h-[20rem'>
                <HomeTemplate img={p2} onClick={() => handleTemplateSelect('p2')} selected={selectedTemplate === 'p2'} />
              </div>
            </div>
            <div className='md:w-1/2 sm:w-[90%] lg:w-1/4 h-[20.5rem] flex items-center justify-center rounded-md'>
              <div className='lg:w-[94%] w-[100%] h-[20rem'>
                <HomeTemplate img={p3} onClick={() => handleTemplateSelect('p3')} selected={selectedTemplate === 'p3'} />
              </div>
            </div>
            <div className='md:w-1/2 sm:w-[90%] lg:w-1/4 h-[20.5rem] flex items-center justify-center rounded-md'>
              <div className='lg:w-[94%] w-[100%] h-[20rem'>
                <HomeTemplate img={p4} onClick={() => handleTemplateSelect('p4')} selected={selectedTemplate === 'p4'} />
              </div>
            </div>
          </div>
        ) : (
          <div className='text-2xl font-semibold mt-10'>
            <TypingSpan text={"Please fill out the 'Post Applied For' field to proceed : I am waiting . . ."}/>
          <div className=' w-[40%] mt-5 rounded-md'>
          <img src="https://images2.alphacoders.com/126/126492.jpg" alt="" className=' rounded-md'/>
          </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
