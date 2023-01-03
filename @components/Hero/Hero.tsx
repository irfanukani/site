import React from 'react'

export default function Hero() {
    return (
        <section className='flex flex-col-reverse p-8 md:p-2  md:flex-row lg:text-lg gap-8 justify-between w-full mt-8'>
            <div className='flex flex-col items-center sm:items-start text-center md:text-start'>
                <div className='text-5xl font-bold'>Irfan Ukani</div>
                <span className='text-gray-500 text-md'>Software Engineer and Freelancer.</span>
                <p className='mt-2'>Creating Beautiful and smooooth User Experiences for everyone! </p>
            </div>
            <div className='flex flex-col items-center sm:items-start text-center'>
                <img loading='lazy' alt='Irfan Image' width={120} height={120} src={"https://avatars.githubusercontent.com/u/57797732?v=4"} ></img>
            </div>
        </section>
    )
}
