import Head from 'next/head'
import React from 'react'
import Navbar from '../@components/Navbar/Navbar'
import Hero from '../@components/Hero/Hero';
import FeaturedPosts from '../@components/Blog/FeaturedPosts';

const Home = () => {
  return (
    <>
      <Head>
        <title>Irfan Ukani - Developer | Artist</title>
      </Head>
      <main className='bg-white dark:bg-gray-900 transition dark:text-white'>
        <section className='max-w-2xl h-screen 0 mx-auto p-4 sm:p-2'>
          <Navbar />
          <Hero />
          <FeaturedPosts />
        </section>
      </main>
    </>
  )
}

export default Home;