import React from 'react'
import Navbar from '../components/Navbar'
 
import ProfileCard from '../components/Committee/ProfileCard'
import CommitteeMain from '../components/Committee/CommitteeMain'
const Committee = () => {
 
 

  return (
    <div className='bg-black font-Lato'>
    <div className='h-[80vh] flex bg-black flex-col'>
      <Navbar/>
      <CommitteeMain/>
      <h1 className=' pt-28 uppercase text-6xl bg-black text-primary font-light font-Bebas text-center'>Advisors</h1>
      <ProfileCard/>
    </div>
    </div>
  )
} 
 
export default Committee 