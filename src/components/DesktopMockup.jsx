import React from 'react'

function DesktopMockup() {
    return (
        <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-x1'>

            <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                    <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png" class="dark:hidden h-[156px] md:h-[278px] w-full rounded-xl" alt="" />
                    <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png" class="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg" alt="" />
                </div>
            </div>
            <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[30px] max-w-[600px] md:h-[21px] md:max-w-[900px]">
                <div class="relative left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[96px] h-[10px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
            </div>

        </div>
    )
}

export default DesktopMockup