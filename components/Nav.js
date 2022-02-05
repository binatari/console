import { motion } from 'framer-motion';

const Nav = ({backgroundColor}) => {
  return <motion.nav className={""} animate={{
    backgroundColor: backgroundColor ? '#fff' : '#000'
  }}>
      <div className='w-4/5 py-4 flex justify-between items-center mx-auto container '>
      <div className="">
         <img src={require('../public/logo.png').default.src} alt="" className='h-8 cursor-pointer md:hidden'/>
         <img src={require('../public/full-logo.png').default.src} alt="" className='h-8 cursor-pointer hidden md:block'/>
      </div>
      <div className='flex'>
          <img src={require('../public/search.png').default.src} className='h-8 cursor-pointer hidden md:block'/>
          <img src={require('../public/menu.png').default.src} alt="" className='h-8 ml-8 cursor-pointer' />
      </div>
      </div>
  </motion.nav>;
};

export default Nav;
