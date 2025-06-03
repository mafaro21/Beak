import BackButton from '@/components/backbutton'
import Navigation from '@/components/navigation'
import Sidebar from '@/components/sidebar'
import React from 'react'

export default function Following() {
    return (
        <>
            <div className="flex justify-center min-h-screen max-w-100vw">

                <div className="flex  lg:max-w-100vw md:max-w-100vw ">
                    <Navigation />
                    <main className="xl:w-[600px] lg:w-[560px] md:w-[580px] sm:w-[590px] xs:w-[20px] md:mr-4 border-x mb-4 min-h-screen">
                        <div className="p-2 px-4 border-b  font-bold text-xl sticky top-0 z-10 " style={{ backgroundColor: 'var(--background)' }}>
                            <div className='flex'>

                                <BackButton />

                                <div className='ml-1'>
                                    <div className='mt-2 ml-1'>Profile</div>
                                    <div>
                                        <div className='flex'>
                                            <div className='text-gray-500 text-sm ml-1'>@blah</div>
                                            {/* <BadgeCheck className={`fill-blue-400 ${theme === 'light' ? 'text-white' : 'text-black'} mt-1`} /> */}
                                        </div>
                                    </div>



                                </div>
                            </div>

                            <div className='flex w-full mt-5'>
                                <div className='w-1/2 text-center text-sm text-gray-500'>Following</div>
                                <div className='w-1/2 text-center text-sm text-gray-500'>Followers</div>
                            </div>
                        </div>



                    </main>

                    <Sidebar />
                </div>
            </div>
        </>
    )
}
