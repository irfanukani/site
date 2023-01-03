import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function FeaturedPosts() {
    return (
        <React.Fragment>
            <h1 className='text-4xl font-bold mt-20 mb-8'>Featured Posts</h1>
            <section className='flex flex-col sm:flex-row gap-8 w-full mt-4'>
                <Link href={'/'} className="transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8]">
                    <div className='flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4 gap-12'>
                        <div className='text-lg font-semibold'>Styling React / NextJS Compoenent with better Readability</div>
                        <div className='inline'>
                            15,400 Reads
                        </div>
                    </div>
                </Link>

                <Link href={'/'} className="transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 from-pink-400 to-yellow-500">
                    <div className='flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4 gap-12'>
                        <div className='text-lg font-semibold'>Styling React / NextJS Compoenent with better Readability</div>
                        <div className='inline'>
                            15,400 Reads
                        </div>
                    </div>
                </Link>

                <Link href={'/'} className="transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 from-blue-900 to-purple-500">
                    <div className='flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4 gap-12'>
                        <div className='text-lg font-semibold'>Styling React / NextJS Compoenent with better Readability</div>
                        <div className='inline'>
                            15,400 Reads
                        </div>
                    </div>
                </Link>
            </section>
            <Link href={'/blog'}>
                <div className='mt-8'>Read All</div>
            </Link>
        </React.Fragment>
    )
}
