import React from 'react';

function IphoneMockup() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] md:w-[300px] w-[100%] shadow-xl">
        <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] "></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] "></div>
        <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] "></div>
        <div className="rounded-[2rem] overflow-hidden w-[100%] md:w-[272px] h-[572px] bg-white dark:bg-gray-800">
          <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png" className="dark:hidden w-full h-full" alt="" />
          <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png" className="hidden dark:block w-full h-full" alt="" />
        </div>
      </div>
    </div>
  );
}

export default IphoneMockup;
