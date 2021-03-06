import Head from 'next/head'
import { motion, LayoutGroup } from 'framer-motion';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import TextTransition, { presets } from "react-text-transition";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import { useState, useEffect } from 'react';
import Nav from '../components/Nav';
      

export default function Home({posts, seo}) {
const [state, setState] = useState(false)
const [index, setIndex] = useState(0);

console.log(seo)
const variants = {
  initial : {
    width: state? '70%' : '30%'
  },
  visible : {
    width: state? '30%' : '70%'
  }
}

const variants2 = {
  initial : {
    width: state? '20%' : '60%'
  },
  visible : {
    width: state? '60%' : '20%'
  }
}

const variants3 = {
  initial : {
   backgroundColor:'#000'
  },
  visible : {
    backgroundColor:'#fff'
  }
}

useEffect(() => {
  state ? setIndex(1): setIndex(0)

}, [state]);

  return (
    <div>
      <Head>
        <title>{seo.name}</title>
        <meta name="description" content={seo.description} />
        <link rel="icon" href={seo._embedded["wp:featuredmedia"][0].source_url}/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet"/>


      </Head>

      <Nav backgroundColor={state}/>

      <motion.main className={`min-h-screen overflow-hidden`} animate={{
        backgroundColor: state ? '#fff' : '#000'
      }}>
      <div className='container relative min-h-screen mx-auto items-center justify-between overflow-hidden hidden md:flex'>
        <motion.div animate={{
        rotate: state ? 235 : 0,
        
      }} transition={{ ease: "easeInOut", duration: 0.9}} className='absolute left-1/2 -ml-[12rem] top-1/2 -mt-[16rem] overflow-hidden'>
          <img src={require('../public/button-x.png').default.src} alt="" className='absolute top-[1%] left-1/2 h-8' />
          <img src={require('../public/button-yellow.png').default.src} alt=""  className='absolute bottom-1/3 right-0 h-8'/>
          <img src={require('../public/button-a.png').default.src} alt="" className='absolute bottom-1/4 left-8 h-8' />
        <motion.div animate={{
        backgroundImage: !state ? 'linear-gradient(to bottom right, #fff, #000)' : 'linear-gradient(to right, #86ce0d, #000 )'
        
      }} transition={{ ease: "easeInOut", duration: 0.9}}  className={`${styles.clip} h-[34rem] w-[34rem]  overflow-hidden -z-20`}/>
        </motion.div>
        <div className='z-50'>
        <span className={` text-2xl font-semibold ${!state?'text-white':'text-black'} relative bottom-10`}>Xbox Series x|s</span>
          <h1 className='text-lime-600 text-5xl font-bold uppercase'>
          <TextTransition
        text={ !state ? posts[0].acf.console_name : posts[1].acf.console_name  }
        direction={state?'up':'down'}
        springConfig={ presets.gentle }
      />
          </h1>
          <ul className={`flex pt-10 pb-16 ${state? 'text-black' : 'text-white'}`}>
            <motion.li className='mr-6'>
              <p className={`${state?'text-red-500 text-2xl font-bold' :'text-red-500 font-bold text-2xl'} flex text-center`}>
                {!state && (<span className='text-sm font-normal text-white flex'>true</span>)}
                  <TextTransition
                  text={ !state ? posts[0].acf.console_features.resolution : posts[1].acf.console_features.resolution  }
                  springConfig={ presets.gentle }
                />
              {state && (<span className={`text-xl block ${state?'text-black':'text-white'} font-normal`}>p</span>)}
              </p><span className=''>Gaming</span></motion.li>
            <motion.li className='mr-6 '><p className='text-md text-center'>up to <span className='text-blue-600 text-2xl font-bold'> {!state ? posts[0].acf.console_features.frames_per_second : posts[1].acf.console_features.frames_per_second} </span></p><span className=''>Frames per second</span></motion.li>
            <motion.li ><p className='text-sm text-center'><span className='text-amber-400 text-2xl font-bold'>{!state ? posts[0].acf.console_features.hdr : posts[1].acf.console_features.hdr}</span> HDR</p><span className=''>High Dynamic Range</span></motion.li>
          </ul>
          <span className={`pb-10 text-3xl font-bold  flex ${state?'text-black':'text-white'}`}>{
            state? posts[1].acf.console_price.split('').map((post,i)=>{
             return (<TextTransition
              text={ i == 0? '$' + post : post }
              springConfig={ presets.gentle }
            />)
            }) : posts[0].acf.console_price.split('').map((post, i)=>{
             return (<TextTransition
              text={ i == 0? '$' + post : post }
              springConfig={ presets.gentle }
            />)
            })
          }</span>
          <button className='py-2 px-4 text-white font-semibold text-xl bg-lime-600 hover:bg-lime-700 transition-all'>Lets Get Started</button>
        </div>
        <div className='flex z-30 w-[60%]'>
          <motion.div variants={variants} initial='initial' animate='visible' transition={{
    layout: { duration: 0.6, ease:[0.2,0.5,0.4,0.8] }
  }} className={` cursor-pointer ${state ? 'order-2 ':''}`} layout onClick={()=>setState(!state)}>
            <motion.img  src={posts[0].acf.console_image} layout transition={{ duration: 1.8}} alt="" className='object-center object-cover ' />
          </motion.div>
          <motion.div variants={variants2} initial='initial' animate='visible' transition={{
    layout: { duration: 0.6, ease:[0.2,0.5,0.4,0.8]  }
  }} className={` cursor-pointer`} layout onClick={()=>setState(!state)}>
            <motion.img  src={posts[1].acf.console_image} layout transition={{ duration: 1.8}} alt="" className='object-center object-cover ' />
          </motion.div>
        </div>

      </div>
      <div className='container relative min-h-screen mx-auto items-center justify-around overflow-hidden flex flex-col md:hidden'>
        <div>
      <span className={` text-2xl text-center font-semibold ${!state?'text-white':'text-black'}`}>Xbox Series x|s</span>
          <h1 className='text-lime-600 text-3xl flex justify-center items-center font-bold capitalize'>
          <TextTransition
        text={ !state ? posts[0].acf.console_name : posts[1].acf.console_name  }
        direction={state?'up':'down'}
        springConfig={ presets.gentle }
      />
          </h1>
          </div>
        <div className='relative w-full'>
      <motion.div animate={{
        rotate: state ? 235 : 0,
        
      }} transition={{ ease: "easeInOut", duration: 0.9}} className='absolute left-1/2 -ml-32 top-1/2 -mt-28 overflow-hidden'>
        <motion.div animate={{
        backgroundImage: !state ? 'linear-gradient(to bottom right, #fff, #000)' : 'linear-gradient(to right, #86ce0d, #000 )'
        
      }} transition={{ ease: "easeInOut", duration: 0.9}}  className={`${styles.clip} h-64 w-64  overflow-hidden -z-20`}/>
        </motion.div>
        <Swiper
        cssMode={true}
        navigation={{
          prevEl:'.prev',
          nextEl:'.next'
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper flex justify-center items-center h-80 py-10 my-10 "
      >
       <SwiperSlide className='flex justify-center items-center'>
         <img src={posts[0].acf.console_image} alt="" className='h-4/5' />
       </SwiperSlide>
       <SwiperSlide className='flex justify-center items-center'>
         <img src={posts[1].acf.console_image} alt="" className='h-4/5' />
       </SwiperSlide>
      </Swiper>
      
      {
        !state ? (
          <>
        <span className= 'cursor-pointer text-lime-600 text-xl w-full flex justify-center items-center text-center next' onClick={()=>setState(true)}>{posts[1].acf.console_name + '>'}</span>
        <span className='h-0 prev'/>
        </>
        ) : (
          <>
        <span className='h-0 next'/>
        <span className='cursor-pointer text-lime-600 text-xl w-full flex justify-center items-center text-center prev ' onClick={()=>setState(false)}>{ '<' + posts[0].acf.console_name }</span>
        </>
        )
      }
        </div>
        <div className='flex justify-center items-center flex-col'>
        <ul className={`flex justify-around pt-6 pb-6 ${state? 'text-black' : 'text-white'}`}>
            <motion.li className='w-[30%] flex justify-start flex-col'>
              <p className={`${state?'text-red-500 text-2xl font-bold' :'text-red-500 font-bold text-2xl'} flex justify-center fleex-col text-center`}>
                {!state && (<span className='text-sm font-normal text-white flex'>true</span>)}
                  <TextTransition
                  text={ !state ? posts[0].acf.console_features.resolution : posts[1].acf.console_features.resolution  }
                  springConfig={ presets.gentle }
                />
              {state && (<span className={`text-xl text-center block ${state?'text-black':'text-white'} font-normal`}>p</span>)}
              </p><span className='w-full text-center'>Gaming</span></motion.li>
            <motion.li className='w-[30%] flex justify-start flex-col'><p className='text-md text-center'>up to <span className='text-blue-600 text-2xl font-bold text-center'> {!state ? posts[0].acf.console_features.frames_per_second : posts[1].acf.console_features.frames_per_second} </span></p><span className='w-full text-center'>Frames per second</span></motion.li>
            <motion.li className='w-[30%] flex justify-start flex-col'><p className='text-sm text-center'><span className='text-amber-400 text-2xl font-bold text-center '>{!state ? posts[0].acf.console_features.hdr : posts[1].acf.console_features.hdr}</span> HDR</p><span className='w-full text-center'>High Dynamic Range</span></motion.li>
          </ul>
          <span className={`pb-10 text-3xl font-bold  flex ${state?'text-black':'text-white'}`}>{
            state? posts[1].acf.console_price.split('').map((post,i)=>{
             return (<TextTransition
              text={ i == 0? '$' + post : post }
              springConfig={ presets.gentle }
            />)
            }) : posts[0].acf.console_price.split('').map((post, i)=>{
             return (<TextTransition
              text={ i == 0? '$' + post : post }
              springConfig={ presets.gentle }
            />)
            })
          }</span>
          <button className='py-2 px-4  mb-10 text-white font-semibold text-md bg-lime-600 hover:bg-lime-700 transition-all max-w-[10em]'>Add to Cart</button>
        </div>
      </div>
     
      </motion.main>

    </div>
  )
}


export async function getStaticProps() {
 
    const postsRes = await fetch('https://binaxbox.000webhostapp.com/wp-json/wp/v2/products?_fields=acf&acf_format=standard');
    const posts = await postsRes.json();
    const seoRes = await fetch('https://binaxbox.000webhostapp.com/wp-json?_embed&_fields=name,description,site_logo,site_icon');
    const seo = await seoRes.json();
  return {
    props: {
      posts,
      seo
    },
    revalidate: 1,
  }
}
 